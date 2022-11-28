import React from 'react';
import UserContext from '../../../contexts/UserContext';


const UserMenu = () => {
    return (
        <UserContext.Consumer>
        {([userData, logOut])=>{
            if(!Object.keys(userData).length) {
                return null;
            }

            return (
                <div style={{border: '2px solid red'}}>
                   <img src={userData.avatar} style={{width: '50px', height: '50px', borderRadius: '50%'}} />
                    <span>{userData.firstName}</span>
                    <span>{userData.lastName}</span>
                    <button onClick={logOut}>logOut</button>
                </div>

            )
        }}
        </UserContext.Consumer>
    );
}

export default UserMenu;
