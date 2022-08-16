import React, { Component } from 'react';

class AddHabit extends Component {
  state = {
    count : this.props.habits.length,
    text : '',
  }
  
  handleText = (e) => {
    this.setState({text: e.target.value});
  }

  handleTraker = (e) => {
    e.preventDefault();
    if(this.state.text === ''){return;}
    this.props.onSubmit(this.state.text);
    this.setState({count: this.props.habits.length});
  };

  render() {
    return (
      <form onSubmit={this.handleTraker}>
        <h1>
          <span>Habit Tracker : </span>
          <span>{this.state.count}</span>
        </h1>
        <input type="text" value={this.state.text} onChange={this.handleText}/>
        <input type="submit" value="add" />
      </form>
    );
  }
}

export default AddHabit;