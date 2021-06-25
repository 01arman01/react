import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";



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
            this._state.profilePage = profileReducer(this._state.profilePage,action)
            this._state.messagesPage = dialogsReducer(this._state.messagesPage,action)
           this._renderEntireTree(this._state)
        },


}

export default store
window.store = store