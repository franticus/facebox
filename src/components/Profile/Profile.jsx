import React from 'react';
import classes from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import mainImg from '../../assets/img/main_page_img.jpeg'
import Preloader from "../Common/Preloader/Preloader";


const Profile = (props) => {

    if(!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={classes.content}>
                <div className={classes.pic}>
                    <img src={mainImg}
                         width="100%"
                         alt="slide"
                    />
                </div>
                <ProfileInfo profile={props.profile}/>
                <MyPostsContainer/>
            </div>


        </div>
    );
};

export default Profile;
