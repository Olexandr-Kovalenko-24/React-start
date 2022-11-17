
import React from 'react';
import styles from './Header.module.css';

function Header (props) {

    return (
        <div className={styles.header}>
            <img src="/logo192.png" className={styles.logo} />
            {props.children}
        </div>
    );
}

export default Header;