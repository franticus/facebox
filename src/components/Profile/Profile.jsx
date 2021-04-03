import React from 'react';
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
const Profile = () => {
    return (
        <div>
            <div className={classes.content}>
                <div className={classes.pic}>
                    <img src="https://c.wallhere.com/photos/96/c0/ass_in_bed_blue_panties_women_model-353323.jpg!d"
                         width="100%"
                         alt=""
                    />
                </div>
            <MyPosts/>
            </div>


        </div>
    );
};

export default Profile;
