import React from 'react';
import s from './Post.module.css';

const InpComm = (props) => {

    return (
            <div className={s.post_comment_inp}>
                <img className={s.comment_photo} src="https://youtube03.com/_nw/75/43187754.jpg" />
                <input className={s.input_comment} placeholder="Post a comment"></input>
            </div>
    );
}
export default InpComm;
{/* <img src='https://avatars.mds.yandex.net/i?id=f03d58da921bff5d93bc9cd89f660c0b75d873b3-10843661-images-thumbs&n=13' />
{props.message}

<div>
    <span>like</span>
</div> */}