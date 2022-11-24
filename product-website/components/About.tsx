import React from "react";

export default function About() {
  return (
    <section id="about" className="about-section relative z-10 pt-150">
      <div className="container">
        <div className="row flex items-center">
          <div className="w-full lg:w-1/2">
            <div className="about-img relative z-10 pt-19 pb-19 mb-18 lg:mb-0">
              <img
                src="assets/img/about/about-1.png"
                alt=""
                className="w-100"
              />
              <img
                src="assets/img/about/about-left-shape.svg"
                alt=""
                className="shape-1"
              />
              <img
                src="assets/img/about/left-dots.svg"
                alt=""
                className="shape shape-2"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="about-content">
              <div className="section-title mb-8">
                <h1 className="mb-6 ">
                  Perfect Solution For Solving Your Recruiter Workforce!
                </h1>
                <p className="">
                  {`Only 42% of a Recuiter's time is spent assessing or
                  interacting with prospects and customers. Proving that
                  improving Recuiter productivity and performance is a key
                  challenge for leaders to solve.`}
                </p>
              </div>
              <a href="#" className="main-btn btn-hover border-btn ">
                Discover More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
