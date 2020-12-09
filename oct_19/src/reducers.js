import { combineReducers } from 'redux';   

function productsReducer(state = [], action={}) {
	switch(action.type){
		default:
			return state;
	}

}

function saleFilter(state = false, action){
switch(action.type){
	case "TOGGLE_SALE_FILTER":
		return !state;
	default:
		return state;
	}
}

const GlobalState = combineReducers({ 
  products: productsReducer,
  saleFilter: saleFilter
});

export default GlobalState;
