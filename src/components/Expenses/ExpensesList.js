import React from "react";
import ExpenseItem from "./ExpenseItem";
const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h4 className="text-danger">No Expenses Found!</h4>;
  }
  return (
    <div>
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
};
export default ExpensesList;
