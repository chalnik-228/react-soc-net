import React from 'react';
import s from './HeaderMain.module.css';
// import { NavLink } from 'react-router-dom';



const HeaderMain = (props) => {
    return (
        <div className={s.noheader}>
            <div className={s.something}>
                <img src="https://youtube03.com/_nw/75/43187754.jpg" />
            </div>
            <textarea className={s.form} cols="30" rows="1" placeholder='Write what you wish!'></textarea>
            <div className={s.tools}>
                <a href="#"> <img src="https://cdn1.iconfinder.com/data/icons/bootstrap-vol-4/16/pencil-square-1024.png" /> </a> 
                <a href="#"> <img src="https://img.razrisyika.ru/kart/82/1200/326674-ikonki-1.jpg" /> </a> 
                <a href="#"> <img src="https://w7.pngwing.com/pngs/374/425/png-transparent-videocam-ic-google-material-design-3-icon.png" /> </a> 
                <a href="#"> <img src="https://www.kindpng.com/picc/m/10-107788_pirate-map-png-picture-freeuse-treasure-map-icon.png" /> </a> 
            </div>
            <button className={s.publish}>Publish</button>
        </div>
    )
}

export default HeaderMain;