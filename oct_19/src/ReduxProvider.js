import { Provider } from 'react-redux';
import GlobalState from './reducers';
import { createStore } from 'redux';

import React from 'react';
import App from './App';
import initialState from "./initialState";

export default class ReduxProvider extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = {...initialState, saleFilter: null};
    this.store = this.configureStore();
  }

  render() {
    return (
        <Provider store={ this.store }>
          <div style={{ height: '100%' }} >
            <App />
          </div>
        </Provider>
    );
  }

  configureStore() {
    return createStore(GlobalState, this.initialState);    
  }
}
