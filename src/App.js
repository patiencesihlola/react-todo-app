import React from "react";
import "./index.css";
import todosData from "./todosData";
import Todoitem from "./TodoItem";


export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {todos: todosData};
  }

  handleChange(id) {
    this.setState((prevState) => {
      //alert((JSON.stringify(prevState.todos[0].id)));
      const updatedTodos = prevState.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: updatedTodos,
      };
    });
  }
 

  render() {
    const Todoitems = todosData.map((item)=>
      <Todoitem key={item.id} item={item} handleChange={this.handleChange} />
    );
    return <div>
      {Todoitems}
        </div>;
  }
}

// export default App;
