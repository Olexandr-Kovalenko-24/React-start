import React from "react";
// import TodoList from "./components/ToDoList";
import FlexContainer from "./components/Flex";
import styles from './App.module.css'


class App extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     isOn: true
        // }
    }

    render() {
        return (
            <FlexContainer fd='row' jc='space-evenly' ai='center'>
                <div className={styles.box}>1</div>
                <div className={styles.box}>2</div>
                <div className={styles.box}>3</div>
                <div className={styles.box}>4</div>
                <div className={styles.box}>5</div>
                <div className={styles.box}>6</div>
            </FlexContainer>
        )
    }
}

export default App;