import { TbAdjustmentsHorizontal } from "react-icons/tb";
import "./style.css";
import Filter from "../filter";
import React from "react";

function FilterIcon(props) {
  const [clicked, setclicked] = React.useState(false);

  const handleOnClick = () => {
    setclicked(!clicked);
  };
  return (
    <div className="iconcontainer">
      {clicked == false ? (
        <a onClick={handleOnClick}>
          <TbAdjustmentsHorizontal />
        </a>
      ) : (
        <Filter handleOnClick={handleOnClick} />
      )}
    </div>
  );
}

export default FilterIcon;
