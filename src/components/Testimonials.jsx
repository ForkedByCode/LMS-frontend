import React from "react";
import LearnerCard from "./LearnerCard";

function Testimonials() {
  return (
    <>
      <div
        className="container h-screen relative"
        style={{
          backgroundImage: "url('./src/assets/Background.png')",
          backgroundSize: "cover",
        }}
      >
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
      </div>
    </>
  );
}

export default Testimonials;
