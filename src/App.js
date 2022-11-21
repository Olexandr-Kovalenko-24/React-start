import React from "react";
import Card from "./components/UserCard";

// import UserDashboard from './components/UserDashbord';
// import ProductCards from "./components/ProductCards";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card />
        )
    }
}

export default App;