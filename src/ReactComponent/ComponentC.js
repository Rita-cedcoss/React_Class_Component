import React, { Component } from 'react'
import ComponentCleft from './ComponentCleft'
import ComponentCright from './ComponentCright'
class ComponentC extends Component {
  render() {
    return (
      <div id="main">
    <ComponentCleft>
    </ComponentCleft>
    <ComponentCright></ComponentCright>
      </div>
    )
  }
}

export default ComponentC