import React from "react";

function LearnerCard() {
  return (
    <div className="w-1/3 h-full relative p-5">
      <section className="w-5/6 h-full m-auto p-5 bg-gradient-to-r from-yellow-50 to-white rounded-2xl">
        <article className="flex items-center">
          <img src="src/assets/profile.png" alt="" className="w-1/5" />
          <h2 className="mx-auto text-lg font-bold text-blue-900">
            Learner's Name
          </h2>
        </article>
        <article className="">
          <p className="p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quia
            vero dolorum, maiores sunt optio molestiae, obcaecati maxime beatae
            reprehenderit quae libero quos facere id soluta quasi! Reiciendis,
            dolore tempora!
          </p>
        </article>
      </section>
    </div>
  );
}

export default LearnerCard;
