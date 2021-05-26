import React from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import MobileFooter from "./components/MobileFooter/MobileFooter";
import {Route} from "react-router-dom";
import SettingsPage from "./components/SettingsPage/SettingsPage";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NewsContainer from "./components/News/NewsContainer";
import UsersPageContainer from "./components/UsersPage/UsersPageContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/LoginPage";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <NavBar/>
            <div className={'app-wrapper-content'}>
                <Route exact path='/' render={() => <ProfileContainer/>}/>
                <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/news' render={() => <NewsContainer/>}/>
                <Route path='/users' render={() => <UsersPageContainer/>}/>
                <Route path='/settings' render={() => <SettingsPage/>}/>
                <Route path='/login' render={() => <LoginPage/>}/>
                <MobileFooter/>
            </div>
        </div>
    );
};

export default App;