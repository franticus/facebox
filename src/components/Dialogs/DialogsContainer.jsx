// import React from 'react';
import {addMessageCreator, newMessageElementCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        messagePage: state.messagePage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => {
            dispatch(newMessageElementCreator(text))
        },
        sendMessage: () => {
            dispatch(addMessageCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;
