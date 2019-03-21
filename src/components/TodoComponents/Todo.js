import React from 'react'



const Todo = props => {
    console.log("props" ,props.todo)
    console.log("propsid",props.todoId);
    console.log(props.todoCompleted)
    return(
    <div style={props.todoCompleted ? { textDecoration: 'line-through', } : null}
        onClick={() => props.handleComplete(props.todoId)}>
    {props.todo}
    </div>
    );
};



export default Todo;