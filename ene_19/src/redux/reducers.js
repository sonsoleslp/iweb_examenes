import {combineReducers} from 'redux';
 
function itemsReducer(state = [], action = {}) {
   switch(action.type) { 
       case 'TOGGLE_SELECT_ITEM' :
           return state.map((item,i) => {
            return {...item, isSelected: action.payload.index === i ? !item.isSelected : item.isSelected };
           })
       default:
           return state;
   }
}

const GlobalState = combineReducers({
  items: itemsReducer
});

export default GlobalState;