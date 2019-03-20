import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm.js';
import TodoList from './components/TodoComponents/TodoList.js';

const todo =  [
  {
    task: 'Laundry',
    id: 123456789
  
  }
];
class App extends React.Component {
  constructor(){
    super();
  
    this.state = {
      items: todo,
      todo: ''
    };
};

  addItems = event => {
    event.preventDefault();

    const newTodo = {job: this.state.todo, id: Date.now() };

    this.setState({
      items: [...this.state.items, newTodo],
      todo: ''
    });
  };

  changeTodo = event => this.setState(
    { [event.target.name]: event.target.value});

  render() {
    return (
      <div>
        <h1>What do you need To Do?</h1>
      
        
        
        <TodoForm           
              value={this.state.todo}
              handleTodoChange={this.changeTodo}
              handleAddItems={this.addItems}
            />

        <TodoList items={this.state.items} />
        
      </div>
    );
  }
};

export default App;
