import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postElement = props.post.map((elem, index) => {
        return (
            <Post key={index}
                  id={elem.id}
                  text={elem.text}
                  likesCount={elem.likesCount}/>
        )
    })

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let updateNewPostText = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
        console.log(newPostElement.current.value)
    }

    return (
        <div className={classes.MyPosts}>
            <div className={classes.myPost}>Мои посты</div>
            <div className={classes.newPost}>
                <textarea ref={newPostElement}
                          value={props.newPostText}
                          placeholder="О чём думаешь?)"
                          onChange={updateNewPostText}
                />
                <button onClick={addPost}>Поделиться</button>
            </div>
            <div className={classes.posts}>
                {postElement}
            </div>
        </div>
    );
};

export default MyPosts;
