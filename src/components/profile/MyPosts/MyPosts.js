import  react from 'react'
import s from './MyPosts.module.css'
import AvaPostImg from '../../../images/avapost.png'
import Post from "./Post/Post";
const MyPosts = (props)=>{
    debugger;
        return (

            <div>
                <div>
                    <textarea cols="30" rows="10"></textarea>
                    <br/>
                    <button>Add post</button>
                </div>
                <div>new post</div>
                <Post message='Hi. how are you?' likeCount={15}  />
                <Post message={`it's my first post.`} likeCount={22}/>
                <Post message='i am fine and you?' likeCount={3}/>
                <Post message={`i am fine thanks`}  likeCount={96}/>

            </div>
        );
}
export  default  MyPosts
