import react from 'react'
import s from './MyPosts.module.css'
import AvaPostImg from '../../../images/avapost.png'
import Post from "./Post/Post";
import state from "../../../redux/state";


const MyPosts = (props) => {
    const postsData = props.postsData

    let postElement = postsData.map(post => <Post message={post.message} likeCount={post.id}/>)

    let newPostElement = react.createRef()
    const addPost = () => {
        props.addPost()
    }
    const onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)

        return console.log(text)
    }

    console.log(props.newPostText)
    return (

        <div className={s.myPostsBlock}>
            <div>
                <h3>My Posts</h3>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} cols="30" rows="10"
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>

            <div className={s.posts}>
                {postElement}
            </div>

        </div>
    );
}
export default MyPosts
