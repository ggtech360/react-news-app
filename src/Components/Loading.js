import React, { Component } from 'react'
import gif from './1495.gif'

export class Loading extends Component {
  render() {
    return (
      <div className='text-center my-3'>
        <img src={gif} alt="loading"/>
      </div>
    )
  }
}

export default Loading
