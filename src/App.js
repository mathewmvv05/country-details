import React, { Component } from 'react';
import { Details } from "./get-country-details/search-results.jsx";
import './App.css';


export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        countryName: ""
    }
}

  render() {
    return (
      <div>
        <h1>Country Details</h1>
        <input onChange = {this.textChangeEvent } type  = "text"/>
        
        <Details name={this.state.countryName}></Details>
    </div>
    )
  }
  textChangeEvent = (e) => {
    console.log(e.target.value);
    this.setState({countryName: e.target.value});
  }
}

export default App
