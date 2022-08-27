import React, { Component } from "react";
import moment from "moment";
class EducationDisplay extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="educationDisplay">
        <span className="textContent dates">
          {moment(this.props.startDate).format("M-YYYY")}&nbsp;-&nbsp;
          {moment(this.props.endDate).format("M-YYYY")}
        </span>
        <div className="textContent" id="nameOfSchool">
          <strong>{this.props.nameOfSchool}</strong>
        </div>
        <div className="textContent"><em>{this.props.major}</em></div>
        <div className="textContent">GPA : {this.props.gpa}</div>
      </div>
    );
  }
}
export default EducationDisplay;
