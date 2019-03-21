import React from 'react';
import './Todo.css'

const buttonStyle = {
borderRadius: 30,
height: 50,
width: '30%',
fontSize: 20,
background: 'none',
color: 'white',
margin: 5,
display: 'flex',
justifyContent: 'center',
border: 'none',
textShadow: '0px 1.5px 0px black',


}

const formStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textShadow: '0px 3px 0px gray',
}

const inputStyle = {
    
    height: '50px',
    width: '50%',
    fontSize: "35px",
    background: 'none',
    color: 'white',
    margin: '5px',
    display: 'flex',
    justifyContent: 'center',
    border: 'none',
    borderBottom: '2px solid white',
    fontFamily: 'ZCOOL XiaoWei',
    
    
    
    
    }
const TodoForm = props =>{
return (

<form style={formStyle}>
<input className="form" style={inputStyle}
        onChange = {props.handleTodoChange}
        type="text"
        name="todo"
        value={props.value}
        placeholder= "...to do"/>


        <button style={buttonStyle} onClick ={props.handleAddItems}>Add to List</button>
        <button style={buttonStyle} onClick={props.handleClearTodos}>Clear Completed</button>

</form>



);


};


export default TodoForm;