import React from 'react';
import s from './FriendList.module.css';
import HeaderMain from '../HeaderMain/HeaderMain';
// import { NavLink } from 'react-router-dom';

const FriendList = (props) => {
    return (
        <div className={s.Friend}>
            <div className={s.FriendImageCont}>
                <img src={props.fonimg} alt="image" />
            </div>
            <div className={s.avatarka}>
                <img src={props.avatar} />
            </div>
            <div className={s.FriendInfo}>
                <div className={s.FriendInfo + ' ' + s.PositInfo}>
                    <a href="" ><span className={s.FriendName}>{props.name}</span></a>
                    <a href="" className={s.MyFriend}><span>My Friend</span></a>
                    <span>{props.job}</span>
                </div>
            </div>
        </div>
    )
}

const FriendLists = (props) => {

    let FriendsData = [
        { fonimg: 'https://images.wallpaperscraft.ru/image/single/chernika_iagoda_frukt_177544_1920x1200.jpg', avatar: "https://i.pinimg.com/originals/fb/85/39/fb8539d28fa942d5f62eb0ad87a0ff2e.jpg", name: "Sophia Lee", job: "Student at Harvard" },
        { fonimg: 'https://wp-s.ru/wallpapers/9/16/533509633223902/krasivaya-priroda-ozero-oblaka-gory.jpg', avatar: "https://www.kino-teatr.ru/news/27027/238693.jpg", name: "John Doe", job: "Traveler" },
        { fonimg: 'https://s1.1zoom.ru/b2859/674/Berry_Raspberry_Blackberry_Blueberries_Many_535519_2048x1152.jpg', avatar: "https://www.zastavki.com/pictures/originals/2019Girls___Beautyful_Girls_The_wind_develops_the_hair_of_a_beautiful_brown-haired_woman_in_a_plaid_shirt_137116_.jpg", name: "Julia Cox", job: "Art Designer" },
        { fonimg: 'https://pic.rutubelist.ru/video/03/49/0349375a9335e628263915119b0a76ac.jpg', avatar: "https://sun9-57.userapi.com/impg/smNPBlqHpW6L4mbgmoPLzQvpLR6Q6vD2Ybp30g/edwsJTR2g1o.jpg?size=1049x590&quality=96&sign=96165f384eb272caa43b31c9e7c30e0e&type=album", name: "Robert Cook", job: "Photographer at Photography" },
        { fonimg: 'https://bogatyr.club/uploads/posts/2023-03/1679698892_bogatyr-club-p-zimnii-peizazh-nochyu-foni-krasivo-38.jpg', avatar: "https://sun4-18.userapi.com/impg/qCF6qTec04x2gS3RRMrT4qbtORJX-KUfwEn8tw/Dkixpa8EjtQ.jpg?size=1280x720&quality=96&sign=3b1089f9c05ab92f10c2cf1003febaa4&type=album", name: "Richard Bell", job: "Graphic Designer at Envato" },
        { fonimg: 'https://wp-s.ru/wallpapers/0/60/495609043508284/nochnoj-ozhivl-nnyj-gorod-i-spokojnyj-okean.jpg', avatar: "https://i.pinimg.com/736x/e8/05/0e/e8050ed06215403352eefc94746cfd9a.jpg", name: "Linda Lohan", job: "Software Engineer" },
        { fonimg: 'https://sun9-65.userapi.com/impg/PfrwgYn0uu8AfiqvShyNRk4bItgR-x9Vbjw1sA/zUrDPtvANlY.jpg?size=1280x720&quality=96&sign=2cc2219c4b1afa5549646bad98d19c44&type=album', avatar: "https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666244429_1-mykaleidoscope-ru-p-ana-de-armas-v-detstve-krasivo-1.jpg", name: "Anna Young", job: "Musician" },
        { fonimg: 'https://images.wallpaperscraft.ru/image/single/dym_spletenie_raznotsvetnyj_69169_2560x1600.jpg', avatar: "https://avatars.dzeninfra.ru/get-zen_doc/9195055/pub_647b44efc2e4d260fc10ae17_647b489af0df9c3806934a62/scale_1200", name: "James Carter", job: "CEO at IT Farm" },
        { fonimg: 'https://www.fonstola.ru/images/201605/fonstola.ru_232843.jpg', avatar: "https://api.time.com/wp-content/uploads/2015/03/joseph-gordon-levitt.jpg?quality=85&amp;w=1200&amp;h=628&amp;crop=1", name: "Alexis Clark", job: "Traveler" },
    ]

    let FriendsElement = FriendsData
        .map(FriendEl => <FriendList fonimg={FriendEl.fonimg} avatar={FriendEl.avatar} name={FriendEl.name} job={FriendEl.job} />);

    return (
        <div className={s.ContentListFriend}>
            <HeaderMain />
            {FriendsElement}
        </div>
    )
}

export default FriendLists;