import React from 'react';
import classes from './NavBar.module.css'
import {NavLink} from "react-router-dom";
const NavBar = (props) => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item} >
                <NavLink to="/profile" activeClassName={classes.active}>Профиль</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/dialogs" activeClassName={classes.active}>Сообщения</NavLink>

            </div>
            <div className={classes.item} >
                <NavLink to="/news" activeClassName={classes.active}>Лента</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/users" activeClassName={classes.active}>Друзья</NavLink>
            </div>
            <br/>
            <div className={classes.item}>
                <NavLink to="/settings" activeClassName={classes.active}>Настройки</NavLink>
            </div>
        </nav>
    );
};

export default NavBar;
