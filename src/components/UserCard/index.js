import React from "react";
import './style.css';

class Card extends React.Component {

    render() {
        const {user: {name: {first, last}, email, picture: {large}}} = this.props;
        return (
            <section className="card-wrapper">
                <div className="image-wrapper">
                <img src={large} className="avatar" />
                </div>
                <h2 className="userName">{first}{last}</h2>
                <p className="discription">{email}</p>
                <button className="connectButton">Connect</button>
            </section>
        )
    }
}


// Card.defaultProps = {
//     first: 'Alex',
//     last: 'Doe',
//     email: 'example.com',
//     large: "/logo192.png"
// }

// Card.protoTypes = {
//     first: PropTypes.string,
//     last: PropTypes.string,
//     email: PropTypes.string,
//     large: PropTypes.string
// }

export default Card;