import React from "react";
import LearnerCard from "./LearnerCard";
import Footer from "./Footer";

function Testimonials() {
  return (
    <>
      <div className="container h-screen relative">
        <div className="absolute m-auto w-full h-1/2 top-32">
          <h1 className="w-full h-1/6 text-center text-5xl font-bold text-blue-900">
            Testimonials
          </h1>
          <div className="flex h-5/6">
            <LearnerCard />
            <LearnerCard />
            <LearnerCard />
          </div>
        </div>
        <div className="w-full absolute bottom-0">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Testimonials;
