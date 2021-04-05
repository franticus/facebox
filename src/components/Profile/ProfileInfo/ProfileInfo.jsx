import React from 'react';
import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={classes.profileInfo}>
            <div className={classes.avatarImg}>
                <img
                    src="https://d3b4rd8qvu76va.cloudfront.net/715/954/689/-89996999-1tmjp8a-c6360goo96nfr2f/large/avatar.jpg"
                    width="100%"
                    alt="jop"
                />
            </div>
            <div className={classes.avatarText}>Зеленский Сергей @franticuss</div>
        </div>
    );
};

export default ProfileInfo;
