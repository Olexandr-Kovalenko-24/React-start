import React, { useState } from "react";
import MouseTracker from "./components/MouseTracker";
import FormsSquadPage from './pages/FormsSquadPage'



function App(props){
    const [isVisible, setVisible] = useState(true);
    return (
        <>{isVisible && <FormsSquadPage />}</>
    )
}

export default App;
