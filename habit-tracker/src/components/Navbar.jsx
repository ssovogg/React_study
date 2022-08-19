import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <header className='navbar'>
        <i className='navbar-logo fa-solid fa-location-crosshairs'></i>
        <span>Habit Tracker</span>
        <span className="navbar-count">{this.props.totalCount}/{this.props.habitsCount}</span>
      </header>
    );
  }
}

export default Navbar;