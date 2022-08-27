import React, { Component } from "react";
import moment from "moment";
class WorkDisplay extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="workDisplay">
        <span className="textContent dates">
          {moment(this.props.startDate).format("M-YYYY")}&nbsp;-&nbsp;
          {moment(this.props.endDate).format("M-YYYY")}
        </span>
        <div className="textContent">
          <strong>{this.props.nameOfCompany}</strong>
        </div>

        <div className="textContent">{this.props.responsibilities}</div>
      </div>
    );
  }
}
export default WorkDisplay;
