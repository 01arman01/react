const  ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';


let store = {
        _state: {
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
                newMessageText: ''
            },
            profilePage: {
                postsData: [
                    {id: 1, message: 'Hi. how are you?', likesCount: 15},
                    {id: 2, message: 'it\'s my first post.', likesCount: 25},
                    {id: 3, message: 'i am fine and you?', likesCount: 35},
                    {id: 4, message: 'i am fine thanks', likesCount: 95},

                ],
                newPostText: "",
            }
        },
        getState() {
            return this._state
        },
        _renderEntireTree() {
            console.log('rendered')
        },
        //------- ---------
        subscribe(observer) {
            this._renderEntireTree = observer
        },

        dispatch(action) {
            // ------ Profile Methods --------

            if (action.type === ADD_POST) {

                let id = this._state.profilePage.postsData.length + 1
                debugger;
                let newPost = {
                    id: id,
                    message: this._state.profilePage.newPostText,
                }
                this._state.profilePage.postsData.push(newPost)
                this._state.profilePage.newPostText = ''
                this._renderEntireTree()
                return 0
            } else if (action.type === UPDATE_NEW_POST_TEXT) {
                this._state.profilePage.newPostText = action.newPostText
                this._renderEntireTree()


            }else if (action.type === ADD_MESSAGE) {
                // ------------ dialogs functions ----------
                let id = this._state.messagesPage.messagesData.length
                let newMessage = {
                    id,
                    message: this._state.messagesPage.newMessageText,
                    likesCount: 9999
                }
                this._state.messagesPage.messagesData.push(newMessage)
                this._state.messagesPage.newMessageText = ''
                this._renderEntireTree()

            }else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
                this._state.messagesPage.newMessageText = action.newMessageText
                this._renderEntireTree()
            }
        },


}

export default store
window.store = store