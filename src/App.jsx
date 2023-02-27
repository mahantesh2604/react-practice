import React,{Component} from "react";
import JSON from "./task.json"
import Employee from "./Employee.jsx"
export default class App extends Component{
    constructor(){
        super()
        this.state={empDetail:JSON}
    }
    render(){
        return(
            <div>
                <Employee empDetail ={this.state.empDetail}/>
            </div>
        )
    }
}