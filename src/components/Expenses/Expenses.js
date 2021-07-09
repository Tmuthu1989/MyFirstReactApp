import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");
  const filteredExpenses = props.items.filter((elem) => {
    return elem.date.getFullYear().toString() === selectedYear;
  });
  const getExpenseFilter = (filterYear) => {
    setSelectedYear(filterYear);
  };

  return (
    <div>
      <Card parentClass="mb-4">
        <ExpenseFilter
          selected={selectedYear}
          onFilterChange={getExpenseFilter}
          className="mb-4"
        />
        <ExpensesList items={filteredExpenses}/>
        {/* {filteredExpenses.length === 0 && (
          <h4 className="text-danger">No Expenses Found!</h4>
        )}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}
      </Card>
    </div>
  );
};
export default Expenses;
