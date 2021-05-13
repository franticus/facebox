import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import newsReducer from "./news-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: dialogsReducer,
    newsPage: newsReducer,

});

let store = createStore(reducers);

export default store;
