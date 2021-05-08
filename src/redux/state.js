const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

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
        if (action.type === ADD_POST) {
            if (this._state.profilePage.newPostText === '') {
                console.log('empty textarea')
                return;
            }
            let newPost = {
                id: 4,
                text: `„${this._state.profilePage.newPostText}“`,
                likesCount: this.getRandomInt(100)
            };
            this._state.profilePage.postsData.unshift(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);

        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.messagePage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_MESSAGE) {
            if (this._state.messagePage.newMessageText === '') {
                console.log('empty textarea')
                return
            }
            let newMessage = {
                id: 7,
                text: this._state.messagePage.newMessageText
            };
            this._state.messagePage.messagesData.push(newMessage);
            this._state.messagePage.newMessageText = '';
            console.log(this._state.messagePage.newMessageText)
            this._callSubscriber(this._state);
        }
    }
}

export const addPostCreator = () => ({
    type: ADD_POST
})
export const newPostElementCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})

export const addMessageCreator = () => ({
    type: ADD_MESSAGE
})
export const newMessageElementCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
})

export default store;
window.state = store;
