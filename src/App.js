import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
// import './App.css';

const defaultTodos = [
  {text: 'Comprar ropa', completed: true},
  {text: 'Aprender Django', completed: false},
  {text: 'Aprender MongoDB', completed: false},
  {text: 'Aprender React', completed: false},
]

function App(props) {

  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length; //!! -> verdadero
  const totalTodos = todos.length;

  let searchedTodos = [];

  if(!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {

    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });

  }

  return (
    <React.Fragment>
      <TodoCounter
      total={totalTodos}
      completed={completedTodos}
      />

      <TodoSearch 
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo => (
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
