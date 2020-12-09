import { combineReducers } from 'redux';   

function productsReducer(state = [], action={}) {
	switch(action.type){
		default:
			return state;
	}

}

const GlobalState = combineReducers({ 
  products: productsReducer
});

export default GlobalState;
