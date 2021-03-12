import React from 'react'
//import components
import Todo from './Todo'

export default function TodoList({ todos, setTodos, filterTodos }) {
    //change todos.map na filterTodos
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filterTodos.map(todo => (
                    <Todo
                        text={todo.text}
                        key={todo.id}
                        setTodos={setTodos}
                        todos={todos}
                        todo={todo}
                    />
                ))}
            </ul>
        </div>
    )
}
