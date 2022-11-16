import React, { Component } from 'react';
import TodoForm from './ListForm';
import ListElement from './ListElement';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskList: []
        }
    }

    mapList = () => {
        const { taskList } = this.state;
        return taskList.map(elem => <ListElement text={elem.body} key={elem.id} id={elem.id} />);
    }

    addNewItem = (data) => {
        const {taskList} = this.state;
        const todoObject = {
            body: data,
            id: taskList.length
        }
        this.setState({
            taskList: [...taskList, todoObject],
        });
    }

    render() {
        return (
        <section>
            <TodoForm sendDataToParent={this.addNewItem} />
            <ul>
                {this.mapList()}
            </ul>
        </section>
        );
    }
}

export default TodoList;


