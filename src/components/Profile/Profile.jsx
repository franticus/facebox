import React from 'react';
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addCatsPostCreator} from "../../redux/news-reducer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {

    document.addEventListener("DOMContentLoaded", function (event) {
        let feedsCAts = setInterval(() => {
            props.store.dispatch(addCatsPostCreator())
        }, 1000)
        setTimeout(() => {
            clearInterval(feedsCAts)
        }, 10000)
    });

    return (
        <div>
            <div className={classes.content}>
                <div className={classes.pic}>
                    <img src="https://c.wallhere.com/photos/96/c0/ass_in_bed_blue_panties_women_model-353323.jpg!d"
                         width="100%"
                         alt="slide"
                    />
                </div>
                <ProfileInfo/>
                <MyPostsContainer store={props.store} />
            </div>


        </div>
    );
};

export default Profile;
