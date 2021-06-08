import React, {useState} from 'react';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle("Hello Muthu");
    console.log("Clicked!!!!");
  }
  return (
    <Card className="row">
      <div className="col-12 col-md-2">
        <ExpenseDate date={props.date}></ExpenseDate>
      </div>
      <div className="col-12 col-md-8">
        <h3>{title}</h3>
      </div>
      <div className="col-12 col-md-2 text-right">
        <span className="btn btn-info btn-sm">${props.amount}</span>
        <button onClick={clickHandler} className="btn btn-sm btn-success">Click Here</button>
      </div>
    </Card>
  );
};
export default ExpenseItem;
