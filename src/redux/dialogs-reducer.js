const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {

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