import { ADD_TODO, DELETE_TODO, STRIKE_TODO } from "./actionTypes";

const initialTodos = [{id: 1, title: "take out the trash", isCompleted: false}, {id: 2, title: "go take bath", isCompleted: false}];

function reducer(state = initialTodos, action){
    switch(action.type){
        case ADD_TODO: {
            return [ ...state, {id: state.length === 0 ? 1 : state[state.length-1].id + 1, title: action.title, isCompleted: false}];
        }
        case DELETE_TODO: {
            return state.filter(todo => todo.id != action.id);
        }
        case STRIKE_TODO: {
            return state.map(todo => todo.id === action.id ? { ...todo, isCompleted: !todo.isCompleted} : todo);
        }
        default: return state; 
    }
}

export default reducer;