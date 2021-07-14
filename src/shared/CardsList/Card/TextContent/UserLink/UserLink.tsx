import React from 'react';
import styles from './userlink.css';

export function UserLink() {
  return (
    <div className={styles.userLink}>
      <img src="https://cdn.dribbble.com/users/6392884/screenshots/16017048/media/ca143972ee1500eac69f62e4a71d1d05.jpg?compress=1&resize=400x300" className={styles.avatar} />
      <a href="#user-url" className={styles.username}>Дмитрий Гришин</a>
    </div>
  );
}
