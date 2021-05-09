const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

const profileReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST:
            if (state.newPostText === '') {
                return state;
            }
            let newPost = {
                id: 4,
                text: `„${state.newPostText}“`,
                likesCount: getRandomInt(1000)
            };
            state.postsData.unshift(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostCreator = () => ({
    type: ADD_POST
})
export const newPostElementCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})

export default profileReducer;