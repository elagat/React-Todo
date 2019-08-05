import React from 'react';
import TodoList from './components/TodoComponents/TodoList';

const todosData = [
  {
    task: '1st Todo Item',
    id: Date.now(),
    completed: false
  },
  {
    task: '2nd Todo Item',
    id: Date.now(),
    completed: false
  },
  {
    task: '3rd Todo Item',
    id: Date.now(),
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todos: todosData
    };
  }

  toggleTodo = id => {
    console.log(id);
    this.setState({
      todos: this.state.todosData.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      })
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
          todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
