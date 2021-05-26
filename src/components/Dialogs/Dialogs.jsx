import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {

        let state = props.messagePage

        let dialogsElements = state.dialogsData.map((elem, index) => {
            return (
                <DialogItem key={index}
                            name={elem.name}
                            id={elem.id}/>
            )
        })
        let messageElements = state.messagesData.map((elem, index) => {
            return (
                <MessageItem key={index}
                             text={elem.text}
                             id={elem.id}/>
            )
        })

        let addMessage = () => {
            props.sendMessage();
        }
        let onMessageChange = (e) => {
            const text = e.target.value;
            props.updateNewMessageText(text);
        }

        if (!props.isAuth) return <Redirect to='/login'/>
        return (


            <div>
                <div className={classes.title}>
                    <h1>Сообщения</h1>
                </div>
                <div className={classes.dialogs}>
                    <div className={classes.dialog_items}>
                        {dialogsElements}
                    </div>
                    <div className={classes.dialog_message}>
                        {messageElements}
                    </div>
                </div>
                <div className={classes.newMessage}>
                <textarea onChange={onMessageChange}
                          value={state.newMessageText}
                          placeholder={"Напишите сообщение"}
                          id='area'
                />
                    <button onClick={addMessage}>Отправить</button>
                </div>
            </div>
        );
    }
;

export default Dialogs;
