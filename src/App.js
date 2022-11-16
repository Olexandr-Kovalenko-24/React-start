import React from "react";
import TodoList from "./components/ToDoList";

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
                <TodoList />
            </div>
        )
    }
}

export default App;