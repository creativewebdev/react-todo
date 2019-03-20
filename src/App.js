import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  constructor(){
    super();
  

  this.state = {todoItems[]} 

  };

  addItem = event => {
    event.preventDefault();
    const newTodo = {item: this.state.todo, id: Date.now() };

    this.setState()
  }

  
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>What do you need To Do?</h2>
        <TodoList />
        <TodoForm />
      </div>
    );
  }
}

export default App;
