import React, { useState } from "react";
// import UserDashboard from './components/UserDashbord';
// import DataProvider from "./components/DataProvider";
import UserLoader from "./components/UserLoader";
import {getUsers} from './api/user'


function App(props) {

    return (
        <UserLoader />
    )
}

export default App;
