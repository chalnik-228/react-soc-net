import React from 'react';
import s from './HeaderNav.module.css';
// import ListNav from './ListNav/ListNav';


const HeaderNav = () => {
    return (
        <div className={s.navbar}>
            <div className={s.dropdown}>
                <a href="/Login">
                    <button className={s.dropbtn} > Home
                        <img src={require('../../../img/strel.png')} alt="strelka" />
                    </button>
                </a>

                {/* <ListNav /> */}
            </div>
            <div className={s.dropdown}>
                <a href="/Profile">
                    <button className={s.dropbtn} > Newsfeed
                        <img src={require('../../../img/strel.png')} alt="strelka" />
                    </button>
                </a>

                {/* <ListNav /> */}
            </div>
            <div className={s.dropdown}>
                <button className={s.dropbtn} > Timeline
                    <img src={require('../../../img/strel.png')} alt="strelka" />
                </button>

                {/* <ListNav /> */}
            </div>
            <div className={s.dropdown}>
                <button className={s.dropbtn} > All Page
                    <img src={require('../../../img/strel.png')} alt="strelka" />
                </button>

                {/* <ListNav /> */}
            </div>
            <div className={s.dropdown + ' ' + s.dropbtnCon}>
                <button className={s.dropbtn} > Contact</button>

                {/* <ListNav /> */}
            </div>
        </div>

    )
}




export default HeaderNav;