import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    let postsData = [
        {
            id: '1',
            text: '„Каждый волен распоряжаться своей жопой, как ему хочется. Поэтому я свою поднимаю и уёбываю.“',
            likesCount: '335',
        },
        {
            id: '2',
            text: '„Грустной жопой радостно не пукнешь.“',
            likesCount: '633',
        },
        {
            id: '3',
            text: '„Душа не жопа — высраться не может.“',
            likesCount: '223',
        }
    ]

    return (
        <div className={classes.MyPosts}>
            <div className={classes.myPost}>Мои посты</div>
            <div className={classes.newPost}>
                <textarea placeholder="О чём ты думаешь?" />
                <button>Поделиться</button>
            </div>
            <div className={classes.posts}>
                {postsData.map((elem, index) => {
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
