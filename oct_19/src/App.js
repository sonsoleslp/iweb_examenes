import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import ShoppingItem from './ShoppingItem';
import {toggleSaleFilter} from './actions';
function App(props) {
  return (<div className="App"><h1>Productos</h1>
    {props.products.filter(product => props.saleFilter ? product.sale : true).map((product, index) => {
      let {productPicture, productName, productPrice, sale} = product;
      return <ShoppingItem key={index} url={productPicture} name={productName} price={productPrice} isOnSale={sale}/>
    })}
    <button onClick={() => props.dispatch(toggleSaleFilter())}>{props.saleFilter ? "SEE ALL":"ONLY SALE"}</button>
  </div>);
}
function mapStateToProps(state) { return { ...state }; }
export default connect(mapStateToProps)(App);