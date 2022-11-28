import React from 'react';
import styles from './Header.module.css';
import UserMenu from './UserMenu';


function Header (props) {

    return (
        <div className={styles.header}>
        <div style={{border: '2px solid red'}}>
            LogoText
        </div>
        {/* <input type='checkbox' /> */}
       <UserMenu />
    </div>
    );
}

export default Header;