import React, { useState } from 'react';
import Calendar from '../Icons/Calendar';
import FormButton from '../FormButton/FormButton';
import PostcodeForm from '../PostcodeForm/PostcodeForm';

import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [selected, setSelected] = useState(true);

  return (
    <form className={styles.formContainer}>
      <div className={styles.name}>
        <div className={styles.nameContainer}>
          <label className={styles.firstName} htmlFor="firstName">
            <h3 className={`${styles.inputLabel} ${styles.required}`}>First name</h3>
            <input type="text" id="firstName" name="firstName" required />
          </label>

          <label className={styles.lastName} htmlFor="lastName">
            <h3 className={`${styles.inputLabel} ${styles.required}`}>Last name</h3>
            <input type="text" id="lastName" name="lastName" required />
          </label>
        </div>

        <label className={styles.emailContainer} htmlFor="email">
          <h3 className={`${styles.inputLabel} ${styles.required}`}>
            Email address
          </h3>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="e.g. joe.bloggs@gmail.com"
            required
          />
        </label>

        <label className={styles.phoneContainer} htmlFor="phoneNumber">
          <h3 className={`${styles.inputLabel} ${styles.required}`}>
            Telephone number
          </h3>
          <input type="tel" id="phoneNumber" name="phoneNumber" required />
        </label>

        <label className={styles.dateOfBirthContainer} htmlFor="dateOfBirth">
          <h3 className={styles.inputLabel}>Date of birth</h3>
          <div className={styles.inputDate}>
            <input type="date" id="dateOfBirth" name="dateOfBirth" />
            <div className={styles.calendarIcon}>
              <Calendar />
            </div>
          </div>
        </label>
      </div>

      <div className={styles.radioContainer}>
        <h2 className={`${styles.formHeading} ${styles.required}`}>
          Do you live in Colchester?
        </h2>
        <div className={styles.radioButtonContainer}>
          <label htmlFor="yes">
            <input
              type="radio"
              id="yes"
              value="Yes"
              name="addressConfirm"
              onClick={() => setSelected(true)}
              defaultChecked={selected}
            />

            <h3 className={styles.inputLabel}>Yes</h3>
          </label>

          <label htmlFor="no">
            <input
              type="radio"
              id="no"
              value="No"
              name="addressConfirm"
              onClick={() => setSelected(false)}
            />

            <h3 className={styles.inputLabel}>No</h3>
          </label>
        </div>
      </div>

      <div className={styles.homeContainer}>
        <h2 className={styles.formHeading}>What is your home address?</h2>
        {selected && <PostcodeForm />}

        {!selected && (
          <>
            <label htmlFor="address1">
              <h3 className={`${styles.inputLabel} ${styles.required}`}>
                Address line 1
              </h3>
              <input id="address1" name="address1" type="text" required />
            </label>

            <label htmlFor="address2">
              <h3 className={styles.inputLabel}>Address line 2</h3>
              <input id="address2" name="address2" type="text" />
            </label>

            <div className={styles.townPostcodeContainer}>
              <label styles={styles.town} htmlFor="town">
                <h3 className={`${styles.inputLabel} ${styles.required}`}>Town</h3>
                <input type="text" id="town" name="town" required />
              </label>

              <label className={styles.postcodeTown} htmlFor="postcodeTown">
                <h3 className={`${styles.inputLabel} ${styles.required}`}>
                  Postcode
                </h3>
                <input type="text" id="postcodeTown" name="postcodeTown" required />
              </label>
            </div>
          </>
        )}
        <label htmlFor="message">
          <h3
            className={`${styles.inputLabel} ${styles.required} ${styles.messageTitle}`}
          >
            Your message
          </h3>
          <textarea
            id="message"
            name="message"
            className={styles.textarea}
            required
          />
        </label>
      </div>
      <FormButton name="Send your message" />
    </form>
  );
}
