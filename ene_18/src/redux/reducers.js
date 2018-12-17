import {combineReducers} from 'redux';

function todosReducer(state=[], action={}){
  switch(action.type){
    case "TOGGLE_TODO":
      return state.map((todo, index) =>
        action.index === index ? {text:todo.text, completed:!todo.completed} : todo
        );
    default:
      return state;
  }
}

const GlobalState = combineReducers({
  todos: todosReducer
});

export default GlobalState;