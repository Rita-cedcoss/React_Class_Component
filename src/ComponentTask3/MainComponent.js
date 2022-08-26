import React, { Component } from 'react'
import LeftComponent from './LeftComponent'
import MidComponent from './MidComponent'
import RightComponent from './RightComponent'
class MainComponent extends Component {
  render() {
    return (
      <div id="mainComponent">
         <LeftComponent></LeftComponent>
         <MidComponent></MidComponent>
         <RightComponent></RightComponent>
      </div>
    )
  }
}

export default MainComponent