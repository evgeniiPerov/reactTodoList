
import { useState, useEffect } from 'react';
import './App.css';
//Importing components
import Form from './components/Form';
import TodoList from './components/TodoList';


function App() {
  //Prace s Input text
  const [inputText, setInputText] = useState('')
  //todos, beru za array
  const [todos, setTodos] = useState([])
  //Status selection
  const [status, setStatus] = useState('all')
  //Filter todos
  const [filterTodos, setFilterTodos] = useState([])

  //filter fun
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilterTodos(todos.filter((todo) => todo.completed === true))
        break;
      case 'uncompleted':
        setFilterTodos(todos.filter((todo) => todo.completed === false))
        break;
      default:
        setFilterTodos(todos)
        break

    }
  }
  //useEffect
  //Local save at start
  useEffect(() => {
    getLocalTodos()
  }, [])//kdyz mam empty array, funkce de jenon jednou
  //vzdy kdyz se meni todos, status, 'dostavam' funkce z useEffect
  useEffect(() => {
    filterHandler()
    saveLocalTodos()
  }, [todos, status])


  //local
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]))
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'))
      setTodos(todoLocal)
    }
  }


  return (
    <div>
      <header>
        <h1>Hello World, this is Evgenii Todo List </h1>

      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        inputText={inputText}
        status={status}
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filterTodos={filterTodos}
      />
    </div>
  );
}

export default App;
