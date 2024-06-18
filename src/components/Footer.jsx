import React from "react";
import Counter from "./Counter";

function Footer() {
  return (
    <>
      <div className="container w-full h-52 bg-blue-900">
        <div className="w-full h-1/3 text-center font-bold text-white text-4xl flex justify-center items-center">
          <p>{"Vast Community of Students".toUpperCase()}</p>
        </div>
        <div className="w-full h-2/3 flex justify-center items-center">
          <div className="border border-white rounded-full w-48 h-1/3 m-5 flex justify-between items-center">
            <section className="w-2/3 h-full text-center m-auto">
              <Counter upto={2.5} speed={100} />
            </section>
            <section className="w-11 h-11">
              <img src="/instagram_logo.png" alt="" className="" />
            </section>
          </div>
          <div className="border border-white rounded-full w-48 h-1/3 m-5 flex justify-between items-center">
            <section className="w-2/3 h-full text-center m-auto">
              <Counter upto={50} speed={1} />
            </section>
            <section className="w-11 h-11">
              <img src="/telegram.png" alt="" className="" />
            </section>
          </div>
          <div className="border border-white rounded-full w-48 h-1/3 m-5 flex justify-between items-center">
            <section className="w-2/3 h-full text-center m-auto">
              <Counter upto={29} speed={3} />
            </section>
            <section className="w-11 h-11">
              <img src="/linkedIn.png" alt="" className="" />
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
