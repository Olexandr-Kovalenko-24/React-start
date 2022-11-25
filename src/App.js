import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ToDolist from './components/ToDoList';
import LoginForm from './components/LoginForm';
import CounterPage from './pages/CounterPage';
import LoaderPage from "./pages/LoaderPage";

class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <ul>
                    <li><Link to='/'>Go to Home</Link></li>
                    <li><Link to="/loader">Go to Loader</Link></li>
                    <li><Link to='/counter'>Go to CounterPage</Link></li>
                    <li><Link to='/login'>Go to LoginForm</Link></li>
                    <li><Link to='/todo'>Go to ToDo</Link></li>
                </ul>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/loader" element={<LoaderPage />}/>
                    <Route path="/counter" element={<CounterPage />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/todo" element={<ToDolist />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        )
    }
}

export default App;

const NotFound = () => {
    return <div>Page not found</div>
}

const Home = () => {
    return <h1>You are home now!</h1>
}