import {combineReducers} from 'redux';

function todosReducer(state=[], action={}){
  switch(action.type){
    // Código aquí
  }
}

const GlobalState = combineReducers({
  todos: todosReducer
});

export default GlobalState;