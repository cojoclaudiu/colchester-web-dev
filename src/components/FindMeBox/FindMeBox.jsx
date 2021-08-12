import React from 'react';

import styles from './FindMeBox.module.css';

export default function FindMeBox() {
  return (
    <div className={styles.findMeContainer}>
      <div className={styles.contentContainer}>
        <h2 className={styles.findTitle}>Find me</h2>
        <p className={styles.findDescription}>
          Rowan House, 33 Sheepen Road, Colchester, CO3 3WG
        </p>
      </div>
    </div>
  );
}
