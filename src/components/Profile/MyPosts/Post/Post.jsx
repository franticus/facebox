import React from 'react';
import classes from './Post.module.css'

const Post = (props) => {

    // function likeRandom(min, max) {
    //     return Math.floor(Math.random() * (max - min) + min)
    // }

    return (
        <div>
            <div className={classes.post}>
                <div className={classes.avatar}>
                    <img src="https://i.pinimg.com/originals/83/2e/c5/832ec56631038bb209bb41bf4f1e080b.jpg"
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
