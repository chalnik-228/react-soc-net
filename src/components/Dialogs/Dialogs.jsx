import React from "react";
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import HeaderMain from '../HeaderMain/HeaderMain';
import DialogItemtest from "./DialogItemtest/DialogItemtest";
import DialogItemRight from "./DialogItemRight/DialogItemRight";
import InputSTR from "./InputSTR/InputSTR";




const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} time={d.time} avatar={d.avatar} />);
    let messagesElements = props.state.messages.map(m => <Message message={m.message} />);
    return (
        <div className={s.DialogsWithFriends}>
            <HeaderMain />
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>

                <div className={s.messages}>
                    <DialogItemtest />
                    <DialogItemRight />
                </div>
            </div>
            <div className={s.contentInp}>
                <InputSTR />
            </div>
        </div>
    )
}

export default Dialogs;