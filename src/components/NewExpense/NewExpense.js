import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const [isShowForm, setShowForm] = useState(false);
  const saveExpenseHandler = (expenseData) => {
    const expense = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onAddNewExpense(expense);
  };
  const showForm = (event) => {
    setShowForm((isShow) => {
      return !isShow;
    });
  };

  return (
    <div>
      {!isShowForm && (
        <button
          onClick={showForm}
          type="button"
          className="btn btn-info btn-sm"
        >
          Add New Expense
        </button>
      )}
      {isShowForm && (
        <ExpenseForm
          onCancel={showForm}
          onSaveExpenseForm={saveExpenseHandler}
        ></ExpenseForm>
      )}
    </div>
  );
};
export default NewExpense;
