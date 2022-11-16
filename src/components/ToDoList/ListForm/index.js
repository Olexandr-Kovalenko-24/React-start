import React, { Component } from 'react';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ''
        }
    }
    
    changeHandler = ({target: {name, value}}) => {
        this.setState({
            [name]: value,
        })
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.sendDataToParent(this.state.task);
        this.setState({
            task: ''
        })
    }
    
    render() {
        const {task} = this.state;
        return (
            <form onSubmit={this.submitHandler}>
              <input 
              type='text' 
              placeholder='type next task' 
              value={task} 
              name='task'
              onChange={this.changeHandler} />
              <button>Add to list</button>
            </form>
        );
    }
}

export default TodoForm;
