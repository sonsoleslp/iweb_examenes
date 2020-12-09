import {combineReducers} from 'redux';

function convertedReducer(state = 0, action = {}) {
   switch(action.type) { 
       case 'SQRT' :
           return Math.sqrt(action.payload.number);
       default:
           return state;
   }
}


function userInputReducer(state = 0, action = {}) {
   switch(action.type) { 
       case 'SQRT' :
           return action.payload.number;
       default:
           return state;
   }
}

const GlobalState = combineReducers({
  userInput: userInputReducer,
  converted: convertedReducer
});

export default GlobalState;