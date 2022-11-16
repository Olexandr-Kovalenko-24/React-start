import React, { Component } from 'react';
import ListElement from '../ListElement';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
            taskList: []
        }
    }

    changeHandler = ({target: {name, value}}) => {
        this.setState({
            [name]: value,
        })
    }

    submitHandler = (event) => {
        event.preventDefault();
        const {taskList, task} = this.state;
        const todoObject = {
            body: task,
            id: taskList.length
        }
        this.setState({
            taskList: [...taskList, todoObject],
            task: ''
        })
    }

    addTask = () => {
        const {taskList} = this.state;
        return taskList.map(elem=><ListElement text={elem.body} key={elem.id}/>);
    }
    render() {  
        return (
            <>
            <form onSubmit={this.submitHandler}>
              <input 
              type='text' 
              placeholder='type next task' 
              value={this.state.task} 
              name='task'
              onChange={this.changeHandler} />
              <button>Add to list</button>
            </form>
            <ul>
            {this.addTask()}
            </ul>
            </>
        );
    }
}

export default List;


