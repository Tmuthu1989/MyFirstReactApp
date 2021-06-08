import React from "react";
import Card from "../UI/Card";
const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <Card className="text-center text-bold">
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    </Card>
  );
};
export default ExpenseDate;
