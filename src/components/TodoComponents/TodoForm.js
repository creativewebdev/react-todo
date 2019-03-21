import React from 'react';

const buttonStyle = {
borderRadius: 30,
height: 50,
width: '25%',
fontSize: 20,
background: 'none',
color: 'white',
margin: 5,
display: 'flex',
justifyContent: 'center',
border: 'none',


}

const formStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

const inputStyle = {
    
    height: '50px',
    width: '50%',
    fontSize: 50,
    background: 'none',
    color: 'white',
    margin: '5px',
    display: 'flex',
    justifyContent: 'center',
    border: 'none',
    borderBottom: '2px solid white'
    
    
    
    
    }
const TodoForm = props =>{
return (

<form style={formStyle}>
<input style={inputStyle}
        onChange = {props.handleTodoChange}
        type="text"
        name="todo"
        value={props.value}
        placeholder="need to do?"/>


        <button style={buttonStyle} onClick ={props.handleAddItems}>Add to List</button>
        <button style={buttonStyle} onClick={props.handleClearTodos}>Clear Completed</button>

</form>



);


};


export default TodoForm;