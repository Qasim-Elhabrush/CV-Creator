import React,{Component} from 'react'
class EducationDisplay extends Component{
    constructor(props){
        super(props)
        


    }
    render(){
        return(<div id="educationDisplay">
            <div>Name of School: {this.props.nameOfSchool}</div>
            <div>Major: {this.props.major}</div>
            <div>GPA : {this.props.gpa}</div>
            <div>Start Date: {this.props.startDate}</div>
            <div>End Date: {this.props.endDate}</div>         
        </div>)
    }
}
export default EducationDisplay