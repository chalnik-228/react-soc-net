import React from 'react';
import s from '../LoginReg.module.css';
import Listbr from '../Listbr';

const Registr = (props) => {

  return (
    <div className={s.LoginR}>
      <div className={s.textTop}>
        <h3 className={s.TextBlue}>Register Now !!!</h3>
        <span>Be cool and join today. Meet millions</span>
      </div>
      <div className={s.forma}>
        <div className={s.formaCor}>
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" className={s.lastname} />
        </div>
        <input type="email" placeholder="Your Email" /><br />
        <input type="password" placeholder="Passowrd" />
      </div>
      <div className={s.birth + ' ' + s.forma}>
        <h6>Date of Birth</h6>
        <input type="text" list='list' placeholder="Day" />
        <input type="text" list='Month' placeholder="Month" />
        <input type="text" list='Year' placeholder="Year" />
      </div>
      <div className={s.radio}>
        <input type="radio" name='value' value='option 1' checked />Male
        <input type="radio" name='value' value='option 2' />Female
      </div>
      <div className={s.forma + ' ' + s.formaCor}>
        <input type="text" placeholder="Your city" />
        <input type="text" list='Country' placeholder="Country" />
        <Listbr />
      </div>
      <div className={s.Forgot}>
        <a href="#">Already have an account?</a>
      </div>
      <div className={s.LoginNow}>
        <button>Register Now</button>
      </div>
    </div>
  );
}



export default Registr;