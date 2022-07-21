import React from "react";
import { BsSearch } from "react-icons/bs";

const btn = props => {
  return (
    <div className="btnContainer">
      <BsSearch onClick={props.handleOnClick} />
    </div>
  );
};

export default btn;
