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

    renderCurrentPage(){
        const formMap = {
            1: <PersonalForm state={this.props.state} personalEventHandler = {this.props.personalEventHandler}/>,
            2: <EducationForm state={this.props.state}/>,
            3:<WorkExperienceForm state={this.props.state}/>,
            4:<HonorsForm state={this.props.state}/>
        }
        return formMap[this.props.state.currentForm];
    }


    render(){
        return(
            <div id="formsContainer">
                {this.renderCurrentPage()}            
            </div>
        )
    }
}
export default Forms