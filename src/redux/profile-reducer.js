const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const  SET_USER_PROFILE = 'SET-USER-PROFILE'

let getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

let initialState = {
    postsData: [
        {
            id: 1,
            text: '„Алкоголь в малых дозах безвреден в любом количестве.“',
            likesCount: '335',
        },
        {
            id: 2,
            text: '„Если ты споришь с идиотом, то, вероятно, то же самое делает и он.“',
            likesCount: '633',
        },
        {
            id: 3,
            text: '„Мудрость не всегда приходит с возрастом. Бывает, что возраст приходит один.“',
            likesCount: '223',
        },
        {
            id: 4,
            text: '„Лучше промолчать и показаться дураком, нежели заговорить и не оставить на этот счет никаких сомнений.“',
            likesCount: '453',
        }
    ],
    newPostText: '',
    profile: null
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
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile};
        }
        default:
            return state;
    }
}

export const addPostCreator = () => ({type: ADD_POST})
export const newPostElementCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export default profileReducer;