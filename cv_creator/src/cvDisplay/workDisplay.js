import React,{Component} from 'react'
class WorkDisplay extends Component{
    constructor(props){
        super(props)
        


    }
    render(){
        return(<div id="workDisplay">
            <div>{this.props.nameOfCompany}</div>
            <div>{this.props.startDate}</div>
            <div>{this.props.endDate}</div>
            <div>{this.props.responsibilities}</div>
        </div>)
    }
}
export default WorkDisplay