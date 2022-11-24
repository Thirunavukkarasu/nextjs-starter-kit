import React from "react";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="testimonial-section pt-8 pb-25 sm:p-0 lg:py-170"
    >
      <div className="container">
        <div className="section-title text-center">
          <h1 className="mb-8">What our customers says</h1>
        </div>
        <div className="testimonial-active-wrapper relative">
          <div className="shapes">
            <img
              src="assets/img/testimonial/testimonial-shape.svg"
              alt=""
              className="shape shape-1 hidden lg:block -left-25 top-1/2 transform -translate-y-1/2"
            />
            <img
              src="assets/img/testimonial/testimonial-dots.svg"
              alt=""
              className="shape shape-2 hidden lg:block left-150 -bottom-110 lg:-bottom-13 lg:w-1/4 xl:w-max"
            />
          </div>

          <div className="testimonial-active">
            <div className="single-testimonial">
              <div className="row flex">
                <div className="w-full lg:w-5/12">
                  <div className="testimonial-img inline-block lg:block text-left lg:text-right relative mb-8 lg:mb-0">
                    <img
                      src="assets/img/testimonial/testimonial-1.png"
                      alt=""
                      className="lg:ml-auto"
                    />
                    <div className="quote">
                      <i className="lni lni-quotation"></i>
                    </div>
                  </div>
                </div>
                <div className="w-0 lg:w-1/12"></div>
                <div className="lg:w-6/12">
                  <div className="content-wrapper">
                    <div className="content">
                      <p className="text-lg leading-7 mb-8">
                        I am really happy to work with BeanHQ. The product does
                        a great job in bringing all prospects together. The
                        collobration is really easy with fellow recruiters
                        without jumping between multiple tools.
                      </p>
                    </div>
                    <div className="info">
                      <h4 className="mb-3">Jonathon Smith</h4>
                      <p>Senior Recruiter @ MuleHQ</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-testimonial">
              <div className="row flex">
                <div className="w-full lg:w-5/12">
                  <div className="testimonial-img inline-block lg:block text-left lg:text-right relative mb-8 lg:mb-0">
                    <img
                      src="assets/img/testimonial/testimonial-2.png"
                      alt=""
                      className="lg:ml-auto"
                    />
                    <div className="quote">
                      <i className="lni lni-quotation"></i>
                    </div>
                  </div>
                </div>

                <div className="w-0 lg:w-1/12"></div>
                <div className="lg:w-6/12">
                  <div className="content-wrapper">
                    <div className="content">
                      <p className="text-lg leading-7 mb-8">
                        {`I believe, any Recruitment tool should be able to
                        manage propsects, engage, keep constant communication
                        going. With BeanHQ we have
                        found the product that can provide all three. It's a product
                        with excellent workflow automation blueprints that made a
                        difference in our Recruitment process.`}
                      </p>
                    </div>
                    <div className="info">
                      <h4 className="mb-3">Gray Simon</h4>
                      <p>Senior Recruiter @ WebQuarter</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
