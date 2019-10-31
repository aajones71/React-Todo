import React from 'react';
import Todo from "./components/TodoComponents/Todo";
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
     todo: data
    };
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <Todo todo={this.state.task} />
        <TodoList />
        <TodoForm />
      </div>
    );
  }
}

export default App;
