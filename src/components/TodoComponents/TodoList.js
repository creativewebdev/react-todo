
import React from 'react'
import Todo from './Todo.js'

const styleTodo = {
    fontSize: '30px'
}

const TodoList = props => {
    console.log(props)
    console.log(props.items)
    return (
      <div style={styleTodo}>
        {props.items.map(todo => (
          <Todo style={styleTodo}
            handleComplete={props.handleComplete}
            key={todo.id}
            todo={todo.task}
            todoId={todo.id}
            todoCompleted={todo.completed}
          />
        ))}
      </div>
    );
  };
  
  


export default TodoList;