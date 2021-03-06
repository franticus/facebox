import {addPostCreator, newPostElementCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(newPostElementCreator(text))
        },
        addPost: () => {
            dispatch(addPostCreator())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
