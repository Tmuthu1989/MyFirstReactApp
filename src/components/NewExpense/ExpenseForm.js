import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  //   const [userInput, setUserInput] = useState({
  //     title: "",
  //     amount: "",
  //     date: "",
  //   });
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     title: event.target.value
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, title: event.target.value };
    // });
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   date: event.target.value,
    // });
  };
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   amount: event.target.value,
    // });
  };
  const submitForm = (event) => {
    event.preventDefault();
    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    props.onSaveExpenseForm(expenseData);
    setTitle("");
    setDate("");
    setAmount("");
    
  };
  return (
    <form onSubmit={submitForm}>
      <div className="row">
        <div className="col-12 mb-2">
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              onChange={titleChangeHandler}
              className="form-control"
              value={title}
            />
          </div>
        </div>
        <div className="col-12 col-md-6 mb-2">
          <div className="form-group">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              className="form-control"
              onChange={dateChangeHandler}
              value={date}
            />
          </div>
        </div>
        <div className="col-12 col-md-6 mb-2">
          <div className="form-group">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              className="form-control"
              onChange={amountChangeHandler}
              value={amount}
            />
          </div>
        </div>
        <div className="col-12">
          <div className="form-group">
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default ExpenseForm;
