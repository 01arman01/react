import react from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogsItem/DialogItem";
import Messages from "./DialogsMessages/Messages";
import {addMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogs-reducer";





const Dialogs = (props) => {
    let dialogsData = props.dialogsData
    let messagesData = props.messagesData
    const dialogsElement = dialogsData.map(data => (<DialogItem id={data.id} name={data.name}/>))
    const messagesElement = messagesData.map(element => (<Messages message={element.message} name={element.name}/>))
    //listening text textarea
    const newMessageElement = react.createRef()
    const addMessage = () => {
        // let text = newMessageElement.current.value
       props.sendMessage()
    }

    const onMessageChange = (e)=>{
        let newMessageText = e.target.value
       props.updatenewmessageBody(newMessageText)

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
                        <textarea ref={newMessageElement}  onChange={onMessageChange} value={props.newMessageText} placeholder='send your message'/>
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
