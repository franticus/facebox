import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import newsReducer from "./news-reducer";

let store = {
    _state: {
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
            newMessageText: '',
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
            newPostText: '',
        },
        newsPage: {}
    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagePage = dialogsReducer(this._state.messagePage, action);
        this._state.newsPage = newsReducer(this._state.newsPage, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.state = store;
