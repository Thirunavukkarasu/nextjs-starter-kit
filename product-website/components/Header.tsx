import React from "react";

export default function Header() {
  return (
    <header className="header">
      <div className="navbar-area">
        <div className="container relative">
          <div className="flex flex-row flex-wrap items-center">
            <div className="w-full">
              <nav className="flex items-center justify-between py-4 navbar navbar-expand-lg">
                <a className="navbar-brand mr-5" href="index.html">
                  <img src="logo.png" alt="Logo" className="w-[50%] h-[50%]" />
                </a>
                <button
                  className="block navbar-toggler focus:outline-none lg:hidden"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarOne"
                  aria-controls="navbarOne"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                </button>

                <div className="absolute left-0 z-20 hidden w-full px-5 py-3 duration-300 bg-white shadow lg:w-auto collapse navbar-collapse lg:block top-full mt-full lg:static  lg:shadow-none">
                  <ul
                    id="nav"
                    className="items-center content-start mr-auto lg:justify-end navbar-nav lg:flex"
                  >
                    <li className="nav-item ml-5 lg:ml-11">
                      <a className="page-scroll active" href="#home">
                        Home
                      </a>
                    </li>
                    <li className="nav-item ml-5 lg:ml-11">
                      <a className="page-scroll" href="#features">
                        Features
                      </a>
                    </li>
                    <li className="nav-item ml-5 lg:ml-11">
                      <a className="page-scroll" href="#about">
                        About
                      </a>
                    </li>

                    <li className="nav-item ml-5 lg:ml-11">
                      <a className="page-scroll" href="#why">
                        Why
                      </a>
                    </li>
                    <li className="nav-item ml-5 lg:ml-11">
                      <a className="page-scroll" href="#pricing">
                        Pricing
                      </a>
                    </li>
                    <li className="nav-item ml-5 lg:ml-11">
                      <a className="page-scroll" href="#testimonials">
                        Clients
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
