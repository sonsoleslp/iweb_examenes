import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sqrt } from './redux/actions';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
         <h1>S Q R T</h1>
         <input type="number"  
             value={this.props.userInput}
             onChange={(e)=>{
              this.props.dispatch(sqrt(parseInt(e.target.value)));
             }} 
               />
         <p>{this.props.converted}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state
  };
}

export default connect(mapStateToProps)(App);
