import React from 'react'


const TodoForm = ({item, addTodo, clearCompleted, handleChange}) => {
  
    return ( 
      <div className='todoListMain'>
        <h1>My Todos</h1>
       <div className='header'>
        <form onSubmit={addTodo}> 
            <input type='text' value={item} onChange={handleChange} />
            <button type='submit'>Add a todo</button>
            <button onClick={clearCompleted}>Clear Completed</button>
        </form>
       </div>
      </div>
     );
}
 
export default TodoForm;