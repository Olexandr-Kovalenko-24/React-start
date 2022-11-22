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
        const {x,y} = this.state;
        return (
            <section>
                <p>Current width: {x}px</p>
                <p>Current height: {y}px</p>
            </section>
        );
    }
}

export default WindowResizer;
