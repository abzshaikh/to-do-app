import React, { useState, useEffect } from  "react";
import './App.css';
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
  const [ inputText, setInputText ] = useState("");
  const [ todos, setTodos ] = useState([]);
  const [ status, setStatus ] = useState("all");
  const [ filteredTodos, setFilteredTodos ] = useState([]);
  const [ toggleSubmit, setToggle ] = useState(true);
  const [ isEdit, seIsEdit ] = useState(null);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos( todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos( todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
  }

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    }
    else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  }


  return (
    <div className="App">
      <header>Arbaz To Do list </header>
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} setStatus={setStatus}  toggleSubmit={toggleSubmit} setToggle={setToggle} isEdit={isEdit} />
      <ToDoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos} setToggle={setToggle} setInputText={setInputText} seIsEdit={seIsEdit} />
    </div>

  );
}

export default App;
