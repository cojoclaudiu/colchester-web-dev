import React from 'react';
import useValidation from '../../hooks/useValidation';
import Calendar from '../Icons/Calendar';

import styles from './DateOfBirth.module.css';

export default function DateOfBirth() {
  const { isValidHandler, validDate, getAge } = useValidation();
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
      </label>

      {/** TO SEE */}
      <>
        {validDate.validFormat !== null && !validDate.validFormat && (
          <>
            <p>Incorrect format for the date of birth</p>
            <p>eg. 03/08/1992</p>
          </>
        )}

        {validDate?.validFormat && <p>Date format valid</p>}
        {getAge(validDate.dateOfBirth) >= 18 && (
          <p className={styles.valid}>Valid age</p>
        )}
        {getAge(validDate.dateOfBirth) < 18 && (
          <p className={styles.required}>You must be over 18</p>
        )}
      </>
    </>
  );
}
