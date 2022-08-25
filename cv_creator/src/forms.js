import './formsStyle.css'
import React,{Component} from 'react'
import PersonalForm from './Forms/formPersonal'
import EducationForm from './Forms/formEducation'
import WorkExperienceForm from './Forms/formWork'
import HonorsForm from './Forms/formHonors'
class Forms extends Component{
    constructor(props){
        super(props)

     

           
        
    }


    render(){
        return(
            <div id="formsContainer">
            <PersonalForm state={this.props.state} personalEventHandler = {this.props.personalEventHandler}/>
            <EducationForm state={this.props.state} addEducationObject = {this.props.addEducationObject} onChangeEducationHandler={this.props.onChangeEducationHandler}/>
            <WorkExperienceForm state={this.props.state}/>
            <HonorsForm state={this.props.state}/> 
            </div>
        )
    }
}
export default Forms