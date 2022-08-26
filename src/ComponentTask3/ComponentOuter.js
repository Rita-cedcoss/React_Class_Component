import React, { Component } from 'react'
import './Component.css'
import ComponentNav from './ComponentNav'
import MainComponent from './MainComponent'
export class ComponentOuter extends Component {
  render() {
    return (
      <div id="outer">
      <ComponentNav></ComponentNav>
      <MainComponent></MainComponent>
      </div>
    )
  }
}

export default ComponentOuter