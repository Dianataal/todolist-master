import React from "react";
import TodoItem from "../components/TodoItem";
import './TodoList.css'

const TodoList = (props) => {
    if (props.filteredExpenses.length === 0) {
        return <p className='expenses-list__fallback'>No expenses found</p>
    }

    return (
        <ul className='expenses-list'>
            {
                props.filteredExpenses.map((todo) => {
                    return <TodoItem
                        id={todo.id}
                        title={todo.title}
                        priority={todo.amount}
                        date={todo.date}
                    ></TodoItem>
                })
            }
        </ul>
    )
}
export default TodoList

//siin viga? kus?