import React from 'react';
import { CreatedAt } from './CreatedAt';
import styles from './textcontent.css';
import { Title } from './Title';
import { UserLink } from './UserLink';

export function TextContent() {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <UserLink/>
        <CreatedAt/>
      </div>
      <Title/>
    </div>
  );
}
