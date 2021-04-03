import React from 'react';
import classes from './NavBar.module.css'
const NavBar = () => {
    return (
        <nav className={classes.nav}>
            <div className={`${classes.item} ${classes.active}`}>
                <a href="/">Профиль</a>
            </div>
            <div className={classes.item}>
                <a href="/">Сообщения</a>

            </div>
            <div className={classes.item}>
                <a href="/">Лента</a>
            </div>
            <br/>
            <div className={classes.item}>
                <a href="/">Настройки</a>
            </div>
        </nav>
    );
};

export default NavBar;
