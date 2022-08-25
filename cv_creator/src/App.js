import "./App.css";
import React, { Component } from "react";
import Forms from "./forms";
import Display from "./cvDisplay";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personal: {
        name:"",
        phoneNumber: "",
        email: "",
        description: "",
      },
      educations: [],
      workExperiences: [],
      honorsAwards: [],
      step: 1,
    
    };
    this.personalEventHandler = this.personalEventHandler.bind(this);
    this.addEducationObject = this.addEducationObject.bind(this);
    this.onChangeEducationHandler = this.onChangeEducationHandler.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.prevStep = this.prevStep.bind(this);
  }
  nextStep = () =>{
    const {step} = this.state;
    this.setState({
        step:step+1
    })
  }
  prevStep = () =>{
    const {step} = this.state;
    this.setState({
        step:step-1
    })
  }

  personalEventHandler(propertyName, e) {
    const newPersonalObject = {...this.state.personal};
    newPersonalObject[propertyName] = e.target.value;
    this.setState((prevState) => ({
        personal:newPersonalObject
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

 


  render() {
    return (
      <div id="app">
        <Forms
          state={this.state}
          nextStep = {this.nextStep}
          prevStep={this.prevStep}
          personalEventHandler={this.personalEventHandler}
          addEducationObject={this.addEducationObject}
          onChangeEducationHandler={this.onChangeEducationHandler}
        />
        <Display state={this.state} />
      </div>
    );
  }
}

export default App;
