import React, {useContext} from "react";
import UserContext from '../../../contexts/UserContext';

const UserMenu = (props) => {
    const [user, setUser] = useContext(UserContext);

    if (!Object.keys(user).length) {
        return null;
    }

    return (
        <div style={{ border: '2px solid red' }}>
            <img src={user.avatar} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
            <span>{user.firstName}</span>
            <span>{user.lastName}</span>
            <button onClick={setUser}>logOut</button>
        </div>
    )
}


export default UserMenu;
