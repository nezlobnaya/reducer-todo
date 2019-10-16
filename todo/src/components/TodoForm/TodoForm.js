import React from 'react'


const TodoForm = ({item, addTodo, clearCompleted, handleChange}) => {
  
    return ( 
        <form onSubmit={addTodo}> 
            <input type='text' value={item} onChange={handleChange} />
            <button type='submit'>Add a todo</button>
            <button onClick={clearCompleted}>Clear Completed</button>
        </form>
     );
}
 
export default TodoForm;