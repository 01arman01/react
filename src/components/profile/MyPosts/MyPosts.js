import react from 'react'
import s from './MyPosts.module.css'
import AvaPostImg from '../../../images/avapost.png'
import Post from "./Post/Post";






const MyPosts = (props) => {
    const postsData = props.postsData
    let  postElement = postsData.map(post => <Post message={post.message} likeCount={post.id}/>)

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
