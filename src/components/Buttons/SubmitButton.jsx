import React from 'react';
import styles from './FormButton.module.css';

export default function SubmitButton({ name }) {
  return (
    <button type="submit" className={styles.formButton}>
      {name}
    </button>
  );
}
