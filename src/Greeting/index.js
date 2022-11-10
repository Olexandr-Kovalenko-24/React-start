import React from "react";

class Greeting extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <h2>Hello, {this.props.userName}</h2>
            </div>
        )
    }
}