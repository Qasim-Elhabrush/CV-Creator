import './stylePersonal.css'
import React, { Component } from "react";
class PersonalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phoneNumber: "",
      email: "",
      description: "",
    };
  }
  render() {
    return (
      <div className='formContainer'>
        <div className="formTitle">Personal Details</div>
        <form id="personalForm">
          <input type="text" id="nameInput" placeholder="Name"></input>
          <input type="tel" id="phoneNumberInput" placeholder="Phone Number"></input>
          <input type="email" id="emailInput" placeholder="Email"></input>
          <textarea rows="5" id="descriptionInput" placeholder="Type a description of yourself, or a mission statement. (optional)"></textarea>
        </form>
      </div>
    );
  }
}
export default PersonalForm;
