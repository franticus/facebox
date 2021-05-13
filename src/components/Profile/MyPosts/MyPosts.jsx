import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postElement = props.posts.map((elem, index) => {
        return (
            <Post key={index}
                  id={elem.id}
                  text={elem.text}
                  likesCount={elem.likesCount}/>
        )
    })

    let newPostElement = React.createRef();
    let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    }

    return (
        <div className={classes.MyPosts}>
            <div className={classes.myPost}>Мои посты</div>
            <div className={classes.newPost}>
                <textarea ref={newPostElement}
                          onInput={onPostChange}
                          value={props.newPostText}
                          placeholder="О чём думаешь?)"
                />
                <button onClick={onAddPost}>Поделиться</button>
            </div>
            <div className={classes.posts}>
                {postElement}
            </div>
        </div>
    );
};

export default MyPosts;
