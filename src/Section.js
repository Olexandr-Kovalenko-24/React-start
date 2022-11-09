function Section(props) {

    const userObj = {
        "id": 5,
        "name": "Alex",
        "description": ";oiu;oxzkxfaklwejlkwej",
        "profilePicture": "https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
    }

    const clicker = () => {
        console.log('hello')
    }

    return (
        <section onClick={clicker}>
            <img src={userObj.profilePicture} />
            <h2>{userObj.name}</h2>
            <p>{userObj.description}</p>
            <button>Text</button>
        </section>
    )
}

export default Section;