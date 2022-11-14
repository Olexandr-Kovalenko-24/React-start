import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    changeHandler = ({target: {value, name}}) => {
        this.setState({
            [name]: value
        })
    }
 
    submitHandler = (event) => {
    event.preventDefault()
    }

    render (){
    return (
        <form onSubmit={this.submitHandler}>
            <input 
            type="text" 
            placeholder="Type your email" 
            name='email'
            value={this.state.email} 
            onChange={this.changeHandler}/>
            <input 
            type="text" 
            placeholder="Type your password" 
            name='password'
            value={this.state.password} 
            onChange={this.changeHandler}/>
            <button>Click</button>
        </form>
    );
}
}


export default LoginForm;
