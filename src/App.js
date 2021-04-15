import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";

const App = (props) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <NavBar/>
            <div className={'app-wrapper-content'}>
                <Route exact path='/' render={() => <Profile
                    profilePage={props.state.profilePage}
                    addPost={props.addPost}
                    newPostText={props.state.profilePage.newPostText}
                    updateNewPostText={props.updateNewPostText}
                />}/>
                <Route path='/profile' render={() => <Profile
                    profilePage={props.state.profilePage}
                    addPost={props.addPost}
                    newPostText={props.state.profilePage.newPostText}
                    updateNewPostText={props.updateNewPostText}
                />}/>
                <Route path='/dialogs' render={() => <Dialogs
                    state={props.state.messagePage}
                />}/>
            </div>
        </div>
    );
};

export default App;