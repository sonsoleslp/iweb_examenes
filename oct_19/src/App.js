import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';


function App(props) { return (<div className="App"><h1>Productos</h1></div>); }
function mapStateToProps(state) { return { ...state }; }
export default connect(mapStateToProps)(App);