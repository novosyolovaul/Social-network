import React from "react";
import s from './Post.module.css'

let Post = (props) => {
    return (

        <div className={s.post_item}>
            <img src="https://iconutopia.com/wp-content/uploads/2016/06/space-dog-laika1.png" className={s.post_posts_ava}></img>
            {props.message}
        </div>
    )
}

export default Post;