import React from 'react'

export default function Todo({ text, setTodos, todos, todo }) {
    //Delete
    const deleteHandler = () => {
        //filter property, el ktery neodpovida todo.id
        setTodos(todos.filter(el => el.id !== todo.id))
        console.log(todo)
    }

    //complete
    const completeHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item
        }))
    }

    return (
        <div className='todo'>
            {/* toggle mode: je li todo.completed to menit className na completed, je li ne nechat '' */}
            <li className={`todo-item ${todo.completed ? "completed" : ''}`}  >{text}</li>
            <button onClick={completeHandler} className='complete-btn'><i className="fas fa-check"></i></button>
            <button onClick={deleteHandler} className='trash-btn'><i className="fas fa-trash"></i></button>
        </div>
    )
}
