import React from "react";
import loading from '../../../img/Preloader.svg';
import s from './Preloader.module.css';

let Preloader = (props) => {
    return (
        <div className={s.preloader}>
            <img src={loading} />
        </div>
    )
}

export default Preloader;