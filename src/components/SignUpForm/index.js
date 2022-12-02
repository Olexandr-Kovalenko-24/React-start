import React, { Component } from 'react';
import styles from './SignUp.module.css';
import {SCHEMA} from '../../schemes/index'

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            pass: ''
        }
    }

    changeHandler = ({target: {value, name}}) => {
        this.setState({
            [name]: value
        })
    }
    
    submitHandler = (event) => {
        event.preventDefault();
        SCHEMA.validate(this.state)
        .then(validateData => {
            console.log(validateData)
        })
        .catch (err => {
            console.log(err.message)
        })
    }

    render() {
        const {firstName, lastName, email, pass} = this.state;
        return (
            <form className={styles.form} 
            onSubmit={this.submitHandler} >
                <input type='text' 
                name='firstName'
                value={firstName}
                placeholder='firstName' 
                onChange={this.changeHandler} />
                <input type='text' 
                name='lastName'
                value={lastName}
                placeholder='lastName' 
                onChange={this.changeHandler} />
                <input type='text' 
                name='email'
                value={email}
                placeholder='email' 
                onChange={this.changeHandler} />
                <input type='text' 
                name='pass'
                value={pass}
                placeholder='pass' 
                onChange={this.changeHandler} />
                <button>Send</button>
            </form>
        );
    }
}

export default SignUpForm;
