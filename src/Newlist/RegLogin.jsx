import React from 'react';
import './LoginReg.css';
import BodyLoginReg from './LoginReg/BodyLoginReg';
import Registr from './LoginReg/Registr/Registr';


const RegLogin = (props) => {


  return (
      <div className='app-wrapper-list'>
        <div className='wrapper-body'>
          <BodyLoginReg />
        </div>
        <div className='body-reg'>
        <Registr />
        </div>
      </div >
  );
}


{/* <Routes>
<Route path='/LandingPage/Login' Component={() => } />
<Route path='/LandingPage/Register' Component={() => } />
</Routes> */}
export default RegLogin;