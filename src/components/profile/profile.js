import React from "react";
import s from './profile.module.css'
import img from '../../images/image.jpeg'
import MyPosts from "./MyPosts/MyPosts";
const Profile  =()=>{

        return (
            <div className={s.main_content}>
                <img className={s.avatar} src={img} alt=""/>
                <div>ava + description</div>
                    <MyPosts />

            </div>

        );

}

export  default Profile