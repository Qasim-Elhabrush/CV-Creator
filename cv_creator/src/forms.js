import "./formsStyle.css";
import React, { Component } from "react";
import PersonalForm from "./Forms/formPersonal";
import EducationForm from "./Forms/formEducation";
import WorkExperienceForm from "./Forms/formWork";
import HonorsForm from "./Forms/formHonors";
class Forms extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    switch (this.props.state.step) {
      case 1:
        return (
          <div>
            <div id="formsContainer">
              <PersonalForm
                state={this.props.state}
                personalEventHandler={this.props.personalEventHandler}
              />
            </div>
            <button onClick={this.props.nextStep}>Next</button>
          </div>
        );
      case 2:
        return (
          <div>
            <div id="formsContainer">
              <EducationForm
                state={this.props.state}
                addEducationObject={this.props.addEducationObject}
                onChangeEducationHandler={this.props.onChangeEducationHandler}
              />
            </div>

            <button onClick={this.props.prevStep}>Back</button>
            <button onClick={this.props.nextStep}>Next</button>
          </div>
        );
      case 3:
        return (
          <div>
            <div id="formsContainer">
              <WorkExperienceForm state={this.props.state} />
            </div>
            <button onClick={this.props.prevStep}>Back</button>{" "}
            <button onClick={this.props.nextStep}>Next</button>
          </div>
        );
      case 4:
        return (
          <div>
            <div id="formsContainer">
              <HonorsForm state={this.props.state} />
            </div>
            <button onClick={this.props.prevStep}>Back</button>
          </div>
        );
      default:
        return;
    }
  }
}
export default Forms;
