import React from 'react';
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
            <header className={classes.header}>
                <img src="https://img.icons8.com/ios/452/bottom.png" alt=""/>
                <NavLink to="/profile">ВЖОПЕ</NavLink>
            </header>
    );
};

export default Header;
