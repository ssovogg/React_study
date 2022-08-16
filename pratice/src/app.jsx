import React, { Component } from "react";
import AddHabit from "./components/AddHabit";
import Habits from "./components/Habits";

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Drawing", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  addedHabit = (text) => {
    const num = 4;
    const habits = [...this.state.habits, { id: num, name: text, count: 0 }];
    this.setState({ habits });
  };

  resetAll = () => {
    this.setState({ habits: [] });
  };

  render() {
    return (
      <div>
        <AddHabit habits={this.state.habits} onSubmit={this.addedHabit} />
        <Habits habits={this.state.habits} />
        <button onClick={this.resetAll}>Reset All</button>
      </div>
    );
  }
}

export default App;
