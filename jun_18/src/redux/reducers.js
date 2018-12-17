import {combineReducers} from 'redux';

function winnerReducer(state = 0, action = {}) {
 switch(action.type) {
   case "VOTE":
   return action.index;
   default:
   return state;
 }
}
function contestantsReducer(state = [], action = {}) {
 switch(action.type) {
   default:
   return state;
 }
}
const GlobalState = combineReducers({
  winner: winnerReducer,
  contestants: contestantsReducer
});

export default GlobalState;