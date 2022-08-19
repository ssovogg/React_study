import React, { PureComponent } from "react";

class HabbitAddForm extends PureComponent {
  formRef = React.createRef();
  inputRef = React.createRef(); // -> ref 오브젝트 생성

  onSubmit = (e) => {
    e.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name); // name이 있다면 props의 onAdd함수에 name 전달
    // this.inputRef.current.value = '';
    this.formRef.current.reset();
  };

  render() {
    return (
      <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          className="add-input"
          type="text"
          placeholder="Habit"
        />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabbitAddForm;
