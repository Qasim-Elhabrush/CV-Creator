import React,{Component} from 'react'
import moment from 'moment'
class HonorsDisplay extends Component{
    constructor(props){
        super(props)
        


    }
    render(){
        return(<div id="honorsDisplay">
            <div className="textContent"><strong>{this.props.nameOfAward}</strong></div>
            <div className="textContent dates">{moment(this.props.dateReceived).format("M-YYYY")}</div>
            <div className="textContent">{this.props.description}</div>
            


        </div>)
    }
}
export default HonorsDisplay