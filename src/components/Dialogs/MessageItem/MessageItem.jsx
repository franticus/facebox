import React from 'react';
import classes from '../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const MessageItem = (props) => {
    let path = `/dialogs/user${props.id}/message${props.id}`
    return (
        <NavLink to={path} className={classes.message}>
            {props.text}
        </NavLink>
    )
};

export default MessageItem;
