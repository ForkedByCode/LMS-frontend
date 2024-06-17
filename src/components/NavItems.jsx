import React from "react";

function NavItems({ itemName, target }) {
  return (
    <li className="m-2 p-2 font-bold text-xl text-blue-900">
      <a href={target}>{itemName}</a>
    </li>
  );
}

export default NavItems;
