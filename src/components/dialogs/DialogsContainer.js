import react from 'react'
import {addMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";





const DialogsContainer = (props) => {

    let state = props.store.getState().messagesPage

    const onSendMessageClick= () => {
        props.store.dispatch(addMessageCreator())
    }

    const onNewMessageChange = (body)=>{
        props.store.dispatch(updateNewMessageTextCreator(body))
    }

    return (
        <Dialogs
            messagesData={state.messagesData}
            dialogsData={state.dialogsData}
            updatenewmessageBody={onNewMessageChange}
            sendMessage={onSendMessageClick}
            newMessageText={state.newMessageText}
        />
    );
}

export default DialogsContainer
