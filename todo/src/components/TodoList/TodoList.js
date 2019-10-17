import React from 'react';
import Todo from '../Todo/Todo';

const TodoList = ({ todos, toggleTodo }) => {
    return (
        <ul className='theList'>
            {todos.map(todo => (
                <Todo key={todo.id} {...todo} toggleTodo={toggleTodo} />
            ))}
        </ul>
    )
}

export default TodoList;
