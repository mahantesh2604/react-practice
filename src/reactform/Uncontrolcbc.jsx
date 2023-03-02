import React, { Component,createRef,useRef } from 'react'

export default class Uncontrolcbc extends Component {
    constructor(){
        super()
        this.userRef=createRef()
        this.passRef=createRef()
    }
    handlesubmit=(e)=>{
        e.preventDefault()
        let username=this.userRef.current.value
        let password=this.passRef.current.value
        console.log({username,password})

    }

  render() {
    return (
      <div><form action="">
        <br />
        <label htmlFor="username">username</label>
        <br />
        <input type="text" id='username' ref={this.userRef}/>
        <br />
        <label htmlFor="password">password</label>
        <br />
        <input type="password" id='password' ref={this.passRef}/>
        <br />
        <button onClick={this.handlesubmit}>submit</button>
        </form></div>
    )
  }
}
