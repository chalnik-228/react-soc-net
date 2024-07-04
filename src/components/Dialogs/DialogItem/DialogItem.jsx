import React from "react";
import s from './/DialogItemtest.module.css';
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialoges}>
            <NavLink to={path}>
                <div className={s.dialogesTestItem}>
                    <img src={props.avatar} alt="s" />
                    <div className={s.dialogesTestText}>
                        <div className={s.test1}>{props.name}</div>
                        <div>Hi there, how are you</div>
                    </div>
                    <div className={s.dialogesTestElem}>
                        <div>{props.time}</div>
                        
                        <div className={s.test2}><span>1</span></div>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}

export default DialogItem;
// галочка
{/* <img src="https://avatars.mds.yandex.net/i?id=7d167d7a31478508205964bdde0957de1491fe62-12509309-images-thumbs&n=13" alt="" /> */}