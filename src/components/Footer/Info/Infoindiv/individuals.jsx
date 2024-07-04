import React from 'react';
import s from '../Info.module.css';



const Individuals = (props) => {
    return (
         <div className={s.infoposit}>
            <div className={s.infoContent}>
                <h5>For individuals</h5>
                <ul className={s.infoList}>
                    <li><a href="#"><button>Signup</button></a></li>
                    <li><a href="#"><button>login</button></a></li>
                    <li><a href="#"><button>Explore</button></a></li>
                    <li><a href="#"><button>Finder app</button></a></li>
                    <li><a href="#"><button>Features</button></a></li>
                    <li><a href="#"><button>Language settings</button></a></li>
                </ul>
            </div>
         </div>
    )
}

export default Individuals;