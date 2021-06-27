import React from "react";
import { hot } from 'react-hot-loader/root';

function HeaderComponent(){
    return <h1>Hello React</h1>;
};

export const Header = hot(HeaderComponent);