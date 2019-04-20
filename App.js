import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo'
class App extends Component {
  state ={
    todos:[
      {id : 1 ,content:'amine'},
      {id : 2 ,content:'amine'},
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !==id
});
    this.setState({
      todos
    })
  }
  addTodo = (todo) =>{

    todo.id= Math.random()
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })

  }
  render() {
    return (
      <div className="todo-app container">
      <h1 className="center blue-text"> Todos's</h1>
      <AddTodo addTodo={this.addTodo}/>
      <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
     

      </div>
    );
  }
}

export default App;
