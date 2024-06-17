import React from "react";
import NavItems from "./NavItems";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="flex justify-around items-center px-10 fixed top-0 left-0 right-0 border-b border-black">
      <section className="brand-logo py-1">
        <img src="src/assets/logo.png" alt="" className="" />
      </section>
      <section className="w-9/12">
        <ul className="flex justify-center p-2">
          <NavItems itemName="Home" target="#" />
          <NavItems itemName="Internships" target="#" />
          <NavItems itemName="Mock Tests" target="#" />
          <NavItems itemName="Learning" target="#" />
          <NavItems itemName="About" target="#" />
        </ul>
      </section>
      <section className="">
        <button className="bg-blue-900 px-4 py-2 rounded-full text-white text-lg">
          Get Started
        </button>
      </section>
    </div>
  );
}

export default NavBar;
