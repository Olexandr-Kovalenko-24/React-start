import React from "react";
import './style.css';

class Card extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <section className="card-wrapper">
                <img src={this.props.src} className="avatar" />
                <h2 className="userName">{this.props.userName}</h2>
                <p className="discription">{this.props.description}</p>
                <button className="connectButton">Connect</button>
            </section>
        )
    }
}

export default Card;