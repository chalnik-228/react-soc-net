import React from 'react';
import s from '../Info.module.css';

const About = (props) => {
    return (
         <div className={s.infoposit}>
            <div className={s.infoContent}>
                <h5>About</h5>
                <ul className={s.infoList}>
                    <li><a href="#"><button>About us</button></a></li>
                    <li><a href="#"><button>Contact us</button></a></li>
                    <li><a href="#"><button>Privacy Policy</button></a></li>
                    <li><a href="#"><button>Terms</button></a></li>
                    <li><a href="#"><button>Help</button></a></li>
                </ul>
            </div>
         </div>
    )
}

export default About;