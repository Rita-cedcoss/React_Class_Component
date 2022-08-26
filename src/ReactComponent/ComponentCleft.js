import React, { Component } from 'react'
import ComponentCleft1 from './ComponentCleft1'
class ComponentCleft extends Component {
  render() {
    return (
    <>
      <div className='left'>Component
      <ComponentCleft1></ComponentCleft1>
      <ComponentCleft1></ComponentCleft1>
      </div>

      </>

    )
  }
}

export default ComponentCleft