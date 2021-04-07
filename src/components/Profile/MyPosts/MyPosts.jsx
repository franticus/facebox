import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    return (
        <div className={classes.MyPosts}>
            <div className={classes.myPost}>Мои посты</div>
            <div className={classes.newPost}>
                <textarea placeholder="О чём ты думаешь?" />
                <button>Поделиться</button>
            </div>
            <div className={classes.posts}>
                {props.post.map((elem, index) => {
                    return (
                        <Post key={index}
                              id={elem.id}
                              text={elem.text}
                              likesCount={elem.likesCount}/>
                        )
                })}
            </div>
        </div>
    );
};

export default MyPosts;
