import React from "react";
import s from './Message.module.css';
import Dialog from './Dialog/Dialog';
import Chat from './Chat/Chat';
import { useForm } from "react-hook-form"


let Message = (props) => {

    let dialogEl = props.dialog.map((d) => <Dialog dialog={d.name} id={d.id} />)
    let chatEl = props.chat.map((c) => <Chat message={c.message} id={c.id} />)

    return (
        <div className={s.messageWrapper} >
            <div className={s.dialogs}>
                {dialogEl}
            </div>
            <div className={s.chats}>
                <div className={s.chatEl}>
                    {chatEl}
                </div>
                <SendMessageForm addMessage={props.addMessage} />
            </div>
        </div>
    )
}

let SendMessageForm = (props) => {
    let onSubmit = (values) => {
        props.addMessage(values.messageText);
        reset();
    };
    const {
        register,
        handleSubmit,
        reset,
    } = useForm();
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={s.send}>
            <input {...register("messageText")} placeholder='Text your message' className={s.sendMessage} />
            <button type="submit" className={s.sendButton}>send</button>
        </form>
    )
}
export default Message;