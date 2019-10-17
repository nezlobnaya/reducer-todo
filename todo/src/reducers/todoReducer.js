export const initialState = {
   item: '',
   todos: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
          }
    ]
}

export function todoReducer(state, action) {
    switch(action.type) {
        case 'ADD_TODO':
        return {...state,
            item: '',
            todos: state.todos.concat({item: action.payload, completed:false, id: Date.now() })};

        case 'TOGGLE_TODO':
        return {...state, todos: state.todos.map(todo => (
                todo.id === action.payload ? {...todo, completed: !todo.completed} : todo))};

        case 'INPUT_ITEM':
            return {...state,item: action.payload};
        
        case 'CLEAR_COMPLETED':
            return {...state,todos: state.todos.filter(todo => !todo.completed)}

        default:
            return state;
    }
}