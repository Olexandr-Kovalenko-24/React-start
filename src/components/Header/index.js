
import React from 'react';
import UserContext from '../../contexts';
import styles from './Header.module.css';

function Header (props) {

    return (
        <UserContext.Consumer>
            {([{firstName, lastName, avatar, email}, logOut])=>{
                return (
                    <div className={styles.header}>
                    <img src="/logo192.png" className={styles.logo} />
                    <div className={styles.user}>
                    <img src={avatar} className={styles.avatar} />
                    <div className={styles.info}>
                    <span>{firstName} {lastName}</span>
                    <span>{email}</span>
                    </div>
                    <button onClick={logOut}>LogOut</button>
                    </div>
                </div>
                )
            }}
        </UserContext.Consumer>
    );
}

export default Header;