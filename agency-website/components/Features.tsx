import React from "react";
import { SiHatenabookmark, SiPowers, SiCampaignmonitor } from "react-icons/si";

const features = [
  {
    icon: <SiCampaignmonitor className="w-10 h-10 mx-auto" />,
    title: "Acquisition",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus dicta eos perspiciatis, commodi.",
  },
  {
    icon: <SiHatenabookmark className="w-10 h-10 mx-auto" />,
    title: "Activation",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus dicta eos perspiciatis, commodi.",
  },
  {
    icon: <SiPowers className="w-10 h-10 mx-auto" />,
    title: "Retention",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus dicta eos perspiciatis, commodi.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="flex flex-col justify-center items-center mt-24"
    >
      <div className="max-w-3xl">
        <h1 className="text-4xl font-medium leading-relaxed text-center">
          Built exclusively for you
        </h1>
        <p className="font-normal leading-normal text-center text-gray-300 mt-2">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit laborum — semper quis lectus nulla.
        </p>
      </div>
      <div className="max-w-5xl flex flex-col md:flex-row mt-16 px-6">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-center items-center text-center space-y-4"
          >
            <div className="w-20 h-20 bg-indigo-500 rounded-full  flex justify-start items-center hover:bg-gray-500 hover:text-white hover:scale-110 transition duration-100 ease-in">
              {feature.icon}
            </div>
            <h4 className="text-xl font-bold">{`${idx + 1}. ${
              feature.title
            }`}</h4>
            <p className="text-small text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
