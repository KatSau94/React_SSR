import React from "react";
import styles from './header.module.css';
import { hot } from 'react-hot-loader/root';

function HeaderComponent(){
    return <h1 className={styles.example}>Hello React</h1>;
};

export const Header = hot(HeaderComponent);