import React from 'react';
import StartIcon from '../Icons/StarIcon';
import styles from './SkillsContent.module.css';

export default function SkillsContent() {
  return (
    <>
      <div className={styles.skillsContainer}>
        <div className={styles.starIcon}>
          <StartIcon />
        </div>
        <div className={styles.skillsContent}>
          <h3 className={styles.skillTitle}>Lorem ipsum</h3>
          <p className={styles.skillDescription}>
            Vivamus suscipit tortor eget felis porttitor volutpat. Donec sollicitudin
            molestie malesuada.
          </p>
        </div>
      </div>
    </>
  );
}
