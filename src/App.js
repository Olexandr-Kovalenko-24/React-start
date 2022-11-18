import React from "react";
import UserDashboard from './components/UserDashbord'

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <UserDashboard/>
        )
    }
}

export default App;