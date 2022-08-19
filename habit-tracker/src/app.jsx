import React, { Component } from "react";
import "./app.css";
import Habits from "./components/habits";
import Navbar from "./components/Navbar";

class app extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit); // habit이 몇번째 인덱스에 있는지 확인
    habits[index].count++; // 처음 선언한 state의 date를 직접적으로 수정하지 않는다.
    this.setState({ habits }); // key: value - 동일하면 하나만 써도 됨
  };
  handldDecrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;
    this.setState({ habits });
  };
  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };

  handleAdd = (name) => {
    const habits = [
      ...this.state.habits,
      { id: Date.now(), name, count: 0 },
    ];
    this.setState({habits});
  };

  handleReset = () => {
    const habits = [...this.state.habits.map(habit => {
      habit.count = 0;
      return habit;
    })]
    this.setState({habits});
  };

  render() {
    return (
      <>
        <Navbar
          totalCount={this.state.habits.filter((item) => item.count > 0).length}
          habitsCount={this.state.habits.length}
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handldDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default app;
