import React from 'react';
import classes from './ProfileInfo.module.css'
import myAvatar from '../../../assets/img/myAvatar.jpg'

const ProfileInfo = () => {
    return (
        <div className={classes.profileInfo}>
            <div className={classes.avatarImg}>
                <img
                    src={myAvatar}
                    width="100%"
                    alt="avatar"
                />
            </div>
            <div className={classes.avatarText}>Зеленский Сергей @franticus</div>
        </div>
    );
};

export default ProfileInfo;
