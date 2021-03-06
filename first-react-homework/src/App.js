import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    userNames : [
      { username: 'Alex' }
    ]
  };

  changeHandler = (event) =>{
    this.setState({
      userNames : [
        { username: event.target.value }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput username={this.state.userNames[0].username} change={this.changeHandler.bind(this)} />
        <UserOutput username={this.state.userNames[0].username}/>        
      </div>
    );
  }
}

export default App;
