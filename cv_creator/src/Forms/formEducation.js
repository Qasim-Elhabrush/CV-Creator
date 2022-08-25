import React, { Component } from "react";
import uniqid from "uniqid";
import "./styleEducation.css";
class EducationForm extends Component {
  constructor(props) {
    super(props);

    this.educationObject = {
      key: uniqid(),
      nameOfSchool: "",
      major: "",
      gpa: "",
      startDate: "",
      endDate: "",
    }
    if(this.props.state.educations.length===0){
       this.props.addEducationObject(this.educationObject)
    }


  }

  render() {
    return (
      <div className="formContainer">
        <div className="formTitle">Education</div>
        <form id="educationForm">
          <input
            type="text"
            defaultValue={this.props.state.educations.forEach(education=>{ 
              if(education.key === this.educationObject.key){
                return education.name
              }}
             )}
            name="nameOfSchool"            
            className="nameOfSchoolInput"
            placeholder="Name of School or Program" 
            onChange={(e)=>{
              this.props.onChangeEducationHandler(this.educationObject.key,e)
            }}
          ></input>

          <input
            type="text"
            name="major"
            placeholder="Major - (ex. B.S Psychology)"
            onChange={(e)=>{
              this.props.onChangeEducationHandler(this.educationObject.key,e)
            }}
          ></input>

          <input
            type="text"
            name="gpa"
            className="GPA"
            placeholder="GPA(optional)"
            onChange={(e)=>{
              this.props.onChangeEducationHandler(this.educationObject.key,e)
            }}
          ></input>

          <label>Start Date</label>
          <input
            type="month"
            name="startDate"
            className="EducationStartDateInput"
            onChange={(e)=>{
              this.props.onChangeEducationHandler(this.educationObject.key,e)
            }}
          ></input>

          <label>End Date</label>
          <input
            type="month"
            name="endDate"
            className="EducationEndDateInput"
            onChange={(e)=>{
              this.props.onChangeEducationHandler(this.educationObject.key,e)
            }}
          ></input>
        </form>
      </div>
    );
  }
}
export default EducationForm;
