import React from 'react';
import FacebookIcon from 'components/Icons/FacebookIcon';
import TwitterIcon from 'components/Icons/TwitterIcon';
import LinkedinIcon from 'components/Icons/LinkedinIcon';
import YoutubeIcon from 'components/Icons/YoutubeIcon';

import styles from './SocialMediaBox.module.css';

export default function SocialMediaBox() {
  return (
    <div className={styles.socialMediaContainer}>
      <h2 className={styles.socialMediaTitle}>Follow me</h2>
      <div className={styles.iconsContainer}>
        <FacebookIcon />
        <TwitterIcon />
        <LinkedinIcon />
        <YoutubeIcon />
      </div>
    </div>
  );
}
