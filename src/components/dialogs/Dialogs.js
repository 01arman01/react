import react from 'react'
import s from './Dialogs.module.css'
import smileMessages from './../../images/smile_messages.png'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={`${s.dialog_item} ${s.active}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


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


const dialogsData = [
    {id: 1, name: 'Andrew'},
    {id: 2, name: 'Alina'},
    {id: 3, name: 'Ilia'},
    {id: 4, name: 'Arman'},
    {id: 5, name: 'Hrant'},
    {id: 6, name: 'Artur'},
    {id: 7, name: 'Sveta'},
]

const dialogsElement =  dialogsData.map(data=> (<DialogItem id={data.id} name={data.name}/>))

const messagesData = [
    {id: 1, message: 'Hi', name: 'she'},
    {id: 2, message: 'hello', name: 'me'},
    {id: 3, message: 'how are you?', name: 'she'},
    {id: 4, message: 'i am fine. and you?', name: 'me'},
    {id: 5, message: 'fine thanks', name: 'she'},
]
const messagesElement = messagesData.map(element=>(<Messages message={element.message} name={element.name}/>))


const Dialogs = (props) => {
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
