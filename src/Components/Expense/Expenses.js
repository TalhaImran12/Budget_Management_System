import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import React, { useState } from "react";
import FilterByYear from "../Filter/FilterByYear";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2019");
  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <FilterByYear
        selected={filterYear}
        onChangeFilter={filterChangeHandler}
      />
      {/* It will map all the expense Items into expense Objects */}
      {props.expense.map((expense) => (
        // console.log(expense.title),
        // console.log(expense.amount),
        // console.log(expense.date),
        <React.Fragment key={expense.id}>
          <ExpenseItem
          // This will convert object into array
           
            title={Array.from(expense.title)}
            amount={Array.from(expense.amount)}
            date={Array.from(expense.date)}
          />
        </React.Fragment>
      ))};
    </Card>
  );
}
export default Expenses;
