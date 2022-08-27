import React, { Component } from "react";
class PersonalDisplay extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="personalDisplay">
        <div id="personalName">{this.props.name}</div>
        <div id="personalNumberEmail"><div className="textContent" id="personalEmail">{this.props.email}</div>
          &nbsp;-&nbsp;
          <div className="textContent" id="personalNumber">{this.props.number}</div>
        </div>
        <span className="displayTitle">{this.props.description!==""?<div className="displayTitle">Objective</div>:null}</span><div className="textContent" id="personalDescription">{this.props.description!==""?this.props.description:null}</div>
      </div>
    );
  }
}
export default PersonalDisplay;
