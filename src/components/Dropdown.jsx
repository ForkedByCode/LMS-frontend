import React, { useState } from "react";

function Dropdown() {
  const [toggle, setToggle] = useState("");

  return (
    <>
      <button
        id="dropdownButton"
        class="bg-blue-900 text-white px-4 py-2 rounded-full"
      >
        Toggle Dropdown
      </button>
      <div
        id="dropdownMenu"
        class="absolute mt-2 w-48 bg-white border rounded-md shadow-lg hidden md:block"
      >
        <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-200">
          Option 1
        </a>
        <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-200">
          Option 2
        </a>
        <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-200">
          Option 3
        </a>
      </div>
    </>
  );
}

export default Dropdown;
