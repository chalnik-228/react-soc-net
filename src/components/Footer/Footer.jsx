import React from 'react';
import s from './Footer.module.css';
import Social from './Social/Social';
import Info from './Info/Info';
import Contact from './Contact/Contact';


const Footer = (props) => {
    return (
        <div className={s.footerContent}>
            <Social />
            <Info />
            <Contact />
        </div>
    )
}

export default Footer;