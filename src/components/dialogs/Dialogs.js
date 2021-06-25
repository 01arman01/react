import react from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogsItem/DialogItem";
import Messages from "./DialogsMessages/Messages";


const Dialogs = (props) => {
    let dialogsData = props.messagesData.dialogsData
    let messagesData = props.messagesData.messagesData
    const dialogsElement = dialogsData.map(data => (<DialogItem id={data.id} name={data.name}/>))
    const messagesElement = messagesData.map(element => (<Messages message={element.message} name={element.name}/>))
    //listening text textarea
    const newMessageElement = react.createRef()
    const addMessage = () => {
        let text = newMessageElement.current.value
        props.dispatch({type:'ADD_MESSAGE'})
    }

    const onMessageChange = (e)=>{
        let newMessageText = e.target.value
        props.dispatch({
            type:'UPDATE_NEW_MESSAGE_TEXT',
            newMessageText
        })
        console.log('text=>'+newMessageText)
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
                        <textarea ref={newMessageElement}  onChange={onMessageChange} value={props.messagesData.newMessageText} placeholder='send your message'/>
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
