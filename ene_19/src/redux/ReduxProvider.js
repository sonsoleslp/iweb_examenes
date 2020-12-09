import { Provider } from 'react-redux';
import GlobalState from './reducers';
import { createStore } from 'redux';

import React from 'react';
import App from '../App';

export default class ReduxProvider extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = { 
      items: [
        {name: "Coca-cola", price: 0.33, img: "https://www.superpizza.es/wp-content/uploads/2018/05/Coca-Cola-lata-33cl.jpg",    isSelected: false},
        {name: "Palomitas", price: 1.24, img: "http://puntotec.com/3641-thickbox_default/bol-para-palomitas-2-8-l.jpg", isSelected: false},
        {name: "Chocolate", price: 2.72, img: "https://img.huffingtonpost.com/asset/5b7d981c190000b606502692.jpeg?cache=Vbw27fsB2Q&ops=scalefit_720_noupscale",   isSelected: false},
        {name: "Ketchup",   price: 1.89, img: "https://www.coopathome.ch/img/produkte/300_300/RGB/3023987_001.jpg?_=1455446574308",   isSelected: false},
      ] };
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