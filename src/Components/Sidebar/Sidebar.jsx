import React from "react";
import { NavLink } from "react-router-dom";
import s from './Sidebar.module.css'

let Sidebar = () => {
    return (
        <aside className={s.sidebar}>
            <nav className={s.sidebar_menu}>
                <ul className={s.sidebar_list}>
                    <li><NavLink to="content" className={s.sidebar_link}>MY PROFILE</NavLink></li>
                    <li><NavLink to="friends" className={s.sidebar_link}>FRIENDS</NavLink></li>
                    <li><NavLink to="users" className={s.sidebar_link}>USERS</NavLink></li>
                    <li><NavLink to="message" className={s.sidebar_link}>MESSAGES</NavLink></li>
                    <li><NavLink to="music" className={s.sidebar_link}>MUSIC</NavLink></li>
                    <li><NavLink to="settings" className={s.sidebar_link}>SETTINGS</NavLink></li>
                </ul>
            </nav>
        </aside>
    )
}
export default Sidebar;