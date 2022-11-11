import React, { Component } from 'react';
import {format, addSeconds} from 'date-fns';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date(0,0,0,0,0,0),
            isPaused: false,
            buttonStage: 'Start'
        }
        this.intervalId = null;
    }

    start = () => {
        this.intervalId = setInterval(() => {
            const {time} = this.state;
            const newDate = addSeconds(time, 1);
            // this.buttonStage = 'Start';
            this.setState({
                time: newDate,
            })
        }, 1000)
    }

    componentWillUnmount(){
    this.clear();
    }

    pause = () => {
        clearInterval(this.intervalId);
        this.setState({
            buttonStage: 'Continue'
        })
    }

    click = () => {
        if(this.intervalId){
            this.pause();
            this.intervalId = !this.intervalId;
        } else {
            this.setState({
                buttonStage: 'Pause'
            })
            this.start()}
    }

    clear = () => {
        clearInterval(this.intervalId);
        this.intervalId = null;
        this.setState({
            time: new Date(0,0,0,0,0,0),
            buttonStage: 'Start'
        })
    }

    render() {
        const {time} = this.state;
        return (
            <div>
                <h1>{format(time, 'HH:mm:ss')}</h1>
                <button onClick={this.click}>{this.state.buttonStage}</button>
                <button onClick={this.clear}>Clear</button>
            </div>
        );
    }
}

export default Timer;
