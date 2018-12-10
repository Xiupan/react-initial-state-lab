import React, { Component } from 'react';

export class Bomb extends Component {
  constructor(props){
    super(props)
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  bombLogic = () => {
    if (this.state.secondsLeft === 0) {
      return (
        <div>Boom!</div>
      )
    } else {
      return (
        <div>{this.state.secondsLeft} seconds left before I go boom!</div>
      )
    }
  }

  render(){
    return (
      <div>{this.bombLogic()}</div>
    )
  }
}
