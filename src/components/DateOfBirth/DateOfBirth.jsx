import React from 'react';
import useDateValidation from 'hooks/useValidation';
import Calendar from 'components/Icons/Calendar';

import styles from './DateOfBirth.module.css';

export default function DateOfBirth() {
  const { isValidHandler, validDate, getAge } = useDateValidation();
  return (
    <>
      <label className={styles.dateOfBirthContainer} htmlFor="dateOfBirth">
        <h3 className={`${styles.inputLabel} ${styles.required}`}>Date of birth</h3>
        <div className={styles.inputDate}>
          <input
            type="text"
            id="dateOfBirth"
            name="dateOfBirth"
            placeholder="dd/mm/YYYY"
            onChange={isValidHandler}
            required
          />
          <div className={styles.calendarIcon}>
            <Calendar />
          </div>
        </div>

        <div className={styles.validationContainer}>
          {validDate.validFormat !== null && !validDate.validFormat && (
            <>
              <p className="notValid">Incorrect format for the date of birth</p>
              <p className="valid">eg. 03/08/1992</p>
            </>
          )}

          {validDate?.validFormat && <p className="valid">Date format valid</p>}
          {getAge(validDate.dateOfBirth) >= 18 && <p className="valid">Valid age</p>}
          {getAge(validDate.dateOfBirth) < 18 && (
            <p className="notValid">Minimum age: 18 years old</p>
          )}
        </div>
      </label>
    </>
  );
}
