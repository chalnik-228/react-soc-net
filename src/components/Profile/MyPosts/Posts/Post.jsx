import React from 'react';
import s from './Post.module.css';
import InpComm from './InpComm';

const Post = (props) => {

    return (
        <div className={s.content}>
            <div className={s.post_comment}>
                <img className={s.comment_photo} src={props.img} />
                <p>
                    <a href="#" className={s.link}>{props.name}</a>
                    <span className={s.answer}>{props.answer}</span>
                </p>
            </div>
        </div>
    );
}

const Posts = (props) => {

    let Postsfunc = props.statePostsElmCom.PostsElmCom
        .map(p => < Post img={p.photocommentatora} name={p.namecommentatora} answer={p.answer} />);

    return (
        <div>
            {Postsfunc}
            <InpComm />
        </div>
    )
}

export default Posts;