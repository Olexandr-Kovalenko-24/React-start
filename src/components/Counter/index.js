import React from "react";
import PropTypes from 'prop-types';

class Counter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.step !== this.props.step){
            return false;
        }
        return true;
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