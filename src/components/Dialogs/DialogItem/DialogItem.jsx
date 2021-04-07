import React from 'react';
import classes from '../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/user" + props.id
    return (
        <NavLink to={path} className={classes.dialog}>
            {props.name + ":"}
        </NavLink>
    )
};

export default DialogItem;
