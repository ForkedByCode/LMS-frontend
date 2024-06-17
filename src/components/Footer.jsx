import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="container w-full h-52 bg-blue-900">
        <div className="w-full h-1/3 text-center font-bold text-white text-4xl">
          <p>{"Vast Community of Students".toUpperCase()}</p>
        </div>
        <div className="w-full h-2/3 flex justify-center items-center">
          <div className="border border-white rounded-full w-1/6 h-1/3 m-5 flex justify-between items-center">
            <section className="w-2/3 h-full text-center m-auto p-3">
              <p id="counter">0</p>
            </section>
            <section className="w-11 h-11">
              <img src="src/assets/instagram_logo.png" alt="" className="" />
            </section>
          </div>
          <div className="border border-white rounded-full w-1/6 h-1/3 m-5 flex justify-between items-center">
            <section className="w-2/3 h-full text-center m-auto p-3">
              <p id="counter">0</p>
            </section>
            <section className="w-11 h-11">
              <img src="src/assets/telegram.png" alt="" className="" />
            </section>
          </div>
          <div className="border border-white rounded-full w-1/6 h-1/3 m-5 flex justify-between items-center">
            <section className="w-2/3 h-full text-center m-auto p-3">
              <p id="counter">0</p>
            </section>
            <section className="w-11 h-11">
              <img src="src/assets/linkedIn.png" alt="" className="" />
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
