import React,{Component} from 'react'
class HonorsDisplay extends Component{
    constructor(props){
        super(props)
        


    }
    render(){
        return(<div id="honorsDisplay">
            <div>Name of Honor or Award: {this.props.nameOfAward}</div>
            <div>Date Received: {this.props.dateReceived}</div>
            <div>Description of Award: {this.props.description}</div>
            


        </div>)
    }
}
export default HonorsDisplay