import React from 'react';
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";
import logo from '../../assets/img/Facebox.png'

const Header = () => {
    return (
            <header className={classes.header}>
                <img src={logo} alt=""/>
                <NavLink to="/profile">FaceBox</NavLink>
            </header>
    );
};

export default Header;
