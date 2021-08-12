import React from 'react';
import { Link } from 'react-router-dom';
import ArrowRightIcon from 'components/Icons/ArrowRightIcon';
import styles from './ContactBox.module.css';

export default function ContactBox() {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.iconBox}>
        <ArrowRightIcon />
      </div>
      <div className={styles.contentBox}>
        <p>Send me a message using the contact form I created</p>
        <Link to="/contact">
          <div className={styles.contactLink}>Get in touch</div>
        </Link>
      </div>
    </div>
  );
}
