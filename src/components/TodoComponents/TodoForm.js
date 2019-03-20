import React from 'react';

const TodoForm = props =>{
return (
<div>
<form>
<input 
        onChange = {props.handleTodoChange}
        type="text"
        name="todoitem"
        value="{props.value}"
        placeholder="need to do?"/>

</form>
<button onClick ={props.handleAddItem}>Add to List</button>
<button> Clear List </button>
</div>
);


};


export default TodoForm;