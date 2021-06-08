import React from "react";
const ExpenseFilter = (props) => {
  const filterChangeHandler = (event) => {
    props.onFilterChange(event.target.value);
  };
  const classNames = "row "+ props.className;
  return (
    <div className={classNames}>
      <div className="col-12 offset-md-10 col-md-2 text-right">
        <select className="form-control" value={props.selected} onChange={filterChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};
export default ExpenseFilter;
