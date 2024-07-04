import React from 'react';
import s from './FriendsOnline.module.css';

const FriendsOnline = () => {
    return <nav className={s.nav}>
        <div className={s.iconchat}>
            <div className={s.btnChat}><button>Chat online</button></div>
            <div className={s.iconsFriendsOnl}>
                <div className={s.iconFriendOnl}>
                    <a href='#'className="iconFriend">
                        <img src="https://themified.com/friend-finder/images/users/user-2.jpg" alt="avatar Friend" />
                        <div className={s.onlineBot}></div>
                    </a>
                    <a href='#' className="iconFriend">
                        <img src="https://themified.com/friend-finder/images/users/user-3.jpg" alt="avatar Friend" />
                        <div className={s.onlineBot}></div>
                    </a>
                    <a href='#' className="iconFriend">
                        <img src="https://themified.com/friend-finder/images/users/user-4.jpg" alt="avatar Friend" />
                        <div className={s.onlineBot}></div>
                    </a>
                </div>

                <div className={s.iconFriendOnl}>
                    <a href='#'className="iconFriend">
                        <img src="https://themified.com/friend-finder/images/users/user-5.jpg" alt="avatar Friend" />
                        <div className={s.onlineBot}></div>
                    </a>
                    <a href='#' className="iconFriend">
                        <img src="https://themified.com/friend-finder/images/users/user-6.jpg" alt="avatar Friend" />
                        <div className={s.onlineBot}></div>
                    </a>
                    <a href='#' className="iconFriend">
                        <img src="https://themified.com/friend-finder/images/users/user-7.jpg" alt="avatar Friend" />
                        <div className={s.onlineBot}></div>
                    </a>
                </div>

                <div className={s.iconFriendOnl}>
                    <a href='#'className="iconFriend">
                        <img src="https://themified.com/friend-finder/images/users/user-8.jpg" alt="avatar Friend" />
                        <div className={s.onlineBot}></div>
                    </a>
                    <a href='#' className="iconFriend">
                        <img src="https://themified.com/friend-finder/images/users/user-9.jpg" alt="avatar Friend" />
                        <div className={s.onlineBot}></div>
                    </a>
                    <a href='#' className="iconFriend">
                        <img src="https://themified.com/friend-finder/images/users/user-10.jpg" alt="avatar Friend" />
                        <div className={s.onlineBot}></div>
                    </a>
                </div>
            </div>
        </div>
    </nav>
}

export default FriendsOnline;

// const FriendOnline = (props) => {
//     return (
//         <div className={s.iconFriendOnl}>
//             <a href='#' className="iconFriend">
//                 <img src={props.imc} alt="avatar Friend" />
//                 <div className={s.onlineBot}></div>
//             </a>
//         </div>
//     )
// }

// let friendonlData = [
//     { imc: "https://themified.com/friend-finder/images/users/user-2.jpg" },
//     { imc: "https://themified.com/friend-finder/images/users/user-3.jpg" },
//     { imc: "https://themified.com/friend-finder/images/users/user-4.jpg" },
// ]

// let friendonlElement = friendonlData.map(i => <FriendOnline imc={i.imc} />);