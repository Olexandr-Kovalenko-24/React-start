import React from "react";
import Subparent from "./Subparent";

function Parent (props) {
    return(
        <div style={{border: '2px solid black', padding:'20px'}}>
        <p>Parent</p>
        <Subparent />
        </div>
    )
}
export default Parent;