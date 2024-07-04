import React from 'react';
import s from './Profellow.module.css';



const Profellow = () => {
    return <div className={s.ProfList}>
        <div className={s.profileImg}>
            <img src='https://youtube03.com/_nw/75/43187754.jpg' />
        </div>
        <div className={s.ProfInfo}>
            <a>Sarah Cruiz</a>
            <div className={s.ProfInfoFol}>
                <img src={require('../../../img/iconaddfollow.png')} alt="#" />
                <a> 1,299 followers</a>
            </div>
        </div>
    </div>
}

export default Profellow;