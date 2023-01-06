import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from './User.module.css'
import UserStatusHooks from "./UserStatusHooks";

let User = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className={`${s.content_user} ${s.user}`}>
            <div className={s.user_photo}>
                {<img src={props.profile.photos.large != null? props.profile.photos.large : "https://iconutopia.com/wp-content/uploads/2016/06/space-dog-laika1.png" }></img>}
            </div>
            <div className={s.user_information}>
                <h1 className={s.user_information_name}>{props.profile.fullName}</h1>
                <p className={s.user_information_inf}>{props.profile.aboutMe}</p>
                <UserStatusHooks status={props.status} updateStatusThunk={props.updateStatusThunk} />
            </div>
        </div>
    )
}
export default User;