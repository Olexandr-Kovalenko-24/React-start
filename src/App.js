import React, { useState } from "react";
import WindowSizer from "./components/WindowSizer";
// import MouseTracker from "./components/MouseTracker";



function App(props){
    const [isVisible, setVisible] = useState(true);
    return (
        <>{isVisible && <WindowSizer />}</>
    )
}

export default App;
