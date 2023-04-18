import React from 'react';
import TodoForm from "./TodoForm";
import "./NewTodo.css";

const NewTodo = (props) => {
    const saveExpenseDatahandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }

    return (
        <div className='new-expense' >
            <TodoForm onSaveExpenseData={saveExpenseDatahandler}></TodoForm>
        </div>
    )
}

export default NewTodo