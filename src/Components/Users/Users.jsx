import React from "react";
import s from './Users.module.css';
import { NavLink } from "react-router-dom";
import { usersAPI } from "../../API/API";



let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let curP = props.currentPage;
    let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
    let curPL = curP + 5;
    let slicedPages = pages.slice(curPF, curPL);
    let defaultAva = "https://iconutopia.com/wp-content/uploads/2016/06/space-dog-laika1.png";

    return <div>
        <div className={s.counter} >
            {slicedPages.map(p => {
                return <span className={props.currentPage === p ? s.selectedPage : s.page}
                    onClick={() => { props.onPageChanged(p) }}>{p}</span>
            })}
        </div>

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