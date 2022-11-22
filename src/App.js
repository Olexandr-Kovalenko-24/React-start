import React from "react";
import WindowResizer from "./components/WindowResizer";
// import Card from "./components/UserCard";

// import UserDashboard from './components/UserDashbord';
// import ProductCards from "./components/ProductCards";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <WindowResizer />
        )
    }
}

export default App;