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
        props.dispatch({type: "ADD-POST"});
    }

    let updateNewPostText = () => {
        let text = newPostElement.current.value;
        let action = {type: "UPDATE-NEW-POST-TEXT", newText: text};
        props.dispatch(action)
    }

    return (
        <div className={classes.MyPosts}>
            <div className={classes.myPost}>Мои посты</div>
            <div className={classes.newPost}>
                <textarea ref={newPostElement}
                          onChange={updateNewPostText}
                          value={props.newPostText}
                          placeholder="О чём думаешь?)"
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
