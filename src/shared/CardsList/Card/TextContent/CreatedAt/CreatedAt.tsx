import React from 'react';
import styles from './createdat.css';

export function CreatedAt() {
  return (
    <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>опубликовано </span>
          4 часа назад</span>
  );
}
