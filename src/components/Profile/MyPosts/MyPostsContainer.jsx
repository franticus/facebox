import React from 'react';
import {addPostCreator, newPostElementCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    let state = props.store.getState();

    const addPost = () => {
        props.store.dispatch(addPostCreator());
    }
    const onPostChange = (text) => {
        const action = newPostElementCreator(text);
        props.store.dispatch(action)
    }

    return (
        <MyPosts updateNewPostText={onPostChange}
                 addPost={addPost}
                 posts={state.profilePage.postsData}
                 newPostText={state.profilePage.newPostText}
        />
    );
};

export default MyPostsContainer;
