import React from 'react';
import ContactBox from 'components/ContactBox/ContactBox';
import Laptop from 'components/Icons/Laptop';
import styles from './AboutSidebar.module.css';

export default function AboutSidebar() {
  return (
    <>
      <ContactBox />
      <div className={styles.imageContainer}>
        <Laptop />
      </div>
    </>
  );
}
