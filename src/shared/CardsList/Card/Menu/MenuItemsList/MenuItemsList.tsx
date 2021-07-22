import React from 'react';
import { generateId } from '../../../../../utils/react/generateRandomIndex';
import styles from './menuitemslist.css';
import { pipe } from '../../../../../utils/js/compose';
import { preventDefault } from '../../../../../utils/react/preventDefault';
import { stopPropagation } from '../../../../../utils/react/stopPropagation';

interface IMenuItemsList {
  id: string;
  text: string;
  img?: JSX.Element;
  onlyDesktop?: boolean;
}

export function MenuItemsList(props:{list: IMenuItemsList[]}) {

  return (
    <ul className={styles.menuItemsList}>
      {props.list.map((item)=>item.onlyDesktop ? <li key={item.id} className={styles.menuItem + " " + styles.onlyDesktop}>{item.img}  <span><a onClick={pipe(preventDefault, stopPropagation)}>{item.text}</a></span></li> : <li key={item.id} className={styles.menuItem}>{item.img}  <span><a onClick={pipe(preventDefault, stopPropagation)}>{item.text}</a></span></li>)}
    </ul>
  );
}