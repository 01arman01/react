import react from 'react'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {

    const state = props.store.getState()


    let newPostElement = react.createRef()
    const addPost = () => {

        props.store.dispatch(addPostActionCreator())
    }
    const onPostChange = (text) => {
        let action =  updateNewPostTextActionCreator(text)
        props.store.dispatch(action)
    }



    return (

       <MyPosts
           updateNewPostText={onPostChange}
           addPost={addPost}
           postsData={state.profilePage.postsData}
           newPostText={state.profilePage.newPostText}
       />
    );
}
export default MyPostsContainer
