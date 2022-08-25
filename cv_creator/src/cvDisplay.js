import React, { Component } from "react";
import "./displayStyle.css";
import PersonalDisplay from "./cvDisplay/personalDisplay";
import EducationDisplay from "./cvDisplay/educationDisplay";
import WorkDisplay from "./cvDisplay/workDisplay";
import HonorsDisplay from "./cvDisplay/honorsDisplay";
class Display extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="display">
        <div id="displayContent">
          <PersonalDisplay name ={this.props.state.personal.name} number = {this.props.state.personal.phoneNumber} email = {this.props.state.personal.email} description = {this.props.state.personal.description}/>
          {this.props.state.educations.map(education=><EducationDisplay key={education.key} nameOfSchool = {education.nameOfSchool} major = {education.major} gpa = {education.gpa} startDate={education.startDate} endDate={education.endDate}/>
          )}
          {this.props.state.workExperiences.map(workExperience=><WorkDisplay nameOfCompany = {workExperience.nameOfCompany} startDate ={workExperience.startDate} endDate = {workExperience.endDate} responsibilities = {workExperience.responsibilities}/>
          )}
          {this.props.state.honorsAwards.map(honorAward=><HonorsDisplay nameOfAward={honorAward.nameOfAward} dateReceived={honorAward.dateReceived} description={honorAward.description}/>
          )}
        </div>
      </div>
    );
  }
}
export default Display;
