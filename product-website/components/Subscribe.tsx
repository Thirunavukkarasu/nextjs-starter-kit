import React from "react";

export default function Subscribe() {
  return (
    <section id="contact" className="subscribe-section pt-120">
      <div className="container">
        <div
          className="subscribe-wrapper bg-no-repeat bg-center bg-cover rounded-3xl pt-16 pb-13 px-8 md:px-13"
          style={{
            backgroundImage: "url('assets/img/subscribe/subscribe-bg.svg')",
          }}
        >
          <div className="row flex items-center">
            <div className="w-full lg:w-7/12 xl:w-6/12">
              <div className="section-title mb-4">
                <h1 className="text-white mb-6">Subscribe Our Newsletter</h1>
                <p className="text-white pr-5">
                  Our BeanHQ and global circles of recruiters, enable you to hit
                  your conversion numbers!
                </p>
              </div>
            </div>
            <div className="w-full lg:w-5/12 xl:w-6/12">
              <form action="#" className="subscribe-form relative mb-4">
                <input
                  type="email"
                  name="subs-email"
                  id="subs-email"
                  placeholder="Your Email"
                  className="w-full py-5 px-8 rounded-2xl bg-white text-body-color border solid border-transparent transition duration-300 focus:shadow-xl"
                />
                <button type="submit" className="main-btn btn-hover">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
