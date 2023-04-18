import React, {useState} from "react";
import './Todo.css'
import Card from "../UI/Card";
import TodoFilter from "../Todo/TodoFilter";
import TodoList from "../Todo/TodoList";

const Todo = (props) => {
    const [filteredYear, setFilteredYear] = useState('2023')

    console.log('Year data in Todo.js' + filteredYear)

    const filterChangeHandler = (year) => {
        console.log('Filter change handled by Todo.js')
        console.log(year + 'in Todo.js')
        setFilteredYear(year)
    }
    const filteredExpenses = props.expenses.filter(
        (expense) => {
            return expense.date.getFullYear().toString() === filteredYear
        })

    return (
        <Card className="expenses">
            <TodoFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></TodoFilter>
            <TodoList filteredExpenses = {filteredExpenses}></TodoList>
        </Card>
    )
}


export default Todo