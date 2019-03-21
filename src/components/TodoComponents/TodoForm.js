import React from 'react';

const TodoForm = props =>{
return (

<form>
<input 
        onChange = {props.handleTodoChange}
        type="text"
        name="todo"
        value={props.value}
        placeholder="need to do?"/>

        
        <button onClick ={props.handleAddItems}>Add to List</button>

</form>



);


};


export default TodoForm;