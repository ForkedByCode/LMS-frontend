import React from "react";

function InfoCard() {
  return (
    <>
      <div
        className="container h-screen relative"
        style={{
          backgroundImage: "url('/Background.png')",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col items-center bg-gradient-to-r from-white rounded-3xl absolute inset-0 m-auto w-4/5 h-4/6 top-12">
          <div className="flex flex-col justify-start p-4 pb-0 leading-normal w-full h-full">
            <div className="flex justify-between items-center mx-2 border-b-2 border-black h-1/4">
              <section className="">
                <h5 className="mb-2 text-5xl text-blue-900 font-bold">
                  Our Instructors
                </h5>
                <p className="text-lg pb-5">
                  Learn from Our Experienced and Dedicated Instructors.
                </p>
              </section>
              <section className="text-white">
                <button
                  className="bg-blue-900 rounded-full p-3 pb-2 m-2"
                  data-carousel-prev
                >
                  <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <button
                  className="bg-blue-900 rounded-full p-3 pb-2 m-2"
                  data-carousel-next
                >
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </button>
              </section>
            </div>
            <div className="flex justify-start items-center mx-2 h-3/4 relative">
              <section className="w-1/2 h-full p-5 absolute top-0 left-0">
                <img
                  src="/profile.png"
                  alt=""
                  className="w-full h-full object-contain"
                />
              </section>
              <section className="w-1/2 h-full p-5 absolute top-0 left-2/4 text-blue-900">
                <h2 className="font-bold text-3xl">Instructor Name</h2>
                <p className="text-2xl">Post Instructor @tnpofficer</p>
                <p className="text-xl pt-8">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  deleniti aperiam a necessitatibus culpa illo quaerat officiis
                  voluptas quae! Odio nisi blanditiis optio ab sed eveniet
                  incidunt laboriosam quam perferendis!
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoCard;
