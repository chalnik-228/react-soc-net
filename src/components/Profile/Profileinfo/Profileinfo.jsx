import React from 'react';
import s from './Profileinfo.module.css';


const Profilepost = (props) => {
    
    return <div>
        <img class={s.post_photo} src={props.imc} />

    </div>
}
const Profileinfo = (props) => {

    let PostImglement = props.state.map(p => < Profilepost imc={p.imgpost} />);

    return(
       <div>
            {PostImglement}
       </div>
    )
}

export default Profileinfo;