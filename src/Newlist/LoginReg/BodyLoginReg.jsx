import React from 'react';
import s from './LoginReg.module.css';
import a from './LoginRegText.module.css';
import { NavLink } from 'react-router-dom';
import Social from './Social/Social';

const BodyLoginReg = (props) => {




  return (
    <div className={s.LogRegBody}>
      <div className={s.FormForReglog}>
        <div className={s.TextandBtn + ' ' + a.Text}>
          <h1>Make Cool Friends !!!</h1>
          <p>Friend Finder is a social network template that can be used to</p>
          <p>connect people. The template offers Landing pages, News Feed,</p>
          <p>Image/Video Feed, Chat Box, Timeline and lot more.</p>
          <div>
            Why are you waiting for? Buy it now.
          </div>
          <div className={s.LoginNow + ' ' + a.Btn}>
            <button>Learn More</button>
          </div>
        </div>
        <div className={s.Forms}>
          <div className={s.LinkLogReg}>
            <NavLink to="/Register" className={s.line}>Register</NavLink>
            <NavLink to="/Login">Login</NavLink>
          </div>
          
          <div className={s.conteinerWithfigyr}>
            <div className={s.caseVertically}></div>
            <div className={s.caseHorizontally}></div>
          </div>
          <Social />
        </div>
      </div>
    </div >
  );
}



export default BodyLoginReg;