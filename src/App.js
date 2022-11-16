import React from "react";
import List from "./components/ToDoList/List";

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
                <List />
            </div>
        )
    }
}

export default App;