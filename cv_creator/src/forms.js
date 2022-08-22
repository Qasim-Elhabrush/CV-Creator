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
            <HonorsForm/>
            </div>
        )
    }
}
export default Forms