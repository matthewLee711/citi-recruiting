import React, { Component } from 'react';
import axios from 'axios';
import './Stopwatch.css';

export default class Stopwatch extends Component {
  state = {
    status: false,
    runningTime: 0
  };
  

  // 60000 milliseconds = 1 min
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  handleClick = () => {
    this.setState(state => {
      if (state.status) {
        clearInterval(this.timer);
      } else {
        const startTime = Date.now() - this.state.runningTime;
        this.timer = setInterval(() => {
          this.setState({ runningTime: Date.now() - startTime });
        });
      }
      return { status: !state.status };
    });
  };

  handleReset = () => {
    this.setState({ runningTime: 0, status: false });
  };


  endInterview() {
    // http://localhost:3001/endinterview
    this.getNextUserByQueueID();
    axios.post(`http://localhost:3001/endinterview`, {
      userid: this.state.currentRecruitee.userid,
      interviewTime: 3
    })
    .then(res => {
      console.log(res);
    })
  }
  
  render() {
    const { status, runningTime } = this.state;
    return (
      <div>
        <p>{runningTime}ms</p>
        <button className="button-style" onClick={this.handleClick}>
          {status ? 'Stop' : 'Start'}
        </button>
        <button className="button-style" onClick={this.handleReset}>
          Reset
        </button>
      </div>
    );
  }
}