import React from 'react';
export default class ContestantComponent extends React.Component {
	render(){
		return (
			<li>
			{this.props.name}
			<button onClick={()=>{this.props.vote(this.props.index)}}>
			VOTE
			</button>
			</li>
			)
	}
}