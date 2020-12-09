import React, { Component } from 'react';
import { connect } from 'react-redux';
import { halfAction, doubleAction, resetAction } from './redux/actions';
import CustomButton from './CustomButton';
class App extends React.Component {
  render(){
    let myButtons = [
     {
          name: "Half",
          callback: ()=>this.props.dispatch(halfAction())
     },
     {   
          name: "Double",
          callback: ()=>this.props.dispatch(doubleAction())
     },
     {
          name: "Reset",
          callback: ()=>this.props.dispatch(resetAction())
     },
     // ...
   ];

    return <div>
      <h1>My app</h1>
      <h2>{this.props.number}</h2>
      <div>
        {myButtons.map((button, i)=>
           <CustomButton
              index={i+1} 
              buttonName={button.name} 
              buttonFunction={button.callback} 
              key={i} />)}
      </div>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    number: state.number
  };
}

export default connect(mapStateToProps)(App);
