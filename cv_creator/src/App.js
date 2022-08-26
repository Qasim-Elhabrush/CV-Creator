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
      educations: {
        nameOfSchool: "",
        major: "",
        gpa: "",
        startDate: "",
        endDate: "",
      },
      workExperiences: {
        nameOfCompany:"",
        startDate:"",
        endDate:"",
        responsibilities:""

      },
      honorsAwards: {
        awardName:"",
        dateReceived:"",
        description:""
      },
      step: 1,
    
    };
    this.personalEventHandler = this.personalEventHandler.bind(this);
    this.educationsEventHandler = this.educationsEventHandler.bind(this);
    this.workExperiencesEventHandler = this.workExperiencesEventHandler.bind(this);
    this.honorsAwardsEventHandler = this.honorsAwardsEventHandler.bind(this);

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

  educationsEventHandler(propertyName, e) {
    const newEducationObject = {...this.state.educations};
    newEducationObject[propertyName] = e.target.value;
    this.setState((prevState) => ({
        educations:newEducationObject
    }));
  
  }
  workExperiencesEventHandler(propertyName, e) {
    const newWorkExperienceObject = {...this.state.workExperiences};
    newWorkExperienceObject[propertyName] = e.target.value;
    this.setState((prevState) => ({
        workExperiences:newWorkExperienceObject
    }));
  
  }
  honorsAwardsEventHandler(propertyName, e) {
    const newHonorsObject = {...this.state.honorsAwards};
    newHonorsObject[propertyName] = e.target.value;
    this.setState((prevState) => ({
        honorsAwards:newHonorsObject
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
          educationsEventHandler = {this.educationsEventHandler}
          workExperiencesEventHandler = {this.workExperiencesEventHandler}
          honorsAwardsEventHandler ={this.honorsAwardsEventHandler}
         
        />
        <Display state={this.state} />
      </div>
    );
  }
}

export default App;
