import React from 'react';
import s from '../LoginReg.module.css';

const Login = (props) => {

  return (
          <div className={s.LoginR}>
            <div className={s.textTop}>
              <h3 className={s.TextBlue}>Login</h3>
              <span>Log into your account</span>
            </div>
            <div className={s.forma}>
              <input type="email" placeholder="Your Email"/><br />
              <input type="password" placeholder="Passowrd"/>
            </div>
            <div className={s.Forgot}>
              <a href="#">Forgot Password?</a>
            </div>
            <div className={s.LoginNow}>
              <button>Login Now</button>
            </div>
          </div>
  );
}



export default Login;