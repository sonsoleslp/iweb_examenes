import {combineReducers} from 'redux';
 
function numberReducer(state = 0, action = {}) {
   switch(action.type) { 
       case 'DOUBLE_ACTION' :
           return state*2;
       case 'HALF_ACTION' :
           return state / 2;
       case 'RESET_ACTION':
            return 1;
       default:
           return state;
   }
}

const GlobalState = combineReducers({
  number: numberReducer
});

export default GlobalState;