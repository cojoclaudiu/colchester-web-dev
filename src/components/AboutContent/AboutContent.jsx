import React from 'react';
import SkillsContent from '../SkillsContent/SkillsContent';

import styles from './AboutContent.module.css';

export default function AboutContent() {
  return (
    <>
      <div className={styles.paragraphContainer}>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
          ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
          pellentesque eu, pretium quis, sem.
        </p>
        <br />
        <p>
          Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim
          justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis
          eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
          semper nisi.{' '}
        </p>
      </div>

      <section className={styles.skillsSection}>
        <h2 className={styles.sectionHeading}>My top skills</h2>

        <SkillsContent />
        <SkillsContent />
        <SkillsContent />
        <SkillsContent />
      </section>
    </>
  );
}
