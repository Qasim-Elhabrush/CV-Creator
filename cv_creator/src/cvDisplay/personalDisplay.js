import React,{Component} from 'react'
class PersonalDisplay extends Component{
    constructor(props){
        super(props)
        


    }
    render(){
        return(<div id="personalDisplay">
            <div>Name : {this.props.name}</div>
            <div>Phone Number: {this.props.number}</div>
            <div>Email: {this.props.email}</div>      
            <div>description: {this.props.description}</div>
        </div>)
    }
}
export default PersonalDisplay