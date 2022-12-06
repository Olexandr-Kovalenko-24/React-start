import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LoginSquadhelp from '../../components/LoginSquadhelp';
import SignUpSquadhelp from '../../components/SignUpSquadhelp';
import styles from './FormSquad.module.scss'

class FormSquadPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            button: 'Login',
            path: '/login'
        }
    }

    loginSignUp = () => {
        if (this.state.button === 'Login') {
            this.setState({
                button: 'Signup',
                path: '/'
            })
        }
        if (this.state.button === 'Signup') {
            this.setState({
                button: 'Login',
                path: '/login'
            })
        }
    }

    render() {
        return (
            <BrowserRouter>
                <header className={styles.header}>
                    <img src='https://www.squadhelp.com/img/logo.png' />
                    <Link onClick={this.loginSignUp} to={this.state.path} className={styles.link}>
                        <button className={styles.button} >{this.state.button}</button>
                    </Link>
                </header>
                <Routes>
                    <Route path="/" element={<SignUpSquadhelp />} />
                    <Route path="/login" element={<LoginSquadhelp />} />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default FormSquadPage;
