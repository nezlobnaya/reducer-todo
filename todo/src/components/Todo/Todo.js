import React from 'react'

const Todo = ({item, completed, toggleTodo, id }) => {
    return (
        <li style={completed ? {textDecoration: 'line-through'} : {} }  onClick={() => toggleTodo(id)}>{item}</li>
    )
}

export default Todo;