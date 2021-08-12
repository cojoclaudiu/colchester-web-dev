import React from 'react';
import styles from './Header.module.css';

export default function Header({ title, name = 'Your name goes here' }) {
  return (
    <header className={styles.headerContainer}>
      <h3 className={styles.secondaryHeading}>{name}</h3>
      <h1 className={styles.mainHeading}>{title}</h1>
    </header>
  );
}
