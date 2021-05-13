import React from 'react';
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";
import logo from '../../assets/img/53-512.png'

const Header = () => {
    return (
            <header className={classes.header}>
                <img src={logo} alt=""/>
                <NavLink to="/profile">ВЖОПЕ</NavLink>
            </header>
    );
};

export default Header;
