import { Provider } from 'react-redux';
import GlobalState from './reducers';
import { createStore } from 'redux';

import React from 'react';
import App from '../App';

export default class ReduxProvider extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = {  todos: [
     {text: "Comprar naranjas", completed: true},
     {text: "Poner la lavadora", completed: false}
     ]};
    this.store = this.configureStore();
  }

  render() {

    return (
        <Provider store={ this.store }>
          <div style={{ height: '100%' }} >
            <App store={ this.store } />
          </div>
        </Provider>
    );
  }

  configureStore() {
    return createStore(GlobalState, this.initialState);
      
  }
}