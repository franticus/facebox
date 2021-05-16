const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

let initialState = {
    postsData: [
        {
            id: 1,
            text: '„Все, что моя мама говорила мне о сексе – так это то, что мужчина должен быть сверху, а женщина снизу. Наверное, поэтому первые три года мы с мужем спали на двухэтажной кровати“',
            likesCount: '335',
        },
        {
            id: 2,
            text: '„Проще расстаться с человеком, чем с иллюзиями на его счёт.“',
            likesCount: '633',
        },
        {
            id: 3,
            text: '„Муж – это парень, который всегда скажет, что вы переборщили с помадой“',
            likesCount: '223',
        }
    ],
    newPostText: '',
}

const profileReducer = (state = initialState, action) => {

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
            return  {...state, postsData: [newPost, ...state.postsData], newPostText: ''}
        case UPDATE_NEW_POST_TEXT: {
            return {...state, newPostText: action.newText};
        }
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