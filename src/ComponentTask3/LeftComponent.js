import React, { Component } from 'react'
import LeftFirstComponent from './LeftFirstComponent'
import Left2Component from './Left2Component'
class LeftComponent extends Component {
  render() {
    return (
      <div id="left">
       <LeftFirstComponent></LeftFirstComponent>
       <Left2Component></Left2Component>
      </div>
    )
  }
}
export default LeftComponent