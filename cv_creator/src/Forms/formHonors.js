import React, { Component } from "react";
import "./honorStyle.css";
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
          ></input>

          <label>Date Received</label>
          <input type="month" id="honorReceivedDate"></input>
          <textarea
            type="text"
            id="honorDescription"
            placeholder="Description of Award"
          ></textarea>
        </form>
      </div>
    );
  }
}
export default HonorsForm;
