import React from 'react';
import TodoListElement from './TodoListElement.jsx';
export default class TodoList extends React.Component {
	render(){
		let todos = this.props.todos.map((todo, index)=>{
			return <TodoListElement
			key={index}
			index={index}
			text={todo.text}
			completed={todo.completed}
			todoToggle={this.props.todoToggle} />
		});
		return (
			<ul>{todos}</ul>
			);
	}
}