import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={classes.MyPosts}>
            <div className={classes.myPost}>Мои посты</div>
            <div className={classes.newPost}>
                <textarea placeholder="О чём ты думаешь?" />
                <button>Поделиться</button>
            </div>
            <div className={classes.posts}>
                <Post
                    text='„Каждый волен распоряжаться своей жопой, как ему хочется. Поэтому я свою поднимаю и уёбываю.“'/>
                <Post text='„Грустной жопой радостно не пукнешь.“'/>
                <Post text='„Душа не жопа — высраться не может.“'/>
            </div>
        </div>
    );
};

export default MyPosts;
