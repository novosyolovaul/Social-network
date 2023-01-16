import React from "react";
import s from './Users.module.css';
import { NavLink } from "react-router-dom";
import Paginator from "../common/Preloader/Paginator/Paginator";

let Users = ({ totalUsersCount, pageSize, currentPage, selectedPage, ...props }) => {
    let defaultAva = "https://iconutopia.com/wp-content/uploads/2016/06/space-dog-laika1.png";

    return <div>
        <Paginator selectedPage={selectedPage} currentPage={currentPage}
            pageSize={pageSize} totalUsersCount={totalUsersCount} />

        {props.users.map(u =>
            <div key={u.id} className={s.users_wrapper}>
                <NavLink to={"/content/" + u.id}>
                    <img src={u.photos.small != null ? u.photos.small : defaultAva} className={s.users_ava}></img>
                </NavLink>
                <div>
                    <NavLink to={"/content/" + u.id}>
                        <div className={s.fullName}>{u.name}</div>
                    </NavLink>
                    <div className={s.status}>{u.status}</div>
                </div>
                <div>
                    {u.followed ?
                        <button disabled={props.followingInProcess.some(id => id === u.id)}
                            onClick={() => {
                                props.unfollowThunk(u.id)
                            }} className={s.button}>unfollow</button> :
                        <button disabled={props.followingInProcess.some(id => id === u.id)}
                            onClick={() => {
                                props.followThunk(u.id)
                            }} className={s.button}>follow</button>}
                </div>
            </div>
        )}
    </div>
}


export default Users;