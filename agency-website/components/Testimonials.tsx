import React from "react";

function TestimonialCard() {
  return (
    <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
      <div className="h-full text-center">
        <img
          alt="testimonial"
          className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
          src="https://images.unsplash.com/photo-1509868918748-a554ad25f858?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
        />
        <p className="leading-relaxed">
          {`Edison bulb retro cloud bread echo park, helvetica stumptown
        taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
        ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
        adaptogen squid fanny pack vaporware.`}
        </p>
        <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
        <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
          HOLDEN CAULFIELD
        </h2>
        <p className="text-gray-400">Senior Product Designer</p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="text-gray-300 body-font">
      <div className="container px-5 py-24 mx-auto max-w-6xl">
        <h1 className="title-font sm:text-4xl text-3xl mb-12 font-medium text-gray-200 text-center">
          What Customers Say About Us!
          <br className="hidden lg:inline-block" />
        </h1>
        <div className="flex flex-wrap -m-4">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div>
    </section>
  );
}
