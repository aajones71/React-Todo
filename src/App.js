import React from 'react';
// import Todo from "./components/TodoComponents/Todo";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm"

const data = [
  {
    task: 'Grocery Shopping',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Cook Dinner',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
     todo: data,
     otherState: "this other state"
    };

    this.toggleDone = this.toggleDone.bind(this);
  }
  toggleDone(taskId) {
    console.log("toggleDone: ", taskId);

  this.setState({
    todo: this.state.todo.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          done: !task.done
        };
      }
      return task;
    })
  });
  }

clearTask = () => {
  console.log("clearTask");
  this.setState({
    todo: this.state.todo.filter(task => {
      return !task.done;
    })
  });
};

addTask = taskName => {
  console.log("add task: ", taskName);

  this.setState({
    todo: [
      ...this.state.todo,
      {
        name: taskName,
        id: Date.now(),
        purchased: false
      }
    ]
  });
}
  render() {
    console.log("rendering...");
    return (
      <div className="App">
        <div className="header">
          <h1>Todo List</h1>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
          todo={this.state.todo}
          toggleDone={this.toggleDone}
          clearTask={this.clearTask}
        />
       
      </div>
    );
  }
}

export default App;
