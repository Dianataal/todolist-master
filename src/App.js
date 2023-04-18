import React, {useState} from "react";
import './App.css';


import Todo from "./components/Todo";
import NewTodo from "./NewTodo/NewTodo";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
      date: new Date(2023, 0, 10),
      title:'JS task',
      price: 'high'
    },
    {
        id: 'e2',
      date: new Date(2023, 0, 10),
      title:'MySQL task',
      price: 'medium'
    },
      {
          id: 'e3',
          date: new Date(2023, 0, 5),
          title:'WordPress task',
          price: 'low'
      }
  ]

const App = () => {
    const [expenses, setExpenses] = useState
    (DUMMY_EXPENSES)

  const addExpensehandler = (expense) => {
    console.log('In App.js')
    setExpenses((previousExpenses ) => {
        return [expense, ...previousExpenses]
      })
  }
console.log(expenses)

  return (
      <div className="App">
        <NewTodo onAddExpense={addExpensehandler}></NewTodo>
        <Todo expenses={expenses}></Todo>
      </div>
  );
}

export default App;