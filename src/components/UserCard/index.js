import React from "react";
import './style.css';

class Card extends React.Component {

    render() {
        const {user: {id, name, description, profilePicture}} = this.props;
        return (
            <section className="card-wrapper">
                <div className="image-wrapper">
                <img src={profilePicture} className="avatar" />
                </div>
                <h2 className="userName">{name}</h2>
                <p className="discription">{description}</p>
                <button className="connectButton">Connect</button>
            </section>
        )
    }
}

export default Card;