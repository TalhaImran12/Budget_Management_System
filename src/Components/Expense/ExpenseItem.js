import './ExpenseItem.css';
import React from 'react';
import './ExpenseDate.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
function ExpenseItem(props){


  return (
    <Card className='expense_item'>
  
      <ExpenseDate date={props.date}/>
      <div className='expense_item_description'>
        <h2>{props.title}</h2>
        <div className='expense_item_price'>{props.amount}</div>
      </div>
    </Card>
  );
}


export default ExpenseItem;