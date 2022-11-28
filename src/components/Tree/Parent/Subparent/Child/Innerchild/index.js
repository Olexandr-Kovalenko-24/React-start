import React from "react";
import UserContext from "../../../../../../contexts";

function InnerChild (props) {
    return(
        <UserContext.Consumer>
            {([{firstName, lastName, avatar}, logOut])=>{
                return (
                    <div style={{border: '2px solid black', padding:'20px'}}>
                    <p>InnerChild</p>
                    <p>{firstName} {lastName}</p>
                    <img src={avatar} />
                    <button onClick={logOut}>LogOut</button>
                    </div>
                )
            }}
        </UserContext.Consumer>
    )
}
export default InnerChild;
