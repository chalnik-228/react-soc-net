import React from 'react';
import s from '../Info.module.css';

const Businesses = (props) => {
    return (
        <div className={s.infoposit}>
            <div className={s.infoContent}>
                <h5>For businesses</h5>
                <ul className={s.infoList}>
                    <li><a href="#"><button>Business signup</button></a></li>
                    <li><a href="#"><button>Business login</button></a></li>
                    <li><a href="#"><button>Benefits</button></a></li>
                    <li><a href="#"><button>Resources</button></a></li>
                    <li><a href="#"><button>Advertise</button></a></li>
                    <li><a href="#"><button>Setup</button></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Businesses;