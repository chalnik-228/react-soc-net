import React from 'react';
import s from './Navigation.module.css';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
    return <nav className={s.navList}>
        <div className={s.item}>
            <img src={require('../../../img/icondoc.png')} alt="icon docum" />
            <NavLink to="/Profile">My Newsfeed</NavLink>
        </div>
        <div className={s.item}>
            <img src={require('../../../img/iconMansBlack.png')} alt="icon docum" />
            <a href="#">People Nearby</a>
        </div>
        <div className={s.item}>
            <img src={require('../../../img/iconMansLowBlack.png')} alt="icon docum" />
            <NavLink to="/FriendLists">Friends</NavLink>
        </div>
        <div className={s.item}>
            <img src={require('../../../img/iconMessages.png')} alt="iconMessages" />
            <NavLink to ="/Dialogs">Messages</NavLink>
        </div>
        <div className={s.item}>
            <img src={require('../../../img/iconImage.png')} alt="iconMessages" />
            <a href="/Messages"> Images</a>
        </div> 
        <div className={s.item}>
            <img src={require('../../../img/imgCamera.png')} alt="iconMessages" />
            <a href="#"> Videos</a>
        </div>  
    </nav>
}

export default Navigation;