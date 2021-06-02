import  react from 'react'
import s from './Post.module.css'
import AvaPostImg from '../../../../images/avapost.png'
const Post = (props)=>{
          console.log(props.message)
        return (

                <div className={s.posts}>
                    <div className={s.item}>
                        <div className={s.img}> <img src={AvaPostImg} alt='avatarPost'/></div>
                        <p> {props.message} </p><br/>
                    </div>
                    <div className={s.like}><span> Like</span> <span className={s.likeCount}>{props.likeCount}</span></div>
                </div>


        );
}
export  default  Post
