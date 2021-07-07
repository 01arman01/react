const  ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState =  {
    postsData: [
        {id: 1, message: 'Hi. how are you?', likesCount: 15},
        {id: 2, message: 'it\'s my first post.', likesCount: 25},
        {id: 3, message: 'i am fine and you?', likesCount: 35},
        {id: 4, message: 'i am fine thanks', likesCount: 95},

    ],
    newPostText: "aaaaaaaaa",
}


const profileReducer = (state=initialState,action)=>{
    switch (action.type) {
        case ADD_POST:
            let id = state.postsData.length + 1

            let newPost = {
                id: id,
                message:state.newPostText,
                likesCount:25
            }
            state.postsData.push(newPost)
            state.newPostText = ''
            return  state
        case UPDATE_NEW_POST_TEXT:   state.newPostText = action.newPostText
            return state
        default:
            return state
    }

}
export let addPostActionCreator = () => {

    return{
        type: ADD_POST,


    }
}
export let updateNewPostTextActionCreator = (text)=>{
    return{
        type:UPDATE_NEW_POST_TEXT,
        newPostText: text
    }
}



export default  profileReducer