
import Expenses from './Components/Expense/Expenses';
import NewExpense from './Components/NewExpenses/NewExpense';
import React,{useState} from 'react';

const Dummy_expenses = [
  { id:'e1', date:'Nov 10, 2022', title: "Seminar Series", amount: "$290" },
  {
    id:'e2',
    date: 'Dec 12, 2022',
    title: "Requirements Engineering",
    amount: "$240",
  },
  { id:'e3', date: 'Jan 05,2023', title: "Software Architecture", amount: "$350" },
];


function App() {
  const [expenses,setExpenses]=useState(Dummy_expenses);

  const addExpenseData = (newExpense)=>{

    //casting date object into String
    newExpense.date = newExpense.date.toDateString();
    console.log(newExpense.date);
    // It will fetch all the existing array values and populate the rest elements with those existing elements
    setExpenses((prevExpenses)=>{
      // it will take older snapshot from actual DOM and latest from virtual DOM, compare it and show the latest changes with previous ones
      return [newExpense,...prevExpenses];
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <NewExpense onAddExpense={addExpenseData}/>
        <Expenses expense={expenses}></Expenses>
      </header>
    </div>
  );
}

export default App;
