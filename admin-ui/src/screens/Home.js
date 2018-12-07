import React, { Component } from 'react';
import axios from 'axios';

import Stopwatch from '../components/Stopwatch';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      redisInfo: "",
      resetTime: "",
      allusers: [],
      currentRecruitee: "",
      debugger: false
    };
    this.getRedisInfo = this.getRedisInfo.bind(this);
    this.initRecruiting = this.initRecruiting.bind(this);
    this.getNextUserByQueueID = this.getNextUserByQueueID.bind(this);
    // this.endInterview = this.endInterview.bind(this);
    this.getAllUsers = this.getAllUsers.bind(this);


    // Recruitee
    this.addUserInLine = this.addUserInLine.bind(this);

    this.openDebugger = this.openDebugger.bind(this);
  }

  getRedisInfo() {
    console.log('Getting Redis Info');
    axios.get(`http://localhost:3001/redisinfo`)
      .then(res => {
        const redisInfo = res.data;
        this.setState({ redisInfo });
      })
  }

  getAllUsers() {
    axios.get(`http://localhost:3001/allusers`)
      .then(res => {
        const allusers = res.data;
        console.log(allusers);
        this.setState({ allusers });
      })
  }

  // NEED TO CALCULATE INTERVIEW TIME
  // endInterview() {
  //   this.getNextUserByQueueID();
  //   axios.post(`http://localhost:3001/endinterview`, {
  //     userid: this.state.currentRecruitee.userid,
  //     interviewTime: 3
  //   })
  //   .then(res => {
  //     console.log(res);
  //   })
  // }
  // LAST THING TO COMPLETE
  // INPUT FOR TOTAL MINUTES
  initRecruiting() {
    console.log('Init Recruiting');
    axios.post(`http://localhost:3001/initrecruiting`, {
      totalTime: 40
    })
      .then(res => {
        const resetTime = res.data;
        this.setState({ resetTime });
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

  // ###############RECRUITEE APIS########################
  addUserInLine() {
    axios.post(`http://localhost:3001/adduser`, {
      userid: 'John2'
    })
    .then(res => {
      console.log(res);
    })
  }

  openDebugger() {
    if(this.state.debugger === true) {
      this.setState({debugger: false});
    } else {
      this.setState({debugger: true});
    }
  }

  render() {
    return (
      <div>
        <h1>Recruiting</h1>
        <Stopwatch />

        <button onClick={this.openDebugger}>Debugger</button>
        {
          this.state.debugger ?
          <div>
            <div>
              <button onClick={this.getRedisInfo}>Get Redis Info</button>
              <div>
                redisInfo: 
                <div>
                  currentQueueNumber: {this.state.redisInfo.currentQueueNumber}
                </div>
                <div>
                  nextInLineQueueNumber: {this.state.redisInfo.nextInLineQueueNumber}
                </div>
                <div>
                  currentTotalTime: {this.state.redisInfo.currentTotalTime}
                </div>
                <div>
                  currentResultTime: {this.state.redisInfo.currentResultTime}
                </div>
              </div>
            </div>
            <div>
              <button onClick={this.getAllUsers}>Get All Users</button>
              {
                this.state.allusers.map((user, index) => {
                  return(
                    <li key={index}>
                      <div>{user.userid}</div>
                      <div>{user.queuenumber}</div>
                    </li>
                  );
                })
              }
            </div>
            <div>
              <button onClick={this.endInterview}>End Current Interview</button>
            </div>
            <div>
              {/* node error??!?! not crashing anything though */}
              <button onClick={this.initRecruiting}>Init Recruiting</button>
              <div>Reset time {this.state.resetTime}</div>
            </div>
            <div>
              <button onClick={this.getNextUserByQueueID}>Get Next User</button>
              <div>
                currentRecruitee: {this.state.currentRecruitee.userid}
              </div>
            </div>

            {/* RECRUITEE APIS */}
            <div>
              <button onClick={this.addUserInLine}>Add User</button>
              <div>
                
              </div>
            </div>
          </div>
          :
          null 
        }
      </div>
    )
  }
}
