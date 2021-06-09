import react from 'react'
import s from './Dialogs.module.css'
import smileMessages from './../../images/smile_messages.png'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogsItem/DialogItem";
import Messages from "./DialogsMessages/Messages";












const Dialogs = (props) => {
        let dialogsData = props.messagesData.dialogsData
        let messagesData = props.messagesData.messagesData
    const dialogsElement =  dialogsData.map(data=> (<DialogItem id={data.id} name={data.name}/>))
    const messagesElement = messagesData.map(element=>(<Messages message={element.message} name={element.name}/>))

    return (

        <div className={s.dialogs}>
            <div className={s.dialogs_items}>

                {dialogsElement}
            </div>
            <div className={s.dialogs_messages}>
                {messagesElement}

            </div>
        </div>
    );
}

export default Dialogs
