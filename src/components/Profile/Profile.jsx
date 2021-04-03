import React from 'react';
import classes from './Profile.module.css'
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
                <div className={classes.avatar}>
                    <img src="https://i.pinimg.com/originals/83/2e/c5/832ec56631038bb209bb41bf4f1e080b.jpg"
                         width="20%"
                         alt=""/>
                </div>
                <div>
                    My Posts
                    <div>
                        New Posts
                    </div>
                    <div className={classes.posts}>
                        <div className={classes.item}>
                            Post 1
                        </div>
                        <div className={classes.item}>
                            Post 2
                        </div>
                        <div className={classes.item}>
                            Post 3
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
