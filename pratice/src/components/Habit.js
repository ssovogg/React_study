import React, { Component } from 'react';

class Habit extends Component {
  countUp = () => {
    this.props.onIncrement(this.props.habit);
  }
  countDown = () => {
    this.props.onDecrement(this.props.habit);
  }
  deleteHabit = () => {
    this.props.onDelete(this.props.habit);
  }

  render() {
    const {name, count} = this.props.habit;
    return (
      <li>
        <strong>{name} : </strong>
        <span>{count} </span>
        <button onClick={this.countUp}>+</button>
        <button onClick={this.countDown}>-</button>
        <button onClick={this.deleteHabit}>X</button>
      </li>
    );
  }
}

export default Habit;