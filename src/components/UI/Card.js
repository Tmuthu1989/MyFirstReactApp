import React from "react";
const Card = (props) => {
  const classes = "card-body " + props.className;
  const parentClasses = "card shadow " + props.parentClass;
  return (
    <div className={parentClasses}>
      <div className={classes}>{props.children}</div>
    </div>
  );
};
export default Card;
