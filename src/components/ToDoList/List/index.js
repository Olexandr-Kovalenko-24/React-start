import React, { Component } from 'react';
import ListElement from '../ListElement';

// const arrayTask = [
//     {
//         'text': 'Read book',
//         id: 1
// },
// {
//     'text': 'Write song',
//     id: 2
// }
// ]

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
        }
        this.taskList = []
    }

    changeHandler = ({target: {name, value}}) => {
        this.setState({
            [name]: value,
        })
        this.taskList.unshift(value);
    }

    submitHandler = (event) => {
        event.preventDefault();
    }

    addTask = () => this.taskList.map((taskList)=><ListElement text={taskList} key={new Date().getTime()}/>);

    clickHandler = () => {
        this.setState({
            task: ''
        })
        if (this.taskList.length>1){
            this.taskList.shift();
        }
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
              <button onClick={this.clickHandler}>Add to list</button>
            </form>
            <ul>
            <div>{this.addTask()}</div>
            </ul>
            </>
        );
    }
}

export default List;


