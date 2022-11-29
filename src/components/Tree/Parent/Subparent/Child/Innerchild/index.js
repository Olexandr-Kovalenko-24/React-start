import React from "react";
import { withUser } from '../../../../../../HOCs/withUser'

function InnerChild(props) {
const {user: {firstName, lastName, avatar}, setUser} = props;
    return (
        <div style={{ border: 'inherit', padding: '20px' }}>
            <p>InnerChild</p>
            <p>{firstName} {lastName}</p>
            <img src={avatar} />
            <button onClick={setUser}>LogOut</button>
        </div>
    )
}

const wrappedInnerChild = withUser(InnerChild);

export default wrappedInnerChild;