import React, { Component } from 'react';
import styles from './ListForm.module.css'
import cx from 'classnames';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
            isInputValid: true
        }
    }
    
    changeHandler = ({target: {value, name}}) => {
        if (value.includes(' ')) {
            this.setState({
                isInputValid: false
            })
        } else {
            this.setState({
                isInputValid: true
            })
        }
        this.setState({
            [name]: value
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
        const {task, isInputValid} = this.state;
        const cnames = cx([styles.input], {
            [styles.valid]: isInputValid,
            [styles.invalid]: !isInputValid
        });
        return (
            <form onSubmit={this.submitHandler}>
              <input 
              type='text' 
              placeholder='type next task' 
              value={task} 
              name='task'
              onChange={this.changeHandler}
              className={cnames} />
              <button>Add to list</button>
            </form>
        );
    }
}


export default TodoForm;
