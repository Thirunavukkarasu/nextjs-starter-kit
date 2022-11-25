import React from "react";
import Button from "./Button";

const links = [
  {
    href: "/features",
    text: "Features",
  },
  {
    href: "/pricing",
    text: "Pricing",
  },
  {
    href: "/blog",
    text: "Blog",
  },
  {
    href: "/about-us",
    text: "About Us",
  },
  {
    href: "/support",
    text: "Support",
  },
];

export default function Header() {
  return (
    <header className="w-full py-8">
      <div className="flex flex-row justify-between items-center md:max-w-6xl mx-auto px-6">
        <div className="cursor-pointer">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Agency</span>
          </a>
        </div>
        <div className="hidden md:block">
          <ul className="flex flex-row justify-end items-center flex-wrap grow space-x-4">
            {links.map((link, idx) => (
              <li
                key={idx}
                className="text-gray-300 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md"
              >
                <a href={link.href} className="">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-row justify-end items-center flex-wrap space-x-2">
          <button className="text-indigo-500 px-4 py-2 hover:text-gray-300">
            Sign In
          </button>
          <Button text="Sign Up" type="primary" />
        </div>
      </div>
    </header>
  );
}
