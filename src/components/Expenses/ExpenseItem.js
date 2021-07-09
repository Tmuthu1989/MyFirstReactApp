import React from 'react';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
const ExpenseItem = (props) => {
  
  return (
    <Card className="row" parentClass="mb-4">
      <div className="col-12 col-md-2 justify-content-center align-self-center">
        <ExpenseDate date={props.date}></ExpenseDate>
      </div>
      <div className="col-12 col-md-8 justify-content-center align-self-center">
        <h3>{props.title}</h3>
      </div>
      <div className="col-12 col-md-2 text-right justify-content-center align-self-center">
        <button className="btn btn-info btn-sm align-right">${props.amount}</button>
      </div>
    </Card>
  );
};
export default ExpenseItem;
