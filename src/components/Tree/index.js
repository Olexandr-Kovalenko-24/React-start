import React, { Component } from "react";

class Tree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bool: true
        }
        console.log('Constructor');
    }

    componentDidMount() {
        console.log('Mount');
    }

    shouldComponentUpdate() {
        console.log('Nid update?')
        return true;
    }

    componentDidUpdate() {
        console.log('Update')
    }

    componentWillUnmount (){
        console.log('I will dye')   
    }
    
    render() {
        console.log('Render')
        return (
            <div>
                <h1>Tree {this.state.bool}</h1>
                <button onClick={() => { this.setState({ bool: false }) }}>Click</button>
            </div>
        )
    }
}
export default Tree;