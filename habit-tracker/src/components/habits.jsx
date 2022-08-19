import React, { Component } from "react";
import HabbitAddForm from "./HabbitAddForm";
import Habit from "./habit";

class Habits extends Component {
  render() {
    return (
      <>
        <HabbitAddForm onAdd={(name) => this.props.onAdd(name)} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={(habit) => this.props.onIncrement(habit)}
              onDecrement={(habit) => this.props.onDecrement(habit)}
              onDelete={(habit) => this.props.onDelete(habit)}
            />
          ))}
        </ul>
        <button className="habits-reset" onClick={this.props.onReset}>Reset All</button>
      </>
    );
  }
}

export default Habits;
