
import React from 'react'
import Todo from './Todo.js'

const styleTodo = {
    fontSize: '30px'
}

const TodoList = props => {
    return (
      <div style={styleTodo}>
        {props.items.map(todo => (
          <Todo style={styleTodo}
            handleToggleComplete={props.handleToggleComplete}
            key={todo.id}
            todo={todo.task}
          />
        ))}
      </div>
    );
  };
  
  


export default TodoList;