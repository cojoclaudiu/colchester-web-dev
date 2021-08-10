import React from 'react';
import styles from './Header.module.css';

export default function Header({ title }) {
  return (
    <header className={styles.headerContainer}>
      <h3 className={styles.secondaryHeading}>Your name goes here</h3>
      <h1 className={styles.mainHeading}>{title}</h1>
    </header>
  );
}
