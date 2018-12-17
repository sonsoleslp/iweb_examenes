import React from 'react';
import ContestantComponent from "./ContestantComponent.jsx";
export default class ContestantList extends React.Component {
	render(){
		let contestants = this.props.contestants.map((contestant, index)=> {
			return (<ContestantComponent
				key={index}
				index={index}
				name={contestant}
				vote={this.props.vote} />);
		});
		return (
			<ul>{contestants}</ul>
			)
	}
}