import React, { Component } from 'react';
import axios from 'axios';
import './Stopwatch.css';

export default class Stopwatch extends Component {
  state = {
    status: false,
    runningTime: 0,
    
    redisInfo: "",
    resetTime: "",
    allusers: [],
    currentRecruitee: "",
    debugger: false
  };
  

  // 60000 milliseconds = 1 min
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  handleClick = () => {
    this.setState(state => {
      if (state.status) {
        clearInterval(this.timer);
        // upon timer stop, collect info
        this.endInterview();
        this.setState({ runningTime: 0 });
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

  convertTimeIntoMinutes() {
    var time = this.state.runningTime;
    time = parseInt(time) / 60000;
    if(time < 1) {
      var setTime = 1;
      return setTime;
    } else {
      console.log(time);
      return time;
    }
  }

  endInterview() {
    // http://localhost:3001/endinterview
    this.getNextUserByQueueID();
    axios.post(`http://localhost:3001/endinterview`, {
      userid: this.state.currentRecruitee.userid,
      interviewTime: this.convertTimeIntoMinutes()
    })
    .then(res => {
      console.log(res);
    })
  }

  getNextUserByQueueID() {
    axios.get(`http://localhost:3001/nextuserinline`)
      .then(res => {
        const currentRecruitee = res.data;
        console.log(currentRecruitee);
        this.setState({ currentRecruitee });
        // return currentRecruitee;
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