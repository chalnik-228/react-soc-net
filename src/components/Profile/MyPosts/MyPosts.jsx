import React from 'react';
import s from './MyPosts.module.css';
import Posts from './Posts/Post';

const MyPost = (props) => {

    return (
        <div className={s.Myposts}>
            <img className={s.profile_photo} src={props.profile} />
            <div className={s.content}>
                <div className={s.user_info}>
                    <h5>
                        <a href="#" className={s.link}>{props.name}</a>
                        <span className={s.follow}>following</span>
                    </h5>
                    <p className={s.text_muted}>{props.textMured}</p>
                </div>
                <div className={s.line}></div>
                <div className={s.post_text}>
                    <p>{props.postMytext}</p>
                </div>
                <div className={s.line}></div>
            </div>
        </div>);
}

const MyPosts = (props) => {

    let PostTextlement = props.state.myposttext.map(p => < MyPost profile={p.profile} name={p.name} textMured={p.textMured} postMytext={p.postMytext}/>);

    return(
       <div>
            {PostTextlement}
            <Posts statePostsElmCom={props.state}/>
       </div>
    )
}

export default MyPosts;
