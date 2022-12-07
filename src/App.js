import React, { useState } from "react";
import UserDashboard from './components/UserDashbord';
import Header from './components/Header';
import Tree from './components/Tree';
import UserContext from "./contexts/UserContext";
import ThemeContext from "./contexts/ThemeContext";
import CONSTANS from './constants';
const {THEMES} = CONSTANS;


function App(props) {
    const [user, setUser] = useState({
        firstName: 'Alex',
        lastName: 'Doe',
        email: 'example.com',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3DZRWRCmpFRBnw-n5HofJjR_erTYVh3aEc9Vs-tPO7w&s'
    });
    const [theme, setTheme] = useState(THEMES.LIGHT);

    const logOutCallback = () => {
        setUser({})
    }

    const changeTheme = (theme) => {
        setTheme(theme)
    }

    return (
        <ThemeContext.Provider value={[theme, changeTheme]}>
            <UserContext.Provider value={[user, logOutCallback]}>
                <Header />
                <Tree value='suppper' />
            </UserContext.Provider>
        </ThemeContext.Provider>
    )
}

export default App;
