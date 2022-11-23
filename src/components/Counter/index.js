import React from "react";
import PropTypes from 'prop-types';

class Counter extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }

    increment = () => {
        const {step} = this.props;
        this.setState({
            count: this.state.count + step
        });
    }

    decrement = () => {
        const {step} = this.props;
            this.setState({
                count: this.state.count - step
            });
    }

    render(){
        console.log('counter render');
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        )
    }
}

Counter.defaultProps = {
    step: 5
}

Counter.propTypes = {
    step: PropTypes.number
}


export default Counter;