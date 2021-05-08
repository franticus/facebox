import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {addMessageCreator, newMessageElementCreator} from "../../redux/state";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData.map((elem, index) => {
        return (
            <DialogItem key={index}
                        name={elem.name}
                        id={elem.id}/>
        )
    })
    let messageElements = props.state.messagesData.map((elem, index) => {
        return (
            <MessageItem key={index}
                         text={elem.text}
                         id={elem.id}/>
        )
    })

    let newMessageElement = React.createRef();
    let addMessage = () => {
        props.dispatch(addMessageCreator())
    }
    let updateNewMessageText = () => {
        let text = newMessageElement.current.value;
        let action = newMessageElementCreator(text)
        props.dispatch(action)
    }

    document.addEventListener("keydown", function (e) {
        if (e.code === 'Enter') {
            props.dispatch(addMessageCreator())
        }
    })

        return (
            <>
                <div className={classes.dialogs}>
                    <div className={classes.dialog_items}>
                        {dialogsElements}
                    </div>
                    <div className={classes.dialog_message}>
                        {messageElements}
                    </div>
                </div>
                <div className={classes.newMessage}>
                <textarea ref={newMessageElement}
                          onChange={updateNewMessageText}
                          value={props.state.newMessageText}
                          placeholder={"Напишите сообщение"}
                          id='area'
                />
                    <button onClick={addMessage}>Отправить</button>
                </div>
            </>
        );
    }
    ;

    export default Dialogs;
