import React, { useState } from "react";
import MouseTracker from "./components/MouseTracker";
import Timer from './components/Timer';
import UserDashboard from './components/UserDashbord'


function App(props){
    const [isVisible, setVisible] = useState(true);
    return (
        // <>{isVisible && <MouseTracker />}</>
        <UserDashboard />
        )
}

export default App;
