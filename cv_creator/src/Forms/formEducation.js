import React, { Component } from "react";
import uniqid from "uniqid";
import "./styleEducation.css";
class EducationForm extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="formContainer">        
        <form id="educationForm">
          <input
            type="text"
            name="nameOfSchool"
            className="nameOfSchoolInput"
            placeholder="Name of School or Program"
            onChange={e=>{this.props.onChangeEducationHandler("nameOfSchool",e);}}
              
          ></input>

          <input
            type="text"
            name="major"
            placeholder="Major - (ex. B.S Psychology)"
            onChange={e=>{this.props.onChangeEducationHandler("major",e);}}
          ></input>

          <input
            type="text"
            name="gpa"
            className="GPA"
            placeholder="GPA(optional)"
            onChange={e=>{this.props.onChangeEducationHandler("gpa",e);}}
          ></input>

          <label>Start Date</label>
          <input
            type="month"
            name="startDate"
            className="EducationStartDateInput"
            onChange={e=>{this.props.onChangeEducationHandler("startDate",e);}}
          ></input>

          <label>End Date</label>
          <input
            type="month"
            name="endDate"
            className="EducationEndDateInput"
            onChange={e=>{this.props.onChangeEducationHandler("endDate",e);}}
          ></input>
        </form>
        
       
      </div>
    );
  }
}
export default EducationForm;
