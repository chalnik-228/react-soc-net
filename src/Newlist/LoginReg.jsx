import React from 'react';
import './LoginReg.css';
import BodyLoginReg from './LoginReg/BodyLoginReg';
import Login from './LoginReg/Login/Login';


const LoginReg = (props) => {


  return (
      <div className='app-wrapper-list'>
        <div className='wrapper-body'>
          <BodyLoginReg />
        </div>
        <div className='body-reg'>
        <Login />
        </div>
      </div >
  );
}


{/* <Routes>
<Route path='/LandingPage/Login' Component={() => } />
<Route path='/LandingPage/Register' Component={() => } />
</Routes> */}
export default LoginReg;