const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

let initialState =  {
    messagesData: [
        {id: 1, message: 'Hi', name: 'she'},
        {id: 2, message: 'hello', name: 'me'},
        {id: 3, message: 'how are you?', name: 'she'},
        {id: 4, message: 'i am fine. and you?', name: 'me'},
        {id: 5, message: 'fine thanks', name: 'she'},
    ],
    dialogsData: [
        {id: 1, name: 'Andrew'},
        {id: 2, name: 'Alina'},
        {id: 3, name: 'Ilia'},
        {id: 4, name: 'Arman'},
        {id: 5, name: 'Hrant'},
        {id: 6, name: 'Artur'},
        {id: 7, name: 'Sveta'},
    ],
    newMessageText: 'hgfdsfghjjk'
};


const dialogsReducer = (state = initialState,action)=>{
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


export let addMessageCreator = ()=>{
    return {
        type:'ADD_MESSAGE'
    }
}
export let updateNewMessageTextCreator = (text)=>{
    return {
        type:'UPDATE_NEW_MESSAGE_TEXT',
        newMessageText:text
    }
}

export default  dialogsReducer