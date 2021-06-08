import react from 'react'
import s from './MyPosts.module.css'
import AvaPostImg from '../../../images/avapost.png'
import Post from "./Post/Post";

const postsData = [
    {id: 1, message: 'Hi. how are you?', likesCount: 15},
    {id: 2, message: 'it\'s my first post.', likesCount: 25},
    {id: 3, message: 'i am fine and you?', likesCount: 35},
    {id: 4, message: 'i am fine thanks', likesCount: 95},

]

const  postElement = postsData.map(post => <Post message={post.message} likeCount={post.id}/>)


const MyPosts = (props) => {
    debugger;
    return (

        <div className={s.myPostsBlock}>
            <div>
                <h3>My Posts</h3>
                <div>
                    <textarea cols="30" rows="10"/>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>

            <div className={s.posts}>
                {postElement}
            </div>

        </div>
    );
}
export default MyPosts
