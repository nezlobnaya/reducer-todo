import React, {useReducer} from 'react';
import {todoReducer, initialState} from './reducers/index';
import './App.css';
import TodoList from './components/TodoList/TodoList';


function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  console.log('our state', state)
  return (
    <div className="App">
      <h1>My Todos</h1>
      <TodoList todos={state}/>

    </div>
  );
}

export default App;
