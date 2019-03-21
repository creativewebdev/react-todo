import React from 'react'

const Todo = props => {
    return(
    <div style={props.todo.completed ? { textDecoration: 'line-through' } : null}
        onClick={(props) => props.handleToggleComplete(props.todo.id)}>
    {props.todo}
    </div>
    );
};



export default Todo;