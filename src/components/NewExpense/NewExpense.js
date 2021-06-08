import React from "react";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
    const saveExpenseHandler = (expenseData) => {
        const expense = {
            ...expenseData,
            id: Math.random().toString()
        }
        props.onAddNewExpense(expense);
    };
  return <ExpenseForm onSaveExpenseForm={saveExpenseHandler}></ExpenseForm>;
};
export default NewExpense;
