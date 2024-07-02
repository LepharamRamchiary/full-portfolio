import React, { Component } from 'react'
import "./HerobgStyle.css"

class Herobg extends Component {
  render() {
    return (
      <div className='hero-img'>
        <div className='heading'>
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    )
  }
}

export default Herobg