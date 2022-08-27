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
          <div className="displayTitle">Education</div>
          <EducationDisplay nameOfSchool = {this.props.state.educations.nameOfSchool} major = {this.props.state.educations.major} gpa = {this.props.state.educations.gpa} startDate={this.props.state.educations.startDate} endDate={this.props.state.educations.endDate}/>
          <div className="displayTitle">Relevant Work Experience</div>
         <WorkDisplay nameOfCompany = {this.props.state.workExperiences.nameOfCompany} startDate ={this.props.state.workExperiences.startDate} endDate = {this.props.state.workExperiences.endDate} responsibilities = {this.props.state.workExperiences.responsibilities}/>
         <div className="displayTitle">Honors and Awards</div>
         <HonorsDisplay nameOfAward={this.props.state.honorsAwards.awardName} dateReceived={this.props.state.honorsAwards.dateReceived} description={this.props.state.honorsAwards.description}/>
     
        </div>
      </div>
    );
  }
}
export default Display;
