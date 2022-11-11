import React from "react";
// import UserDashboard from "./components/UserDashbord";
// import Tree from "./components/Tree"
import Timer from "./components/Timer";

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
            {this.state.isOn ? <Timer /> : null}
            </div>
        )
    }
}

export default App;