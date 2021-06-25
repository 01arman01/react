const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

const dialogsReducer = (state,action)=>{
    // ------------ dialogs functions ----------
    switch (action.type){
        case ADD_MESSAGE:
            let id = state.messagesData.length
            let newMessage = {
                id,
                message: state.newMessageText,
                name: 'me',
            }
            state.messagesData.push(newMessage)
            state.newMessageText = ''
            return state
        case UPDATE_NEW_MESSAGE_TEXT: state.newMessageText = action.newMessageText
            return state
        default:
            return  state
    }

}

export default  dialogsReducer