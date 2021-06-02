import React from "react";
import s from './header.module.css'
import img from '../../images/love.jpg'
const Header=() =>{
    return(
        <header className={s.header}>
            <img className={s.logo} src={img}/>
        </header>
    );
}

export default Header;
