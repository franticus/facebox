import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import MobileFooter from "./components/MobileFooter/MobileFooter";
import {Route} from "react-router-dom";
import SettingsPage from "./components/SettingsPage/SettingsPage";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NewsContainer from "./components/News/NewsContainer";
import UsersPageContainer from "./components/UsersPage/UsersPageContainer";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <NavBar/>
            <div className={'app-wrapper-content'}>
                <Route exact path='/' render={() => <Profile/>}/>
                <Route path='/profile' render={() => <Profile/>}/>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/news' render={() => <NewsContainer/>}/>
                <Route path='/users' render={() => <UsersPageContainer/>}/>
                <Route path='/settings' render={() => <SettingsPage/>}/>
                <MobileFooter/>
            </div>
        </div>
    );
};

export default App;