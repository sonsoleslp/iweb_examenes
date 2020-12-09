import { Provider } from 'react-redux';
import GlobalState from './reducers';
import { createStore } from 'redux';

import React from 'react';
import App from './App';

export default class ReduxProvider extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = {
      "products": [{
       "name":"Bag",
       "price": 34.99,
       "quantity":4,
       "imgUrl":"http://ecommerce.es/8erw.png"
      },{
       "name":"Book",
       "price": 3.25,
       "quantity":8,
       "imgUrl":"http://ecommerce.es/7y4lp.png"
      },{
       "name":"Pencil",
       "price": 0.85,
       "quantity":9,
       "imgUrl":"http://ecommerce.es/3ud9f.png"
    }]};
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
