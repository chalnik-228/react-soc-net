import React from 'react';
import a from './AddFriends.module.css';

const AddFriend = (props) => {
    return (
        <div className={a.navCont}>
            <img src={props.imc} alt="avatar" />
            <div className={a.recomend}>
                <h5><a href="#">{props.name}</a></h5>
                <a href="#" className={a.addfr}>Add friend</a>
            </div>
        </div>
    )
}

const AddFriends = (props) => {

    let addFriendElement =props.state.addfriendsData
    .map(Friend => <AddFriend name={Friend.name} imc={Friend.imc} />);

    return <nav className={a.nav}>
        <h4>Who to Follow</h4>
        { addFriendElement }
    </nav>
}

export default AddFriends;