import React from 'react';
import s from './Header.module.css';
import HeaderNav from './HeaderNav/HeaderNav';

const Header = () => {
    return <header className={s.header + ' ' + s.headerfix}>
        <div className={s.pozitHeaderfl}>
            <div className={s.headerIMG}>
                <img src='https://themified.com/friend-finder/images/logo.png' />
            </div>

            <div className={s.textarea}>
                <img src={require('../../img/icons8.png')} alt="" />
                <input type="text" placeholder="Search friends, photos, videos" />
            </div>
        </div>
        <div className={s.headerNavPos}>
            <HeaderNav />
        </div>

    </header>
}


export default Header;