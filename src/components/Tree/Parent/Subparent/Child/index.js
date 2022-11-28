import React from "react";
import InnerChild from "./Innerchild";

function Child (props) {
    return(
        <div style={{border: '2px solid black', padding:'20px'}}>
        <p>Child</p>
        <InnerChild />
        </div>
    )
}
export default Child;