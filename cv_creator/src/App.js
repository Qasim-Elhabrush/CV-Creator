import "./App.css";
import React, { Component } from "react";
import Forms from "./forms";
import Display from "./cvDisplay";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personal: {
        name: "",
        phoneNumber: "",
        email: "",
        description: "",
      },
      educations: [],
      workExperiences: [],
      honorsAwards: [],
      currentForm:1,
    
    };
    this.personalEventHandler = this.personalEventHandler.bind(this);
  }

  personalEventHandler(propertyName, e) {
  
    this.setState((prevState) => ({
      ...prevState,
      personal: {
        ...prevState.personal,
        [propertyName]: e.target.value,
      },
    }));
  }

  render() {
    return (
      <div id="app">
        <Forms state={this.state} personalEventHandler = {this.personalEventHandler}/>
        <Display state={this.state} />
      </div>
    );
  }
}

export default App;
