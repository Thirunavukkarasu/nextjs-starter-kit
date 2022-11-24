"use client";

import { useState } from "react";
import { SlCheck, SlClose } from "react-icons/sl";

function MonthlyPlan() {
  return (
    <div className="tab-pane" id="monthlyPlan">
      <div className="row flex flex-wrap justify-center">
        <div className="w-full sm:w-10/12 md:w-8/12 lg:w-4/12">
          <div className="single-pricing mx-4">
            <div className="pricing-header">
              <h1 className="mb-8 text-theme-color">$36</h1>
              <h3 className="package-name">Basic Account</h3>
            </div>
            <div className="content mb-8 2xl:pl-13">
              <ul className="pricing-feature">
                <li>
                  {" "}
                  <SlCheck className="mr-3 text-green-500" /> Unlimited Acces
                </li>
                <li>
                  {" "}
                  <SlCheck className="mr-3 text-green-500" /> Single User{" "}
                </li>
                <li>
                  {" "}
                  <SlCheck className="mr-3 text-green-500" /> Unlimited Storage
                </li>
                <li>
                  {" "}
                  <SlClose className="mr-3 text-red-500" /> 24/7 Support{" "}
                </li>
                <li>
                  {" "}
                  <SlClose className="mr-3 text-red-500" /> Free Future Updates
                </li>
              </ul>
            </div>
            <div className="pricing-btn">
              <a href="#" className="main-btn btn-hover border-btn">
                Get Start
              </a>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-10/12 md:w-8/12 lg:w-4/12">
          <div className="single-pricing mx-4">
            <div className="pricing-header">
              <h1 className="mb-8 text-theme-color">$56</h1>
              <h3 className="package-name">Standard Account</h3>
            </div>
            <div className="content mb-8 2xl:pl-13">
              <ul className="pricing-feature">
                <li>
                  {" "}
                  <SlCheck className="mr-3 text-green-500" /> Unlimited Acces
                </li>
                <li>
                  {" "}
                  <SlCheck className="mr-3 text-green-500" /> Single User{" "}
                </li>
                <li>
                  {" "}
                  <SlCheck className="mr-3 text-green-500" /> Unlimited Storage
                </li>
                <li>
                  {" "}
                  <SlCheck className="mr-3 text-green-500" /> 24/7 Support{" "}
                </li>
                <li>
                  {" "}
                  <SlClose className="mr-3 text-red-500" /> Free Future Updates
                </li>
              </ul>
            </div>
            <div className="pricing-btn">
              <a href="#" className="main-btn btn-hover">
                Get Start
              </a>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-10/12 md:w-8/12 lg:w-4/12">
          <div className="single-pricing mx-4">
            <div className="pricing-header">
              <h1 className="mb-8 text-theme-color">$89</h1>
              <h3 className="package-name">Premium Account</h3>
            </div>
            <div className="content mb-8 2xl:pl-13">
              <ul className="pricing-feature">
                <li>
                  {" "}
                  <SlCheck className="mr-3 text-green-500" /> Unlimited Acces
                </li>
                <li>
                  {" "}
                  <SlCheck className="mr-3 text-green-500" /> Single User{" "}
                </li>
                <li>
                  {" "}
                  <SlCheck className="mr-3 text-green-500" /> Unlimited Storage
                </li>
                <li>
                  {" "}
                  <SlCheck className="mr-3 text-green-500" /> 24/7 Support{" "}
                </li>
                <li>
                  {" "}
                  <SlCheck className="mr-3 text-green-500" /> Free Future
                  Updates
                </li>
              </ul>
            </div>
            <div className="pricing-btn">
              <a href="#" className="main-btn btn-hover border-btn">
                Get Start
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function YearlyPlan() {
  return (
    <div className="tab-pane" id="yearlyPlan">
      <div className="row flex flex-wrap justify-center">
        <div className="w-full sm:w-10/12 md:w-8/12 lg:w-4/12">
          <div className="single-pricing mx-4">
            <div className="pricing-header">
              <h1 className="mb-8 text-theme-color">$136</h1>
              <h3 className="package-name">Basic Account</h3>
            </div>
            <div className="content mb-8 2xl:pl-13">
              <ul className="pricing-feature">
                <li>
                  {" "}
                  <SlCheck className="mr-3 text-green-500" /> Unlimited Acces
                </li>
                <li>
                  {" "}
                  <SlCheck className="mr-3 text-green-500" /> Single User{" "}
                </li>
                <li>
                  {" "}
                  <SlCheck className="mr-3 text-green-500" /> Unlimited Storage
                </li>
                <li>
                  {" "}
                  <SlClose className="mr-3 text-red-500" /> 24/7 Support{" "}
                </li>
                <li>
                  {" "}
                  <SlClose className="mr-3 text-red-500" /> Free Future Updates
                </li>
              </ul>
            </div>
            <div className="pricing-btn">
              <a href="#" className="main-btn btn-hover border-btn">
                Get Start
              </a>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-10/12 md:w-8/12 lg:w-4/12">
          <div className="single-pricing mx-4">
            <div className="pricing-header">
              <h1 className="mb-8 text-theme-color">$156</h1>
              <h3 className="package-name">Standard Account</h3>
            </div>
            <div className="content mb-8 2xl:pl-13">
              <ul className="pricing-feature">
                <li>
                  {" "}
                  <SlCheck className="mr-3 text-green-500" /> Unlimited Acces
                </li>
                <li>
                  {" "}
                  <SlCheck className="mr-3 text-green-500" /> Single User{" "}
                </li>
                <li>
                  {" "}
                  <SlCheck className="mr-3 text-green-500" /> Unlimited Storage
                </li>
                <li>
                  {" "}
                  <SlCheck className="mr-3 text-green-500" /> 24/7 Support{" "}
                </li>
                <li>
                  {" "}
                  <SlClose className="mr-3 text-red-500" /> Free Future Updates
                </li>
              </ul>
            </div>
            <div className="pricing-btn">
              <a href="#" className="main-btn btn-hover">
                Get Start
              </a>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-10/12 md:w-8/12 lg:w-4/12">
          <div className="single-pricing mx-4">
            <div className="pricing-header">
              <h1 className="mb-8 text-theme-color">$189</h1>
              <h3 className="package-name">Premium Account</h3>
            </div>
            <div className="mb-8 2xl:pl-13">
              <ul className="pricing-feature">
                <li>
                  {" "}
                  <SlCheck className="mr-3 text-green-500" /> Unlimited Acces
                </li>
                <li>
                  {" "}
                  <SlCheck className="mr-3 text-green-500" /> Single User{" "}
                </li>
                <li>
                  {" "}
                  <SlCheck className="mr-3 text-green-500" /> Unlimited Storage
                </li>
                <li>
                  {" "}
                  <SlCheck className="mr-3 text-green-500" /> 24/7 Support{" "}
                </li>
                <li>
                  {" "}
                  <SlCheck className="mr-3 text-green-500" /> Free Future
                  Updates
                </li>
              </ul>
            </div>
            <div className="pricing-btn">
              <a href="#" className="main-btn btn-hover border-btn">
                Get Start
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Pricing() {
  const [plan, setPlan] = useState("monthly");

  return (
    <section
      id="pricing"
      className="pricing-section relative z-10 pt-120 pb-120"
    >
      <div className="container">
        <div className="row flex justify-center">
          <div className="w-full md:w-9/12 lg:w-8/12 xl:w-6/12">
            <div className="section-title text-center mb-9">
              <h1 className="mb-6 ">Choose a Plan</h1>
              <p className="">
                Simple and Transparent Pricing. No credit card required to get
                started!
              </p>
            </div>
          </div>
        </div>

        <div className="pricing-nav-wrapper mb-15">
          <ul className="pricing-nav nav nav-pills flex justify-center">
            <li className="nav-item">
              <button
                className={plan === "monthly" ? "active" : ""}
                onClick={() => setPlan("monthly")}
              >
                Monthly
              </button>
            </li>
            <li className="nav-item">
              <button
                className={plan === "yearly" ? "active" : ""}
                onClick={() => setPlan("yearly")}
              >
                Yearly
              </button>
            </li>
          </ul>
        </div>

        <div className="tab-content pricing_content">
          {plan === "monthly" ? <MonthlyPlan /> : <YearlyPlan />}
        </div>
      </div>
    </section>
  );
}
