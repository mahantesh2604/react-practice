import React,{Component} from "react";
import json  from './task.json'
import "./global.css";
export default class Counter extends Component{
    constructor()
    {
        super()
        this.state={count:0}
    }
    handleIncreament=()=>{
        this.setState({count:this.state.count+1})
    }
    handleDecreament=()=>{
        this.setState({count:this.state.count-1})
    }
    reset=()=>{
        this.setState({count:0})
    }
    render(){
    return(
        <div>
        <h1> {this.state.count}</h1>
        <button onClick={this.handleIncreament}>increaments</button>
        <button onClick={this.handleDecreament}>decreaments</button>
        <button onClick={this.reset}>reset</button></div>
    )
}}

// constructor()
// {
//     super()
//         this.state={data:json}
    
// }
// change=()=>{
//     this.setState({data:this.state.data})
// }
// reset=()=>{
//     this.setState({data:this.state.data})
// }
// render(){


// data.map((x)=>{
//     return (
//         <div>
//             <h1>{this.state.x}</h1>
//             <button onClick={this.change}> change</button>
//             <button onClick={this.reset}> reset</button>
//         </div>
//     )
// })
// }}







// {
//     return(
//         <div>
//             <h1>{this.state.data}</h1>
//             <button onClick={this.change}> change</button>
//             <button onClick={this.reset}> reset</button>
//         </div>
//     )
// }

// }}
