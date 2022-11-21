import React from "react";
// import UserDashboard from './components/UserDashbord'
import ProductCards from "./components/ProductCards";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ProductCards/>
        )
    }
}

export default App;