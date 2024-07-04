import React from "react";
import s from './InputSTR.module.css';

const InputSTR = (props) => {

    return (
        <div class={s.sendMessage}>
            <div class={s.input}>
                <textarea class={s.textBlock} cols="30" rows="1" placeholder='Type your message'></textarea>
            <button class={s.btn + ' ' + s.btDdefailt}>Send</button>
            </div>
        </div>
    )
}

export default InputSTR;