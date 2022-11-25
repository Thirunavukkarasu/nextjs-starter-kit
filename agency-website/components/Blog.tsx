import React from "react";

function BlogCard() {
  return (
    <div className="p-4 md:w-1/3">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-top"
          src="https://images.unsplash.com/photo-1557425493-6f90ae4659fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fHRlYW18ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          alt="blog"
        />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-200 mb-1">
            CATEGORY
          </h2>
          <h1 className="title-font text-lg font-medium text-gray-300 mb-3">
            The 400 Blows
          </h1>
          <p className="leading-relaxed mb-3 text-gray-400">
            Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
            microdosing tousled waistcoat.
          </p>
          <div className="flex items-center flex-wrap">
            <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
              Learn More
            </a>
            <span className="text-gray-300 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              1.2K
            </span>
            <span className="text-gray-300 inline-flex items-center leading-none text-sm">
              6
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Blog() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto max-w-6xl">
        <h1 className="title-font sm:text-4xl text-3xl mb-12 font-medium text-gray-200 text-center">
          Refreshing news for developers and
          <br className="hidden lg:inline-block" />
          designers
        </h1>
        <div className="flex flex-wrap -m-4">
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </section>
  );
}
