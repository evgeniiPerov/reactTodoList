import React from 'react'

//connect props
export default function Form({ setInputText, todos, setTodos, inputText, setStatus }) {
    const inputTextHandler = (e) => {
        //console.log(e.target.value)
        setInputText(e.target.value)
    }
    const submitTodoHandler = (e) => {
        //break refresh mode to click
        e.preventDefault()
        //Udelat novy object kdyz se klikne
        setTodos([
            //cely array zustava, a dava se novy
            ...todos, {
                text: inputText,
                completed: false,
                id: Math.random() * 1000
            }

        ])
        //update todo
        setInputText('')
    }

    const statusHandler = e => {
        //console.log(e.target.value)
        setStatus(e.target.value)
    }

    return (
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}
