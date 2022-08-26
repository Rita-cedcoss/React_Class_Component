import React, { Component } from 'react'
import RightFirstComponent from './RightFirstComponent'
class RightComponent extends Component {
  render() {
    return (
      <div id="rightComponent">
      <RightFirstComponent></RightFirstComponent>
      </div>
    )
  }
}

export default RightComponent