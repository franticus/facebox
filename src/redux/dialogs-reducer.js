const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            if (state.newMessageText === '') {
                return state;
            }
            let newMessage = {
                id: 7,
                text: state.newMessageText
            };
            state.messagesData.push(newMessage);
            state.newMessageText = '';
            console.log(state.newMessageText)
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addMessageCreator = () => ({
    type: ADD_MESSAGE
})
export const newMessageElementCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
})

export default dialogsReducer;