import React, { Component } from 'react';
//import logo from './logo.svg';
import {CardList} from './components/card-list/card-list.component.jsx'


import './App.css';

class App extends Component {

    constructor(){
      super();

      this.state={

        ssUltimateChar: [ ]

      };
    }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ssUltimateChar: users}));
  }

  render() {
    return (
     <div className="App">
     <CardList name = 'Mario'>
    
     {
      this.state.ssUltimateChar.map(ssUltimateChar => (
<h1 key = {ssUltimateChar.id}> {ssUltimateChar.name}</h1>

  ))}
      
      </CardList>
    </div>
    );
  }
}

export default App;



