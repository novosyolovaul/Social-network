import React from "react";
import s from './Paginator.module.css';

let Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let curP = props.currentPage;
    let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
    let curPL = curP + 5;
    let slicedPages = pages.slice(curPF, curPL);

    return <div className={s.counter} >
        {slicedPages.map(p => {
            return <span className={props.currentPage === p ? s.selectedPage : s.page}
                onClick={() => { props.onPageChanged(p) }}>{p}</span>
        })}
    </div>
}




export default Paginator;