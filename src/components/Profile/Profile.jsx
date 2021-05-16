import React from 'react';
import classes from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import mainImg from '../../assets/img/main_page_img.jpeg'
// import {addCatsPostCreator} from "../../redux/news-reducer";


const Profile = () => {

    // document.addEventListener("DOMContentLoaded", function (event) {
    //     let feedsCAts = setInterval(() => {
    //         props.store.dispatch(addCatsPostCreator())
    //     }, 1000)
    //     setTimeout(() => {
    //         clearInterval(feedsCAts)
    //     }, 10000)
    // });

    return (
        <div>
            <div className={classes.content}>
                <div className={classes.pic}>
                    <img src={mainImg}
                         width="100%"
                         alt="slide"
                    />
                </div>
                <ProfileInfo/>
                <MyPostsContainer/>
            </div>


        </div>
    );
};

export default Profile;
