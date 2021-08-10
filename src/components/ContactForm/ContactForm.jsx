import React, { useState } from 'react';
import PostcodeForm from '../PostcodeForm/PostcodeForm';
import SubmitButton from '../Buttons/SubmitButton';
import DateOfBirth from '../DateOfBirth/DateOfBirth';

import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [selected, setSelected] = useState(true);

  const submitFormHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form className={styles.formContainer} onSubmit={submitFormHandler}>
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
        <h3 className={`${styles.inputLabel} ${styles.required}`}>Email address</h3>
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
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          required
          placeholder="+44"
        />
      </label>

      <DateOfBirth />

      <div className={styles.radioContainer}>
        <h2 className={`${styles.formHeading} ${styles.required}`}>
          Do you live in Colchester?
        </h2>
        <div className={styles.radioButtonContainer}>
          <label className={styles.radioLabel} htmlFor="yes">
            <input
              type="radio"
              id="yes"
              value="Yes"
              name="addressConfirm"
              onClick={() => setSelected(true)}
              defaultChecked={selected}
            />

            <h3>Yes</h3>
          </label>

          <label className={styles.radioLabel} htmlFor="no">
            <input
              type="radio"
              id="no"
              value="No"
              name="addressConfirm"
              onClick={() => setSelected(false)}
            />

            <h3 className={styles.radioLabel}>No</h3>
          </label>
        </div>
      </div>

      <div className={styles.secondaryForm}>
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
        <SubmitButton name="Send your message" />
      </div>
    </form>
  );
}
