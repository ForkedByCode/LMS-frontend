import React from "react";

function Buttons({ icon }) {
  return (
    <button
      className="bg-blue-900 rounded-full p-3 pb-1 m-2"
      data-carousel-next
    >
      <span className="material-symbols-outlined">{icon}</span>
    </button>
  );
}

export default Buttons;
