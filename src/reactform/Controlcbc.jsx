import React, { Component } from 'react'

export default class Controlcbc extends Component {
  constructor(){
    super()
    this.state={username:"",password:""}
  }
  handlesubmit=(e)=>{
e.preventDefault()
let username=this.state.username
let password=this.state.password
console.log({username,password});
  }
  render() {
    return (
      <div><form action="">
        <label htmlFor="username">username</label><br />
        <input type="text" id='username' onChange={(e)=>{this.setState({username:e.target.value})}} /><br />
        <label htmlFor="password">password</label><br />
        <input type="password" id='password' onChange={(e)=>{this.setState({password:e.target.value})}}/><br />
        <button onClick={this.handlesubmit}>submit</button>
        </form></div>
    )
  }
}
