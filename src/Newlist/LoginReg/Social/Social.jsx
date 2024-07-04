import React from 'react';
import s from './SocialLog.module.css';

const Social = (props) => {
    return (
        <div className={s.SocialConteiner}>
            <div className={s.socialIcon}>
                <a href="#"><button><span>f</span></button></a>
            </div>
            <div className={s.socialIcon}>
                <a href="#"><button><img src="https://avatars.mds.yandex.net/i?id=4a7fbcc08c76285420b16a4686f6c81a1f14eaed-11518590-images-thumbs&n=13" alt="twitter" /></button></a>
            </div>
            <div className={s.socialIcon}>
                <a href="#"><button><span>g+</span></button></a>
            </div>
            <div className={s.socialIcon}>
                <div className={s.socialIconin}>
                    <a href="#"><button><img src={require('../../../img/icons8Pinterest.png')} alt="pinterest" /></button></a>
                </div>
            </div>
            <div className={s.socialIcon}>
                <div className={s.socialIconin}>
                    <a href="#"><button><span>in</span></button></a>
                </div>
            </div>
        </div>
    )
}
export default Social;