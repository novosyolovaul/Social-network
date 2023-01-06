import React from "react";
import s from './Content.module.css'
import PostsContainer from "./Posts/Posts-container";
import User from "./User/User";

let Content = (props) => {
    return (
        <main className={s.content}>
            <User profile={props.profile} updateStatusThunk={props.updateStatusThunk}
            status={props.status}/>
            <PostsContainer
                store={props.store} />
        </main>
    )
}
export default Content;