import React from 'react';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {addMessageCreator, newMessageElementCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

        let state = props.store.getState().messagePage;

        let addMessage = () => {
            props.store.dispatch(addMessageCreator())
        }
        let onMessageChange = (text) => {
            props.store.dispatch(newMessageElementCreator(text))
        }

        return (
            <Dialogs updateNewMessageText={onMessageChange}
                     sendMessage={addMessage}
                     messagePage={state}
            />
        );
    }
;

export default DialogsContainer;
