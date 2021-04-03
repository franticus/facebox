import React from 'react';
import classes from './Header.module.css'

const Header = () => {
    return (
            <header className={classes.header}>
                <img src="https://img.icons8.com/ios/452/bottom.png" alt=""/>
                <span>ВЖОПЕ</span>
            </header>
    );
};

export default Header;
