import Form from './Components/Form';
import TodoList from './Components/TodoList';
import React, { useState, useEffect } from 'react';

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    getLocalTodos();
  },[])

  useEffect(() => {
    const filterHandle = () => {
      switch (status) {
        case "completed":
          setFilter(todos.filter(todo => todo.completed === true))
          break;
        case "pending":
          setFilter(todos.filter(todo => todo.completed === false))
          break;
        default:
          setFilter(todos);
          break;
      }
    }
    filterHandle();

    const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
    saveLocalTodos();

  }, [todos, status]);


  const getLocalTodos = () => {
    if (localStorage.getItem("todos") == null) {
      localStorage.setItem("todos", JSON.stringify([]));
    }
    else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  }

  return (
    <>
      <header className="title">My Todo list</header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
        status={status}
        filter={filter}
        setFilter={setFilter}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filter={filter}
      />
    </>
  );
}

export default App;
