import React from "react";
// import logo from './logo.svg';
import "./App.css";
import TodoList from "./components/TodoList";
import TodoListClass from "./components/TodoListClass";

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <h1>Hello</h1>
      <TodoList />
      <TodoListClass />
    </div>
  );
};

export default App;
