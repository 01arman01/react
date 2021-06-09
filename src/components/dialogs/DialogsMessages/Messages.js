import React from 'react';
import s from "./Message.module.css";
import smileMessages from "../../../images/smile_messages.png";

const Messages = (props) => {
    return (
        <div className={s.dialogs_message}>
            <div className={s.smile}>
                <img src={smileMessages} alt="smile"/>
                <p>{props.name}</p>
            </div>
            <div className={s.message}>{props.message}</div>
        </div>
    );
};

export default Messages;