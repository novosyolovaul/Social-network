import React from "react";
import s from './../Message.module.css'

let Chat = (props) => {
    return (
        <div className={s.chat}>
            <div>{props.message}</div>
        </div>
    )
}

export default Chat;