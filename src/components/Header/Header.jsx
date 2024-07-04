import React from 'react';
import s from './Header.module.css';
import HeaderNav from './HeaderNav/HeaderNav';

const Header = () => {
    return <div className={s.header+ ' ' + s.headerfix}>
        <div className={s.pozitHeaderfl}>
            <div className={s.headerIMG}>
                <a href="/Login"><img src='https://themified.com/friend-finder/images/logo.png' /></a>
            </div>

            <div className={s.textarea}>
                <img src={require('../../img/icons8.png')} alt="" />
                <input type="text" placeholder="Search friends, photos, videos" />
            </div>
        </div>
        <div className={s.headerNavPos}>
            <HeaderNav />
        </div>

    </div>
}


export default Header;