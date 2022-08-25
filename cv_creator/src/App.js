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
      currentForm: 0,
    };
    this.personalEventHandler = this.personalEventHandler.bind(this);
    this.addEducationObject = this.addEducationObject.bind(this);
    this.onChangeEducationHandler = this.onChangeEducationHandler.bind(this);
    this.nextForm = this.nextForm.bind(this);
    this.lastForm = this.lastForm.bind(this);
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

  addEducationObject(educationObject) {
    this.state.educations.length === 0
      ? this.setState((prevState) => ({
          educations: [educationObject],
        }))
      : this.setState((prevState) => ({
          educations: [...prevState.educations, educationObject],
        }));
  }
  onChangeEducationHandler(uniqueKey, e) {
    const newArr = this.state.educations.map((obj) => {
      if (obj.key === uniqueKey) {
        return { ...obj, [e.target.name]: e.target.value };
      }
      return obj;
    });
    this.setState((prevState) => ({
      educations: newArr,
    }));
  }
  nextForm(){
    this.setState((prevState)=>({
        currentForm: prevState.currentForm+1
    }))
  }
  lastForm(){
    this.setState((prevState)=>({
        currentForm: prevState.currentForm-1
    }))
    
  }

  render() {
    return (
      <div id="app">
        <Forms
          state={this.state}
          personalEventHandler={this.personalEventHandler}
          addEducationObject={this.addEducationObject}
          onChangeEducationHandler={this.onChangeEducationHandler}
        />
        <Display state={this.state} />
        <button onClick={this.lastForm}>Go back</button>
        <button onClick ={this.nextForm}>Go Forward</button>
      </div>
    );
  }
}

export default App;
