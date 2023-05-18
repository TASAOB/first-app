//import { Fragment } from "react";
//import { MouseEvent } from "react";

import { useState } from "react";

function ListGroup() {
  let items = ["A", "B", "C", "D", "E"];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item founf</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
