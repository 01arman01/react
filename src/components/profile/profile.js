import React from "react";
import s from './profile.module.css'
import img from '../../images/image.jpeg'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo  />
            <MyPosts
                newPostText={props.profileData.newPostText}
                postsData={props.profileData.postsData}
                dispatch={props.dispatch}

            />

        </div>

    );

}

export default Profile