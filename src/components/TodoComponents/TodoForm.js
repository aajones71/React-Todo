import React from "react";

class TodoForm extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      taskName: ""
    };
  }

  handleChanges = e => {
    // update state with each keystroke
    this.setState({
      taskName: e.target.value
    });
  };

  // class property to submit form
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.taskName !== "") {
      this.props.addTask(this.state.taskName);
      this.setState({
        taskName: ""
      });
    }
  };

  render() {
    console.log("rendering form");
    return (
      <form onSubmit={this.handleSubmit}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input
          onChange={this.handleChanges}
          type="text"
          name="task"
          value={this.state.taskName}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default TodoForm;
