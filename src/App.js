import React, { useState } from "react";
import MouseTracker from "./components/MouseTracker";



function App(props){
    const [isVisible, setVisible] = useState(true);
    return (
        <>{isVisible && <MouseTracker />}</>
    )
}

export default App;
