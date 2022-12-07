import React, {useContext} from "react";
import UserContext from "../../../../../../contexts/UserContext";

function InnerChild(props) {
    const [user, setUser] = useContext(UserContext);
    return (
        <div style={{ border: 'inherit', padding: '20px' }}>
            <p>InnerChild</p>
            <p>{user.firstName} {user.lastName}</p>
            <img src={user.avatar} />
            <button onClick={setUser}>LogOut</button>
        </div>
    )
}


export default InnerChild;