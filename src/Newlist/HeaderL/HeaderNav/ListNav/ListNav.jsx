import React from 'react';
import s from '../../HeaderNav/HeaderNav.module.css';

const ListNav = () => {
    return (
        <div className={s.dropdownContent} id="myDropdown">
            <a href="#">Landing Page 1</a>
            <a href="#">Landing Page 2</a>
        </div>
    )
}
// https://www.schoolsw3.com/howto/howto_css_dropdown_navbar.php
export default ListNav;
