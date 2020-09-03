import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

import { ButtonAppBar } from "./Appbar.jsx";
import { Details } from "./get-country-details/search-results.jsx";
import './App.css';


export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        countryName: "New Zealand"
    }
}

  render() {
    return (
      <div>
        <ButtonAppBar></ButtonAppBar>
        <form noValidate autoComplete="off">
          <TextField id="standard-basic" label="Enter Country Name..." onChange = {this.textChangeEvent } />
        </form>
        <Details name={this.state.countryName}></Details>
    </div>
    )
  }
  textChangeEvent = (e) => {
    this.setState({countryName: e.target.value});
  }
}

export default App
