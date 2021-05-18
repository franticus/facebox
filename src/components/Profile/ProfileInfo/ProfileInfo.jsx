import React from 'react';
import classes from './ProfileInfo.module.css'
import usersImg from '../../../assets/img/user_male.png'

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={classes.pic}>
                <img src={'https://source.unsplash.com/user/impatrickt'}
                     width='100%'
                     alt="slide"
                /></div>
            <div className={classes.profileWrapper}>


                <div className={classes.avatarImg}>
                    <img
                        src={props.profile.photos.large === null ? usersImg : props.profile.photos.large}
                        width="100%"
                        alt="avatar"
                    />
                </div>
                <div className={classes.avatarText}>
                    <div>
                        Полное имя : <b>{props.profile.fullName}</b>
                    </div>
                    <div>
                        Статус : {props.profile.aboutMe}
                    </div>
                    <div>
                        В поиске работы : {props.profile.lookingForAJob ? "ДА" : "НЕТ"}
                    </div>
                    <div>
                        Вконтакте : {props.profile.contacts.vk}
                    </div>
                    <div>
                        Инстаграмм : {props.profile.contacts.instagram}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;
