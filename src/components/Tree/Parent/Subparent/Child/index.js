import React from "react";
import InnerChild from "./Innerchild";

function Child (props) {
    return(
        <div style={{border: 'inherit', padding:'20px'}}>
        <p>Child</p>
        <InnerChild />
        </div>
    )
}
export default Child;