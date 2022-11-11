import React, { Component } from 'react';
import { format, addSeconds } from 'date-fns';
import './style.css'

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date(0, 0, 0, 0, 0, 0),
            isPaused: false,
            buttonStage: 'Start'
        }
        this.intervalId = null;
    }

    start = () => {
        this.intervalId = setInterval(() => {
            const { time } = this.state;
            const newDate = addSeconds(time, 1);
            // this.buttonStage = 'Start';
            this.setState({
                time: newDate,
            })
        }, 1000)
    }

    componentWillUnmount() {
        this.clear();
    }

    pause = () => {
        clearInterval(this.intervalId);
        this.setState({
            buttonStage: 'Continue'
        })
    }

    click = () => {
        if (this.intervalId) {
            this.pause();
            this.intervalId = !this.intervalId;
        } else {
            this.setState({
                buttonStage: 'Pause'
            })
            this.start()
        }
    }

    clear = () => {
        clearInterval(this.intervalId);
        this.intervalId = null;
        this.setState({
            time: new Date(0, 0, 0, 0, 0, 0),
            buttonStage: 'Start'
        })
    }

    render() {
        const { time } = this.state;
        return (
            <div className='wrapper'>
                <h1 className="clock">{format(time, 'HH:mm:ss')}</h1>
                <div>
                    <button onClick={this.click} className="start-button button">{this.state.buttonStage}</button>
                    <button onClick={this.clear} className="clear-button button">Clear</button>
                </div>
            </div>
        );
    }
}

export default Timer;
