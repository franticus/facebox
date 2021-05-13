import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import newsReducer from "./news-reducer";

let store = {
    _state: {
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
}

export default store;
window.state = store;
