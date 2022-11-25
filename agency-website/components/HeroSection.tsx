import React from "react";
import Button from "./Button";

export default function HeroSection() {
  return (
    <section className="mt-12 flex justify-center items-center mx-auto">
      <div className="max-w-6xl px-6 flex flex-col justify-center items-center">
        <div className="max-w-3xl flex flex-col justify-center items-center">
          <h1 className="text-5xl font-medium leading-relaxed text-center">
            Landing template for agencies
          </h1>
          <p className="text-xl text-gray-300 font-light text-center mt-6">
            Our landing page template works on all devices, so you only have to
            set it up once, and get beautiful results forever.
          </p>
          <div className="flex flex-row space-x-4 mt-10">
            <Button text="Start Free Trial" type="primary" />
            <Button text="Learn More" type="secondary" />
          </div>
        </div>
        <div className="mt-12">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3542&q=80"
            alt="Hero"
            className="mx-auto rounded-md"
          />
        </div>
      </div>
    </section>
  );
}
