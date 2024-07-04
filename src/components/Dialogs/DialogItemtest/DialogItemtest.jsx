import React from "react";
import s from './DialogItemtest.module.css';

const DialogItemtest = (props) => {
    return (
        <div className={s.dialogesTest}> 
            <div className={s.MessImg +' ' + s.triangle}>
                <img src="https://i.pinimg.com/736x/e8/05/0e/e8050ed06215403352eefc94746cfd9a.jpg" alt="avatar" />
                <div className={s.object}></div>
            </div>
            <div className={s.dialogsMessages}>
                <div className={s.MessageInfo}>
                    <span className={s.MessageName}>Linda Lohan</span>
                    <span className={s.textMited}>3 days ago</span>
                </div>
                <div className={s.MessageText}>Hi honey, how are you doing???? Long time no <br />see. Where have you been?</div>
            </div>
        </div>
    )
}

export default DialogItemtest;