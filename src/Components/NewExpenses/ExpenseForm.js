import React,{useState} from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {

  const [enteredTitle, setEnteredTitle]= useState('');
  const [enteredAmount, setEnteredAmount]=useState('');
  const [enteredDate, setEnteredDate]=useState('');

  const [isValid, setisValid]= useState(true);

  // For managing previous states as well
  // const [userInput,setUserInput]=useState({
  //   enteredTitle:'',
  //   enteredAmount:'',
  //   enteredDate:''
  // })
  const titleChangeHandler =(event)=>{
    // 1st Approach
    setEnteredTitle(event.target.value);
    // 2nd Approach
    // setUserInput({
    //   ...userInput,
    //   enteredText: event.target.value,
    // });
    // Whenever you depend on the previous state, then best way is to use functional approach like
    // setUserInput((prevState)=>{
    //   return {
    //     ...prevState,
    //     enteredTitle: event.target.value,
    //   };
    // });
  };


  const amountChangeHandler=(event)=>{
    // 1st Approach
    setEnteredAmount(event.target.value);
    // 2nd Approach
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
    // Whenever you depend on the previous state, then best way is to use functional approach like
    // setUserInput((prevState)=>{
    //   return {
    //     ...prevState, 
    //     enteredAmount: event.target.value,
    //   };
    // });
  };

  
  const dateChangeHandler=(event)=>{
    // 1st Approach
    setEnteredDate(event.target.value);
    // 2nd Approach
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
    // Whenever you depend on the previous state, then best way is to use functional approach like
    // setUserInput((prevState)=>{
    //   return {
    //     ...prevState,
    //     enteredDate: event.target.value,
    //   };
    // });
  };

  const submitHandler=(event)=>{
    event.preventDefault();

    console.log(enteredTitle.length,"before condition")
    if(enteredTitle.trim().length===0){
      console.log(enteredTitle.length===0,"after condition")
      setisValid(false);
      console.log(isValid,"value");
      return ;
    }

    if(enteredTitle.trim().length>0){
      setisValid(true);

    }
    const expenseData= {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    //passing data from child to parent (NewExpense)
    props.onSaveExpenseData(expenseData);
    
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="ExpenseForm_Controls">
        <div className={`ExpenseForm_Control ${!isValid ? 'invalid': ''}`}>
          {/* inline styling */}
        {/* style={{color: !isValid ? 'red': 'black'}} */}
          <label >Title</label>
          <br />
          <input type="text" value={enteredTitle || ''} onChange={titleChangeHandler}/>
        </div>
        <div className="ExpenseForm_Control">
          <label>Amount</label>
          <br />
          <input type="number" min="0.01" step="0.01" value={enteredAmount || ''} onChange={amountChangeHandler} />
        </div>
      </div>
      <div className="ExpenseForm_Control">
        <label>Date</label>
        <br />
        <input type="date" min="2019-01-01" max="2023-01-01" value={enteredDate || ''} onChange={dateChangeHandler}/>
      </div>
      <div className="newExpenseFormActions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
