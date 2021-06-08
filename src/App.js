import React, {Component} from "react";
import './App.css';
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import Profile from "./components/profile/profile";
import Dialogs from "./components/dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import News from "./components/news/news";
import Music from "./components/music/music";


const App = () => {
    return (
        <BrowserRouter>
            <div className='app_wrapper'>
                <Header/>
                <Navbar/>
                {/*     exact  => dlya path  chtobi menyal  component*/}
                <div className='app_wrapper_content'>
                    <Route path='/profile' component={Profile} />
                    <Route  path='/dialogs' component={Dialogs}/>
                    <Route path='/news' component={News} />
                    <Route path='/music' component={Music} />
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
