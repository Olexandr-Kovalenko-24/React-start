import React from "react";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import ToDolist from './components/ToDoList'
import LoginForm from './components/LoginForm'

class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
            <ul>
                <li><Link to='/'>Go to Home</Link></li>
                <li><Link to='/login'>Go to LoginForm</Link></li>
                <li><Link to='/todo'>Go to ToDo</Link></li>
            </ul>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/login" element={<LoginForm />}/>
                    <Route path="/todo" element={<ToDolist />}/>
                </Routes>
            </BrowserRouter>
        )
    }
}

export default App;

const Home = () => {
    return <h1>You are home now!</h1>
}