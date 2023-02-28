import React, { Component, createRef } from 'react'

export default class Refcbc extends Component {
    constructor(){
        super()
            this.h1ref=createRef()
        
    }
  render() {
    return (
      <div>
<h1 ref={this.h1ref}>hello world</h1>
      </div>
    )
  }
}
