import React from "react";
import { NavLink } from "react-router-dom";
import s from './../Message.module.css';



let Dialog = (props) => {
    return (<div className={s.dialog}>
        <img src="https://iconutopia.com/wp-content/uploads/2016/06/space-dog-laika1.png" className={s.dialogAva}></img>
        <NavLink to={'/message/' + props.id} className={s.dialogName}>{props.dialog}</NavLink>
    </div>)
}

export default Dialog;