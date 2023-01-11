import React from "react";
import s from './Posts.module.css';
import Post from "./Post/Post";
import { useForm } from "react-hook-form";


let Posts = (props) => {
    let messageEl = props.post.map((m) => <Post message={m.message} />)
    return (
        <div className={`${s.content_post} ${s.post}`}>
            <h2 className={s.post_title}>
                my posts
            </h2>
            <AddPostForm addPost={props.addPost} />
            {messageEl}
        </div>
    )
}

let AddPostForm = (props) => {
    let onSubmit = (values) => {
        props.addPost(values.postText);
        reset();
    };
    const {
        register,
        handleSubmit,
        reset,
    } = useForm();
    return (
        <form className={s.addPost} onSubmit={handleSubmit(onSubmit)} >
            <input
                {...register("postText")}
                className={s.textArea} placeholder='Add post' />
            <button type="submit" className={s.postButton}>add post</button>
        </form>
    )
}

export default Posts;