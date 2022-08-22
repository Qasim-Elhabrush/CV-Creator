import React,{Component} from 'react'
import './styleEducation.css'
class EducationForm extends Component{
    constructor(props){
        super(props)
        


    }
    render(){
        return(
            <div className="formContainer">
            <div className='formTitle'>Education</div>
            <form id="educationForm">
              <input type="text" id="nameOfSchoolInput" placeholder="Name of School or Program"></input>
              <input type="text" placeholder='Major - (ex. B.S Psychology)'></input>
              <input type="text" id="GPA" placeholder="GPA(optional)"></input>
              <label>Start Date</label>  
              <input type="month" id="EducationStartDateInput"></input>
              <label>End Date</label>
              <input type="month" id="EducationEndDateInput"></input>            
            </form>
          </div>
        )
    }
}
export default EducationForm