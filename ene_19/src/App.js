import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleSelectItem } from './redux/actions';
import MyItem from './MyItem';
import './App.css'
class App extends Component {
  render(){
    
    return <div>
       <h1>Mi lista de la compra</h1>
       <ul>{this.props.items.map((element,i)=>{
          return <MyItem key={i} 
                    productName={element.name} 
                    productPrice={element.price}
                    productPicture={element.img}
                    productIsSelected={element.isSelected}
                    position={i} 
                    onToggleSelect={(pos)=>{
                      this.props.dispatch(toggleSelectItem(pos))
                    }}  />   
       })}</ul>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    ...state
  };
}

export default connect(mapStateToProps)(App);
