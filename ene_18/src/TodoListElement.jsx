import React from 'react';
export default class TodoListElement extends React.Component {
	render(){
		return (
			<li>
			<button onClick= {() => {this.props.todoToggle(this.props.index)}}>
			{this.props.text} Status:{this.props.completed ? "Completada":"Pendiente"}
			</button>
			</li>
			);
	}
}