import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm.js';
import TodoList from './components/TodoComponents/TodoList.js';
import { deflateRawSync } from 'zlib';

const divStyle = {
      boxSizing: 'border-box',
      backgroundImage: "url('https://cdn.pixabay.com/photo/2017/05/02/14/35/landscape-2278315_1280.jpg')", backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: '100vh',
      paddingTop:'70px',
      fontFamily: 'Cantarell', 
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      
  
};

const headingStyle = {
  fontSize: '45px'
}

const todo =  [];
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

    const newTodo = {task: this.state.todo, completed: false, id: Date.now() };

    this.setState({
      items: [...this.state.items, newTodo],
      todo: ''
    });
  };

  changeTodo = event => this.setState(
    { [event.target.name]: event.target.value});

    toggleTodoComplete = id => {
      let items = this.state.items.slice();
      items = items.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
          return todo;
        } else {
          return todo;
        }
      });
      this.setState({ items });
    };
  
    clearCompletedTodos = event => {
      event.preventDefault();
      let items = this.state.items.filter(todo => !todo.completed);
      this.setState({ items });
    };

  render() {
    return (
      <div style={divStyle}>
        <h1 style={headingStyle}>What Do You Need To Get Done Today?</h1>
        
        <TodoForm          
              value={this.state.todo}
              handleTodoChange={this.changeTodo}
              handleAddItems={this.addItems}
              handleClearTodos={this.clearCompletedTodos}
            />

        <TodoList items={this.state.items} handleToggleComplete={this.toggleTodoComplete} />
        
      </div>
    );
  }
};

export default App;
