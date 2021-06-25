const  ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const profileReducer = (state,action)=>{
    switch (action.type) {
        case ADD_POST:
            let id = state.postsData.length + 1
            debugger;
            let newPost = {
                id: id,
                message:state.newPostText,
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
export default  profileReducer