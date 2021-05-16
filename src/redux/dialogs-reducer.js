const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogsData: [
        {id: 1, name: 'Саша'},
        {id: 2, name: 'Маша'},
        {id: 3, name: 'Петя'},
        {id: 4, name: 'Дима'}
    ],
    messagesData: [
        {id: 1, text: 'Пример собщения 1'},
        {id: 2, text: 'Пример собщения 2'},
        {id: 3, text: 'Пример собщения 3'},
        {id: 4, text: 'Пример собщения 4'}
    ],
    newMessageText: '',
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            if (state.newMessageText === '') {
                return state;
            }
           return {
                ...state,
                newMessageText: '',
                messagesData: [
                    ...state.messagesData,
                    {id: 7, text: state.newMessageText}
                ]
            }
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            };
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