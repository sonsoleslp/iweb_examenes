import React, { Component } from 'react';
import ContestantList from "./ContestantList.jsx";
import { connect } from 'react-redux';
import {voteContestant} from './redux/actions';
class App extends Component {
  constructor(props) {
   super(props);
   this.vote = this.vote.bind(this);
 }
 render() {
    let {contestants, winner} = this.props;
   return (
     <div>
     <h1>CONTESTANTS</h1>
     <h2>Your vote: {contestants[winner]}</h2>
     <ContestantList contestants={contestants} vote={this.vote} />
     </div>
     )
   }
   vote(winner) {
     this.props.dispatch(voteContestant(winner));
   }
 }

function mapStateToProps(state) {
  return {
    winner: state.winner,
    contestants: state.contestants
  };
}

export default connect(mapStateToProps)(App);