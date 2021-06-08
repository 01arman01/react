import React from 'react';
import img from "../../../images/ava.jpg";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
           <div>
               <img className={s.avatar} src={img} alt=""/>
           </div>
            <div  className={s.descriptionBlock}>ava + description</div>
            
        </div>
    );
};

export default ProfileInfo;