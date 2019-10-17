import React, {useReducer} from 'react';
import {todoReducer, initialState} from './reducers/todoReducer';
import './App.css';
import TodoList from './components/TodoList/TodoList';
import TodoForm from './components/TodoForm/TodoForm';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  console.log('our state', state)

  const addTodo = event => {event.preventDefault();dispatch({type: 'ADD_TODO',payload: state.item})};
  const handleChange = event => dispatch({type: 'INPUT_ITEM',payload: event.target.value});
  const toggleTodo = id => dispatch({ type: "TOGGLE_TODO", payload: id });
  const clearCompleted = event => {event.preventDefault();dispatch({type: 'CLEAR_COMPLETED'})}

  return (
    <div className="App">
      <TodoList todos={state.todos} toggleTodo={toggleTodo}/>
      <TodoForm addTodo={addTodo}
          handleChange={handleChange} item={state.item}
          clearCompleted={clearCompleted} />
    </div>
  );
}

export default App;
