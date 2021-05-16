import React from 'react';
import classes from './Post.module.css'
// import userFemale from '../../../../assets/img/user_female.png'
import nastyAvatar from '../../../../assets/img/nastyAvatar.jpg'

const Post = (props) => {

    // function likeRandom(min, max) {
    //     return Math.floor(Math.random() * (max - min) + min)
    // }

    return (
        <div>
            <div className={classes.post}>
                <div className={classes.avatar}>
                    <img src={nastyAvatar}
                         alt=""/>
                </div>
                <div className={classes.text}>
                    {`${props.text}`}
                    <br/>
                    <div className={classes.like}>
                        <span>Нравится {props.likesCount} &#10084;</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
