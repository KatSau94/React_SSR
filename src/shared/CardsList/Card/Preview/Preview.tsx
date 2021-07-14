import React from 'react';
import styles from './preview.css';

export function Preview() {
  return (
    <div className={styles.preview}>
      <img className={styles.previewImg} src="https://cdn.dribbble.com/users/2373107/screenshots/16021533/media/8d10caa35503841d9408bc1f9daaf810.png?compress=1&resize=400x300" alt="" />
    </div>
  );
}
