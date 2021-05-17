import React from 'react';
import classes from './ProfileInfo.module.css'
import myAvatar from '../../../assets/img/myAvatar.jpg'
import Preloader from "../../Common/Preloader/Preloader";

const ProfileInfo = (props) => {

    return (
        <div className={classes.profileInfo}>
            <div className={classes.avatarImg}>
                <img
                    src={props.profile.photos.large}
                    width="100%"
                    alt="avatar"
                />
            </div>
            <div className={classes.avatarText}>Зеленский Сергей @franticus</div>
        </div>
    );
};

export default ProfileInfo;
