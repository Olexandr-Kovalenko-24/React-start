import React from "react";
import Tree from "./components/Tree";
import UserContext from "./contexts";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                firstName: 'Alex',
                lastName: 'Doe',
                email: 'example.com',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3DZRWRCmpFRBnw-n5HofJjR_erTYVh3aEc9Vs-tPO7w&s'
            }
        }
    }
    
    logOutCallback = () => {
        this.setState({
            user: {}
        })
    }

    render() {
        return (
            <UserContext.Provider value={[this.state.user, this.logOutCallback]}>
                <Tree />
            </UserContext.Provider>
        )
    }
}

export default App;
