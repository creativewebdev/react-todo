import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm.js';
import TodoList from './components/TodoComponents/TodoList.js';
import moment from 'moment';


const divStyle = {
      boxSizing: 'border-box',
      backgroundImage: "url('./landscape-2278315_1280.jpg')", backgroundPosition: 'center',
      
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: '100vh',
      paddingTop:'70px',
      fontFamily: 'ZCOOL XiaoWei', 
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textShadow: '0px 1.5px 0px black',
     
};


const headingStyle = {
  fontSize: '45px',
  margin: '10px'
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

    
    toggleComplete = todoId => {
      console.log(todo.id)
      const newItems = this.state.items.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      });
    
      this.setState({items: newItems });
    }



    clearCompletedTodos = event => {
      event.preventDefault();
      let items = this.state.items.filter(todo => !todo.completed);
      this.setState({ items });
    };


  render() {
    return (
      <div style={divStyle}>
        <h2 style={headingStyle}>It's {moment().format('MMMM Do')}</h2>
        <h1 style={headingStyle}>What Do You Need To Get Done Today?</h1>
        <p>Click On the Item to Mark it Complete</p>
        
        <TodoForm  
                     
              value={this.state.todo}
              handleTodoChange={this.changeTodo}
              handleAddItems={this.addItems}
              handleClearTodos={this.clearCompletedTodos}
            />

        <TodoList items={this.state.items} handleComplete={this.toggleComplete} />
        
      </div>
    );
  }
};



export default App;
