import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/user" + props.id
    return (
        <NavLink to={path} className={classes.dialog}>
            {props.name + ":"}
        </NavLink>
    )
}

const MessageItem = (props) => {
    let path = `/dialogs/user${props.id}/message${props.id}`
    return (
        <NavLink to={path} className={classes.message}>
            {props.text + "..."}
        </NavLink>
    )
}

const Dialogs = () => {

    let dialogsData = [
        {id: '1', name: 'Настя'},
        {id: '2', name: 'Женик'},
        {id: '3', name: 'Хмарик'},
        {id: '4', name: 'Полина'}
    ]

    let messageData = [
        {id: '1', text: 'Люблю'},
        {id: '2', text: 'Хочу пива'},
        {id: '3', text: 'Хочу пиццу'},
        {id: '4', text: 'Хочу Вову'}
    ]

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialog_items}>

                {dialogsData.map((elem, index) => {
                    return (
                        <DialogItem key={index}
                                    name={elem.name}
                                    id={elem.id}/>
                    )
                })}
            </div>
            <div className={classes.dialog_message}>
                {messageData.map((elem, index) => {
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
