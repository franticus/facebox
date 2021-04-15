import {rerenderEntireTree} from "../render";

const state = {
    messagePage: {
        dialogsData: [
            {id: 1, name: 'Настя'},
            {id: 2, name: 'Женик'},
            {id: 3, name: 'Хмарик'},
            {id: 4, name: 'Полина'}
        ],
        messagesData: [
            {id: 1, text: 'Люблю'},
            {id: 2, text: 'Хочу пива'},
            {id: 3, text: 'Хочу пиццу'},
            {id: 4, text: 'Хочу Вову'}
        ],
    },
    profilePage: {
        postsData: [
            {
                id: 1,
                text: '„Каждый волен распоряжаться своей жопой, как ему хочется. Поэтому я свою поднимаю и уёбываю.“',
                likesCount: '335',
            },
            {
                id: 2,
                text: '„Грустной жопой радостно не пукнешь.“',
                likesCount: '633',
            },
            {
                id: 3,
                text: '„Душа не жопа — высраться не может.“',
                likesCount: '223',
            }
        ],
        newPostText: ''
    }
}

export let addPost = () => {

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    let newPost = {
        id: 4,
        text: `„${state.profilePage.newPostText}“`,
        likesCount: getRandomInt(100)
    };
    state.profilePage.postsData.unshift(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state)
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state)
}

export default state;