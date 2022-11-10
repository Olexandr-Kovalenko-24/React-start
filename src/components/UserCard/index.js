import React from "react";

class Card extends React.Component {

    render() {
        return (
            <section onClick={clicker}>
                <img src={userObj.profilePicture} />
                <h2>{userObj.name}</h2>
                <p>{userObj.description}</p>
                <button>Text</button>
            </section>
        )
    }
}
