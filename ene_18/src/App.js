import React from 'react';
import TodoList from './TodoList.jsx';
class App extends React.Component {
  constructor(props){
   super(props);
   this.state = {
     todos: [
     {text: "Comprar naranjas", completed: true},
     {text: "Poner la lavadora", completed: false}
     ],
     logoURL: "assets/logo.png"
   };
   this.todoToggle = this.todoToggle.bind(this);
 }
 render(){
   return(
     <div>
     <h1>To-do List</h1>
     <TodoList todos={this.state.todos} todoToggle={this.todoToggle}/>
     </div>
     );
   }
   todoToggle(position){
     let newState = this.state.todos.map( (todo, index) =>
     position === index ? { text: todo.text, completed: !todo.completed } : todo
     )
     this.setState({todos: newState});
   }
 }

 export default App;