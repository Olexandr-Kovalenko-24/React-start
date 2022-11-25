import React, { Component } from 'react';

class WindowResizer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            y: window.innerHeight,
            x: window.innerWidth
        }
    }

    resizeHandler = () => {
        this.setState({
            y: window.innerHeight,
            x: window.innerWidth
        })
    }

    componentDidMount () {
        window.addEventListener('resize', this.resizeHandler)
    }

    componentWillUnmount () {
        window.removeEventListener('resize', this.resizeHandler)
    }

    render() {
        return this.props.children(this.state);
    }
}

export default WindowResizer;
