import React from 'react';
import styles from './Header.module.css';
import UserMenu from './UserMenu';
import ThemeContext from '../../contexts/ThemeContext';
import CONSTANS from "../../constants";
const { THEMES } = CONSTANS;


function Header(props) {

    return (
        <ThemeContext.Consumer>
            {([value, changeTheme]) => {
                return (
                    <div className={styles.header}>
                        <div style={{ border: '2px solid red' }}>
                            LogoText
                        </div>
                        <button onClick={changeTheme}>change theme</button>
                        <div>
                        <input type='checkbox' onChange={changeTheme} id='change'/>
                        <label for='change'>Dark</label>
                        </div>
                        <div>
                        <input type='radio' onChange={changeTheme} name='changes' id='dark'/>
                        <label for='dark'>Dark</label>
                        </div>
                        <div>
                        <input type='radio' onChange={changeTheme} name='changes' id='light'/>
                        <label for='light'>Light</label>
                        </div>
                        <UserMenu />
                    </div>
                )
            }}
        </ThemeContext.Consumer>

    );
}

export default Header;