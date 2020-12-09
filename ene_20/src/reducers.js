import { combineReducers } from 'redux';
import {ADD_PRODUCT, REMOVE_PRODUCT} from './actions';
function productsReducer(state = [], action = {}) {
switch(action.type) {
 case ADD_PRODUCT:
 	return state.map((product, index)=>{
 		return index === action.payload.index ? {...product, quantity: product.quantity + 1} : product;
 	});
 case REMOVE_PRODUCT:
 	return state.map((product, index)=>{
 		return index === action.payload.index ? {...product, quantity: Math.max(0,product.quantity - 1)} : product;
 	});
 default:
 	return state;
 }
}
const GlobalState = combineReducers({
 products: productsReducer
});
export default GlobalState;