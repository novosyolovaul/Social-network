import React from "react";
import s from './Header.module.css';
import { NavLink } from "react-router-dom";

let Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.loginLink}>
                {props.isAuth ? <div>{props.login} <button onClick={props.logoutThunk} className={s.button} >Log out</button> </div>
                    : <NavLink to={'login/'} className={s.button} >login</NavLink>}
            </div>
        </header>
    )
}
export default Header;