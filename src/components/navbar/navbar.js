import React from "react";
import s from './navbar.module.css'
const Navbar=()=> {

        return (
            <div className={s.navbar}>
                <ul>
                    <li><a className={`${s.item}  ${s.active}`} href="#!" >Profile</a></li>
                    <li><a className={s.item} href="#!">Messages</a></li>
                    <li><a className={s.item} href="#!">News</a></li>
                    <li><a className={s.item} href="#!">Music</a></li>
                </ul>
            </div>
                
            
        );

}
export  default Navbar
    