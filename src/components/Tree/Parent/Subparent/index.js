import React from "react";
import Child from "./Child";

function Subparent(props) {
    return(
        <div style={{border: '2px solid black', padding:'20px'}}>
        <p>Subparent</p>
        <Child />
        </div>
    )
}
export default Subparent;