import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(){
      super();

      this.state ={

        string: "Where is RahatTheBad? "
      
    }
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p class ="red">
            {this.state.string}
        </p>
       <button class ="blue button" onClick={() => this.setState({string : "BhattiR sucks"})}>
          Change text
       </button>
        <br/>
       <button class = "red button" onClick={() => this.setState({string : "Where is RahatTheBad?"})}>
          Change to orginal text
       </button>

      </header>
    </div>
    );
  }
}

export default App;



