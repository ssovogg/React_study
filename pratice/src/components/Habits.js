import React, { Component } from "react";
import Habit from "./Habit";

class Habits extends Component {
  state = {
    habits: this.props.habits,
  }

  countUp = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({habits});
  }
  countDown = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;
    this.setState({habits});
  }
  deleteHabit = (habit) => {
    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({habits});
  }

  render() {
    return (
      <ol>
        {this.props.habits.map((habit) => (
          <Habit 
            key={habit.id} 
            habit={habit} 
            onIncrement={this.countUp}
            onDecrement={this.countDown}
            onDelete={this.deleteHabit} />
        ))}
      </ol>
    );
  }
}

export default Habits;
