import React from "react";
import s from './profile.module.css'
import img from '../../images/image.jpeg'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts/>

        </div>

    );

}

export default Profile