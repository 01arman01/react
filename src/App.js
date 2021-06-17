import React, {Component} from "react";
import './App.css';
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import Profile from "./components/profile/profile";
import Dialogs from "./components/dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import News from "./components/news/news";
import Music from "./components/music/music";
import {addMessage, updateNewMessageText} from "./redux/state";


const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app_wrapper'>
                <Header/>
                <Navbar/>
                {/*     exact  => dlya path  chtobi menyal  component*/}
                <div className='app_wrapper_content'>
                    <Route path='/profile' render={(() => <Profile
                        profileData={props.state.profilePage}
                        dispatch={props.dispatch} />)}/>
                    <Route path='/dialogs' render={(() => <Dialogs
                        messagesData={props.state.messagesPage}
                      dispatch={props.dispatch}/>)}/>
                    <Route path='/news' render={News}/>
                    <Route path='/music' render={Music}/>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
