import Form from './Components/Form';
import TodoList from './Components/TodoList';
import React, {useState} from 'react';

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <>
      <header className="title">My Todo list</header>
      <Form
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        inputText={inputText}
      />
      <TodoList 
        todos={todos}
      />
    </>
  );
}

export default App;
