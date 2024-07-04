import React from 'react';
import s from './Contact.module.css';

const Contact = (props) => {
    return (
            <div className={s.contactContent}>
                <h5>Contact Us</h5>
                <div className={s.contactConteiner}>
                    <div><img src={require('../../../img/telephone.png')} alt="telephone" /><span>+1 (234) 222 0754</span></div>
                    <div><img src={require('../../../img/envelope.jpg')} alt="envelope" /><span>info@thunder-team.com</span></div>
                    <div><img src={require('../../../img/icon1.png')} alt="icon" /><span>228 Park Ave S NY, USA</span></div>
                </div>
            </div>

    )
}

export default Contact;