import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import MobileFooter from "./components/MobileFooter/MobileFooter";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import MusicPage from "./components/MusicPage/MusicPage";
import SettingsPage from "./components/SettingsPage/SettingsPage";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <NavBar/>
            <div className={'app-wrapper-content'}>
                <Route exact path='/' render={() => <Profile
                    store={props.store}
                />}/>
                <Route path='/profile' render={() => <Profile
                    store={props.store}
                />}/>
                <Route path='/dialogs' render={() => <DialogsContainer
                    store={props.store}
                />}/>
                <Route path='/news' render={() => <News
                    catsData={props.state.newsPage.catsData}
                    dispatch={props.dispatch}
                />}/>
                <Route path='/music' render={() => <MusicPage/>}/>
                <Route path='/settings' render={() => <SettingsPage/>}/>
                <MobileFooter/>
            </div>
        </div>
    );
};

export default App;