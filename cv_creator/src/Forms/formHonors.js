import React, { Component } from "react";
import "./styleHonors.css";
class HonorsForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="formContainer">
        <div className="formTitle">Honors and Awards</div>
        <form id="honorsForm">
          <input
            type="text"
            id="honorName"
            placeholder="Name Honor or Award"
            value={this.props.state.honorsAwards.awardName}
            onChange={(e) => {
              this.props.honorsAwardsEventHandler("awardName", e);
            }}
          ></input>

          <label>Date Received</label>
          <input
            type="month"
            id="honorReceivedDate"
            value ={this.props.state.honorsAwards.dateReceived}
            onChange={(e) => {
              this.props.honorsAwardsEventHandler("dateReceived", e);
            }}
          ></input>
          <textarea
            type="text"
            id="honorDescription"
            placeholder="Description of Award"
            value ={this.props.state.honorsAwards.description}
            onChange={(e) => {
              this.props.honorsAwardsEventHandler("description", e);
            }}
          ></textarea>
        </form>
      </div>
    );
  }
}
export default HonorsForm;
