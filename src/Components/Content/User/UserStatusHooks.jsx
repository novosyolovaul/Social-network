import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import s from './User.module.css'

let UserStatusHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);
    useEffect( () => {
        setStatus(props.status)
    }, [props.status] )
    let activateEditMode = () => { setEditMode(true) };
    let deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatusThunk(status);
    };
    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    };
    return (
        <>
            {!editMode &&
                <div className={s.status}>
                    <span onClick={activateEditMode}>{props.status || '-------'}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input className={s.inputStatus} onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true} value={status} />
                </div>
            }
        </>
    )
}

export default UserStatusHooks;