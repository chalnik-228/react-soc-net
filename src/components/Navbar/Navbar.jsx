import React from 'react';
import s from './Navbar.module.css';
import FriendsOnline from './FriendsOnline/FriendsOnline';
import Navigation from './Navigation/Navigation';
import Profellow from './Profellow/Profellow';
// import { NavLink } from 'react-router-dom';



const Navbar = () => {
     return <nav className={s.nav}>
        <Profellow /> 
        <Navigation />
        <div className={s.Fixed}>
            <FriendsOnline />
        </div>
    </nav>
}

export default Navbar;