import React, { Component } from 'react'
import LeftCompenent from './LeftCompenent'
import MiddleComponent from './MiddleComponent'
import RightComponent from './RightComponent'
import './Component.css'
class OuterComponent extends Component {
  render() {
    return (
      <div id="outer">
        <LeftCompenent></LeftCompenent>
        <MiddleComponent></MiddleComponent>
        <RightComponent></RightComponent>
      </div>
    )
  }
}

export default OuterComponent
