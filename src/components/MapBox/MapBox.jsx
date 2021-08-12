import React from 'react';
import MapImg from 'components/Icons/MapImg';

import styles from './MapBox.module.css';

export default function MapBox() {
  return (
    <div className={styles.mapContainer}>
      <MapImg />
    </div>
  );
}
