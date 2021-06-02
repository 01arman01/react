import React,{Component} from "react";
import './App.css';
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import Profile from "./components/profile/profile";


const App=() =>{
    return(
        <div className='app_wrapper'>
          <Header />
          <Navbar />
          <Profile />


        </div>
    );
}

export default App;
