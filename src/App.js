import React from "react";
// import UserDashboard from "./components/UserDashbord";
// import Tree from "./components/Tree"
// import Timer from "./components/Timer";
import Scene from "./components/Scene";

class App extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        isOn: true
    }
}

    render() {
        return (
            <div>
                <Scene />
            </div>
        )
    }
}

export default App;