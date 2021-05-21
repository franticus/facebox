import React from 'react';
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";
import logo from '../../assets/img/Facebox.png'

const Header = (props) => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <img src={logo} alt=""/>
                <NavLink to="/profile">FaceBox</NavLink>
            </div>
            <div className={classes.loginBlock}>
                {props.isAuth
                    ? <NavLink to='/profile'>{props.login}</NavLink>
                    : <NavLink to='/login'>Вход</NavLink>
                }
            </div>
        </header>
    );
};

export default Header;
