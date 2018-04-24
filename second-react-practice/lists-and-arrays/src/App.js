import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state = {
    input : {
      length : 0,
      value : ''
    },
    inputArray : []
  }

  countFieldsLength = (event) =>{
    const inputValue = event.target.value;
    const inputArray = inputValue.split("");
    this.setState({
      input : {
        length : inputValue.length,
        value : inputValue
      },
      inputArray : inputArray
    })
  }

  deleteChar = (index) => {
    const inputArray = [...this.state.inputArray];
    inputArray.splice(index, 1);
    const inputValue = inputArray.join("");
    this.setState({
      input : {
        length : inputValue.length,
        value : inputValue
      },
      inputArray : inputArray
    });
  }
  

  render() {
    let charComponent = (
      <div>
        {
          this.state.inputArray.map((char, index) => {
            return <CharComponent 
            charValue={char} 
            click={() => this.deleteChar(index)}
            key={index}
             />
          })
        }
      </div>
    )
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Nery's second practice</h1>
        </header>
        <input type="text" className="App-input" onChange={(event) => this.countFieldsLength(event)} value={this.state.input.value}/>
        <p>{this.state.input.length}</p>
        <ValidationComponent inputLength={this.state.input.length}></ValidationComponent>
        {charComponent}
      </div>
    );
  }
}

export default App;
