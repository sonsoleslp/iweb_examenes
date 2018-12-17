import React, { Component } from 'react';
import ContestantList from "./ContestantList.jsx";

class App extends Component {
  constructor(props) {
   super(props);
   this.state = {
     winner: undefined,
     contestants: [ "Alejandro", "Álvaro", "Andrés", "Ignacio", "Ana"],
   };
   this.vote = this.vote.bind(this);
 }
 render() {
   return (
     <div>
     <h1>CONTESTANTS</h1>
     <h2>Your vote: {this.state.contestants[this.state.winner]}</h2>
     <ContestantList contestants={this.state.contestants} vote={this.vote} />
     </div>
     )
   }
   vote(winner) {
     this.setState({winner: winner});
   }
 }

 export default App;
