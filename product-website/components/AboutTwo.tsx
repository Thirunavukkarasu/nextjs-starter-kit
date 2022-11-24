import React from "react";

export default function AboutTwo() {
  return (
    <section id="about" className="about-section pt-150">
      <div className="container">
        <div className="row flex items-center">
          <div className="w-full lg:w-1/2">
            <div className="about-content">
              <div className="section-title mb-8">
                <h1 className="mb-6 text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
                  Easy to Use with Tons of Awesome Features
                </h1>
                <p className="">
                  Because we focus on results. For us, it’s all about what adds
                  value for you and your business. Above all, we want our words
                  to work for you.
                </p>
              </div>
              <ul className="about-feature">
                <li>Quick Access</li>
                <li>Easily to Manage</li>
                <li>24/7 Support</li>
              </ul>
              <a href="#" className="main-btn btn-hover border-btn ">
                Learn More
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2 order-first lg:order-last">
            <div className="about-img-2 relative z-10 pt-19 pb-19 mb-18 lg:mb-0">
              <img
                src="assets/img/about/about-2.png"
                alt=""
                className="w-100"
              />
              <img
                src="assets/img/about/about-right-shape.svg"
                alt=""
                className="shape shape-1"
              />
              <img
                src="assets/img/about/right-dots.svg"
                alt=""
                className="shape shape-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
