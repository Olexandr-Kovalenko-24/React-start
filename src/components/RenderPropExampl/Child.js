import React, { Component } from 'react';

class Child extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                value: 'super-impotant-value'
            }
        }
    }
    
    render() {
        return this.props.children(this.state);
    }
}

export default Child;