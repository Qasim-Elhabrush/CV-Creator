import './stylePersonal.css'
import React, { Component } from "react";
class PersonalForm extends Component {
  constructor(props) {
    super(props); 



  }    
   

  render() {
    return (
      <div className='formContainer'>
        <div className="formTitle" >Personal Details</div>
        <form id="personalForm">
          <input value={this.props.state.personal.name} type="text" id="nameInput" placeholder="Name" onChange={e=>{this.props.personalEventHandler("name",e);}}></input>
          <input value={this.props.state.personal.phoneNumber} type="tel" id="phoneNumberInput" placeholder="Phone Number" onChange={e=>{this.props.personalEventHandler("phoneNumber",e)}}></input>
          <input value={this.props.state.personal.email} type="email" id="emailInput" placeholder="Email" onChange={e=>{this.props.personalEventHandler("email",e)}}></input>
          <textarea value={this.props.state.personal.description} rows="5" id="descriptionInput" placeholder="Write an objective statement (optional)" onChange={e=>{this.props.personalEventHandler("description",e)}}  ></textarea>
        </form>
      </div>
    );
  }
}
export default PersonalForm;
