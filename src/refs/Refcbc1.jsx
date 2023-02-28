import React, { Component, createRef } from 'react'

export default class Refcbc1 extends Component {
    constructor(){
        super()
        this.state={company : "mahantesh"}
        this.divref=createRef()
        this.btnref=createRef()
    }
    handle=()=>{
        this.setState({company : "patil"})
        this.divref.current.style.color="yellow"
        this.divref.current.style.backGroundColor="black"
        this.divref.current.style.padding="10px"
        this.btnref.current.style.backGroundColor="red"


    }
  render() {
    return (
      <div>
        <h1 ref={this.divref}>{this.state.company}</h1>
        <button ref={this.btnref} onClick={this.handle}>change</button>
      </div>
    )
  }
}
