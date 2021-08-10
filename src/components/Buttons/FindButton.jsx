import React from 'react';
import styles from './FormButton.module.css';

export default function FormButton({ name, postcode }) {
  return (
    <button type="button" className={styles.formButton} onClick={postcode}>
      {name}
    </button>
  );
}
