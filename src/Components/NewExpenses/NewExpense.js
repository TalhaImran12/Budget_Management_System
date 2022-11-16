
import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense=(props)=>{



    const saveExpenseHandler=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()*10,
        };
        // passind data from child(NewExpense) to parent (App.js)
        props.onAddExpense(expenseData);
    }


    return(
        <div className="new_Expense">
            <ExpenseForm onSaveExpenseData={saveExpenseHandler}/>
        </div>
    );

}


export default NewExpense;