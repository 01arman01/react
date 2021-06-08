import React from "react";
import s from './navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {

    return (
        <div className={s.navbar}>
            <ul>
                <li><NavLink className={`${s.item}`} to="/profile" activeClassName={s.active} >Profile</NavLink></li>
                <li><NavLink className={s.item} to="/dialogs" activeClassName={s.active}>Messages</NavLink></li>
                <li><NavLink className={s.item} to="/news" activeClassName={s.active}>News</NavLink></li>
                <li><NavLink className={s.item} to="/music" activeClassName={s.active}>Music</NavLink></li>
            </ul>
        </div>


    );

}
export default Navbar
    