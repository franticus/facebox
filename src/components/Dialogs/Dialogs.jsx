import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialog_items}>

                {props.state.dialogsData.map((elem, index) => {
                    return (
                        <DialogItem key={index}
                                    name={elem.name}
                                    id={elem.id}/>
                    )
                })}
            </div>
            <div className={classes.dialog_message}>
                {props.state.messagesData.map((elem, index) => {
                    return (
                        <MessageItem key={index}
                                    text={elem.text}
                                    id={elem.id}/>
                    )
                })}
            </div>
        </div>
    );
};

export default Dialogs;
