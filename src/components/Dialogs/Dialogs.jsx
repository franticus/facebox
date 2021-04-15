import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

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

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialog_items}>
                {dialogsElements}
            </div>
            <div className={classes.dialog_message}>
                {messageElements}
            </div>
        </div>
    );
};

export default Dialogs;
