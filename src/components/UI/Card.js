import React from 'react';
const Card = (props) => {
    const classes = "card-body " + props.className;
  return (
    <div className="card shadow  mb-4">
      <div className={classes}>{props.children}</div>
    </div>
  );
};
export default Card;
