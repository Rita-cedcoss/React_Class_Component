import React, { Component } from 'react'
import './component.css'
import ComponentB from './ComponentB'
import ComponentC from './ComponentC'
class ComponentA extends Component {
  render() {
    return (
      <div id="outer">Component
        <ComponentB></ComponentB>
        <ComponentC></ComponentC>
      </div>
    )
  }
}

export default ComponentA