import React from 'react';
import TodoList from './TodoList.jsx';
import { connect } from 'react-redux';
import { toggleTodo } from './redux/actions';

class App extends React.Component {
  constructor(props){
   super(props);
   this.todoToggle = this.todoToggle.bind(this);
 }
 render(){
   return(
     <div>
     <h1>To-do List</h1>
     <TodoList todos={this.props.todos} todoToggle={this.todoToggle}/>
     </div>
     );
   }
   todoToggle(position){
     this.props.dispatch(toggleTodo(position));
   }
 }


function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

export default connect(mapStateToProps)(App);