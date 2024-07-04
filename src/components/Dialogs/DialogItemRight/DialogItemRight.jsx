import React from "react";
import s from './DialogItemRight.module.css';

const DialogItemRight = (props) => {
    return (
        <div>
            <div className={s.dialogesTestRight}>
                <div className={s.MessImgRight + ' ' + s.triangleRight}>
                    <img src="https://youtube03.com/_nw/75/43187754.jpg" alt="avatar" />
                    <div className={s.objectRight}></div>
                </div>
                <div className={s.dialogsMessagesRight}>
                    <div className={s.MessageInfo}>
                        <span className={s.MessageNameRight}>Sarah Cruiz</span>
                        <span className={s.textMited}>3 days ago</span>
                    </div>
                    <div className={s.MessageTextRight}>I have been on vacation</div>
                </div>
            </div>

            <div className={s.dialogesTestRight}> 
            <div className={s.MessImgRight +' ' + s.triangleRight}>
                <img src="https://youtube03.com/_nw/75/43187754.jpg" alt="avatar" />
                <div className={s.objectRight}></div>
            </div>
            <div className={s.dialogsMessagesRight}>
                <div className={s.MessageInfo}>
                    <span className={s.MessageNameRight}>Sarah Cruiz</span>
                    <span className={s.textMited}>3 days ago</span>
                </div>
                <div className={s.MessageTextRight}>
                    it was a great time for me. we had a lot of fun
                    <img src={require('../../../img/free-icon-smile-2341821.png')} alt="" />     
                </div>
            </div>
        </div>
        </div>
    )
}

export default DialogItemRight;