import React, { useState } from 'react';
import FormButton from '../Buttons/FindButton';

import styles from './PostcodeForm.module.css';

export default function PostcodeForm() {
  const [address, setAddress] = useState(null);
  const [postcode, setPostcode] = useState('');

  const onSubmitPostcode = () => {
    fetch(
      ` https://interviewtask.azurewebsites.net/api/address?postcode=${postcode}`
    )
      .then((response) => response.json())
      .then((data) => setAddress(data.addresses))
      .catch((err) => err);
  };

  const postcodeHandler = (e) => {
    setPostcode(
      e.target.value
        .toUpperCase()
        .replace(/\s+/g, '')
        .replace(/^(.*)(.{3})$/, '$1 $2')
    );
  };

  return (
    <div className={styles.postcodeContainer}>
      <label htmlFor="postcode">
        <h3 className={`${styles.inputLabel} ${styles.required}`}>Postcode:</h3>
        <input
          type="text"
          id="postcode"
          name="postcode"
          required
          onChange={postcodeHandler}
        />
      </label>

      {address?.length === 0 && (
        <div className={styles.notValid}>
          {` We couldn't find any matches. Try checking the spelling and searching
          again.`}
        </div>
      )}
      <FormButton
        type="button"
        name="Find your address"
        postcode={onSubmitPostcode}
      />

      {address?.length > 0 && (
        <label className={styles.streetSelect} htmlFor="street-select">
          <h3 className={styles.inputLabel}>Select your address</h3>
          <select
            className={styles.optionsContainer}
            name="streets"
            id="street-select"
            required
          >
            {address.map((item) => (
              <option key={item.Id}>{item.Name}</option>
            ))}
          </select>
        </label>
      )}
    </div>
  );
}
