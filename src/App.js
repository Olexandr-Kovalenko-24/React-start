import React from "react";
import Tree from "./components/Tree";
import UserContext from "./contexts/UserContext";
import Header from './components/Header';
import ThemeContext from './contexts/ThemeContext';
import CONSTANS from './constants';
const {THEMES} = CONSTANS;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                firstName: 'Alex',
                lastName: 'Doe',
                email: 'example.com',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3DZRWRCmpFRBnw-n5HofJjR_erTYVh3aEc9Vs-tPO7w&s'
            },
            theme: THEMES.LIGHT
        }
    }
    
    logOutCallback = () => {
        this.setState({
            user: {}
        })
    }

    changeTheme = () => {
        if(this.state.theme === THEMES.LIGHT){
            this.setState({
                theme: THEMES.DARK
            })
        } else {
            this.setState({
                theme: THEMES.LIGHT
            })
        }
    }

    render() {
        const {user, theme} = this.state;
        return (
            <ThemeContext.Provider value={[theme, this.changeTheme]}>
            <UserContext.Provider value={[user, this.logOutCallback]}>
                <Header />
                <Tree />
            </UserContext.Provider>
            </ThemeContext.Provider>
        )
    }
}

export default App;
