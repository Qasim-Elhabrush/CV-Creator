import React, { Component } from "react";
import "./styleWork.css";
class WorkExperienceForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="formContainer">
        <div className="formTitle">Work Experience</div>
        <form id="workExperienceForm">
          <input
            type="text"
            id="nameOfCompanyInput"
            placeholder="Name of Company"
            value ={this.props.state.workExperiences.nameOfCompany}
            onChange={(e) => {
              this.props.workExperiencesEventHandler("nameOfCompany", e);
            }}
          ></input>
          <label>Start Date</label>
          <input
            type="month"
            name="startDate"
            id="WorkStartDateInput"
            value ={this.props.state.workExperiences.startDate}
            onChange={(e) => {
              this.props.workExperiencesEventHandler("startDate", e);
            }}
          ></input>
          <label>End Date</label>
          <input
            type="month"
            name="endDate"
            id="WorkStartDateInput"
            value ={this.props.state.workExperiences.endDate}
            onChange={(e) => {
              this.props.workExperiencesEventHandler("endDate", e);
            }}
          ></input>
          <textarea
            type="textArea"
            className="workResponsibilityInput"
            placeholder="Enter Your Responsibilities Here"
            value ={this.props.state.workExperiences.responsibilities}
            onChange={(e) => {
              this.props.workExperiencesEventHandler("responsibilities", e);
            }}
          ></textarea>
        </form>
      </div>
    );
  }
}
export default WorkExperienceForm;
