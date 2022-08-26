import React,{Component} from 'react'
class WorkDisplay extends Component{
    constructor(props){
        super(props)
        


    }
    render(){
        return(<div id="workDisplay">
            <div>Name of company: {this.props.nameOfCompany}</div>
            <div>start date: {this.props.startDate}</div>
            <div>end date: {this.props.endDate}</div>
            <div>responsibilities: {this.props.responsibilities}</div>
        </div>)
    }
}
export default WorkDisplay