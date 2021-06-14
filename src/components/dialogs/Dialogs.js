import react from 'react'
import s from './Dialogs.module.css'
import smileMessages from './../../images/smile_messages.png'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogsItem/DialogItem";
import Messages from "./DialogsMessages/Messages";
import {updateNewMessageText} from "../../redux/state";


const Dialogs = (props) => {
    let dialogsData = props.messagesData.dialogsData
    let messagesData = props.messagesData.messagesData
    const dialogsElement = dialogsData.map(data => (<DialogItem id={data.id} name={data.name}/>))
    const messagesElement = messagesData.map(element => (<Messages message={element.message} name={element.name}/>))
    //listening text textarea
    const newMessageElement = react.createRef()
    const addMessage = () => {
        let text = newMessageElement.current.value
        props.addMessage()
    }

    const onMessageChange = ()=>{
        let text = newMessageElement.current.value
        props.updateNewMessageText(text)
        console.log('text=>'+text)
        console.log(props.messagesData.newMessageText)

    }

    return (

        <div className={s.dialogs}>
            <div className={s.dialogs_items}>

                {dialogsElement}
            </div>
            <div className={s.dialogs_messages}>
                <div>
                    {messagesElement}
                </div>
                <div>
                    <div className={s.addMessage}>
                        <textarea ref={newMessageElement} onChange={onMessageChange} value={props.messagesData.newMessageText}/>
                    </div>
                    <div>
                        <button onClick={addMessage}>Add Message</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs
