import React from 'react';
import s from './Info.module.css';
import Individuals from './Infoindiv/individuals';
import Businesses from './Infobusness/businesses';
import About from './InfoAbout/About';

const Info = (props) => {
    return (
            <div className={s.infoposit}>
                <Individuals />
                <Businesses />
                <About />
            </div>

    )
}

export default Info;