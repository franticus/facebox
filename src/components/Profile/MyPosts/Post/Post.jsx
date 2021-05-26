import React from 'react';
import classes from './Post.module.css'
// import userFemale from '../../../../assets/img/user_female.png'
import myAvatar from '../../../../assets/img/myAvatar.jpg'

const Post = (props) => {

    return (
        <div>
            <div className={classes.post}>
                <div className={classes.avatar}>
                    <img src={myAvatar}
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
