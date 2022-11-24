import React from "react";
import { SlArrowDown } from "react-icons/sl";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="hero-section relative bg-no-repeat bg-top z-10 pt-200 pb-13 lg:pb-200 2xl:pb-120"
      style={{ backgroundImage: "url('assets/img/hero/hero-bg.svg')" }}
    >
      <div className="container">
        <div className="row flex items-center relative">
          <div className="w-full lg:w-3/5">
            <div className="hero-content mb-0 lg:mb-6">
              <h1 className="text-white mb-9 text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-5xl 2xl:text-6xl">
                Streamline Your Recruitment Workforce!
              </h1>
              <p className="text-white text-lg mb-10 xl:pr-18 2xl:pr-120">
                Cut down the unproductivity of your Human Resource Associates
                work and automate their workflows and let them as well enjoy
                their time with their families and friends.
              </p>
              <a href="#" className="main-btn border-btn btn-hover mb-2">
                Get Started
              </a>
              <a href="#features" className="scroll-bottom">
                <SlArrowDown />
              </a>
            </div>
          </div>
          <div className="w-full lg:w-2/5">
            <div className="hero-img pt-8 lg:pt-0">
              <img
                src="assets/img/hero/hero-img.png"
                alt=""
                className="w-full lg:w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
