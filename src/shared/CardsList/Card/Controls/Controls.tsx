import React from 'react';
import { Actions } from './Actions';
import { CarmaCounter } from './CarmaCounter';
import { CommentsButton } from './CommentsButton';
import styles from './controls.css';

export function Controls() {
  return (
    <div className={styles.controls}>
      <CarmaCounter/>
      <CommentsButton/>
      <Actions/>
    </div>
  );
}
