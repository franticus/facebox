import React from 'react';
import classes from './SettingsPage.module.css'
import setImg from '../../assets/img/settings.gif'

const SettingsPage = (props) => {
    return (
        <div className={classes.SettingsPageWrapper}>
            <h1>Settings Page</h1>
            <img src={setImg} width='30%' alt="set"/>
        </div>
    );
};

export default SettingsPage;
