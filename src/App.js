import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
// import './App.css';

const todos = [
  {text: 'Comprar ropa', completed: true},
  {text: 'Aprender Django', completed: false},
  {text: 'Aprender MongoDB', completed: false},
  {text: 'Aprender React', completed: false},
]

function App(props) {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
