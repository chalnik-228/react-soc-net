import React from 'react';
import Profilesum from './Profilesum';
import HeaderMain from '../HeaderMain/HeaderMain';
import './Profile.css'



const Profile = (props) => {

    return <div>
        <HeaderMain />
        <Profilesum state={props.state}/>
    </div>
}
export default Profile;