import {renderEntireTree} from './../render'

const state = {
    messagesPage: {
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
        newMessageText : 'new message text'
    },
    profilePage: {
        postsData: [
            {id: 1, message: 'Hi. how are you?', likesCount: 15},
            {id: 2, message: 'it\'s my first post.', likesCount: 25},
            {id: 3, message: 'i am fine and you?', likesCount: 35},
            {id: 4, message: 'i am fine thanks', likesCount: 95},

        ],
        newPostText: "newPostText",
    }
}
// ------ Profile Functions --------
export const addPosts = () => {

    let id = state.profilePage.postsData.length + 1
    let newPost = {
        id: id,
        message: state.profilePage.newPostText,
    }


    state.profilePage.postsData.push(newPost)
    state.profilePage.newPostText = ''
    renderEntireTree(state)
    return 0

}



export const updateNewPostText = (newPostText) => {
    state.profilePage.newPostText = newPostText
    renderEntireTree(state)
}

// ------------ dialogs functions ----------

export const addMessage = () => {
    let id = state.messagesPage.messagesData.length
    let newMessage = {
        id,
        message: state.messagesPage.newMessageText,
        likesCount: 9999
    }
    state.messagesPage.messagesData.push(newMessage)
    state.messagesPage.newMessageText = ''
    renderEntireTree(state)

}
export  const updateNewMessageText = (newMessageText)=>{
         state.messagesPage.newMessageText = newMessageText
        console.log('newMessageText=>'+newMessageText)
         renderEntireTree(state)
}



export default state