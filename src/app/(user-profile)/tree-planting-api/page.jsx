import React from "react";
import KeySvg from "../../../assets/svg/KeySvg";
import GreenWorldSvg from "../../../assets/svg/GreenWorldSvg";
import KeyFeaturesSvg from "../../../assets/svg/KeyFeaturesSvg";
import Link from "next/link";

const page = () => {
  const howItWork = [
    {
      heading: "Add it to Your Site",
      text: "Put our API on your website or app.",
    },
    {
      heading: "Choose a Trigger",
      text: "Decide when to plant a tree (like a sale or new user).",
    },
    {
      heading: "We Plant a Tree",
      text: "Every time your trigger happens, we plant a tree",
    },
    {
      heading: "See Your Impact",
      text: "Watch your trees grow and help the planet.",
    },
  ];

  const whatYouGet = [
    { heading: "Easy to Use", description: "Simple to add to your website." },
    { heading: "Affordable", description: "Just £0.75 per tree." },
    {
      heading: "Global Impact",
      description: "Trees planted in various reforestation projects worldwide.",
    },
    {
      heading: "Track Your Trees",
      description: "See where your trees are making a difference.",
    },
    {
      heading: "High-Quality Planting",
      description: "We partner with trusted reforestation organizations.",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-4 lg:gap-5">
      <div className="bg-[#ffffff]/70 flex flex-col lg:flex-row items-center justify-between p-7.5 rounded-[20px] gap-4 lg:gap-10">
        <h3 className="text-[34px] lg:text-[40px] text-green text-center md:text-left font-medium">
          Plant a Tree, Make a Difference
        </h3>
        <button className="bg-green flex items-center gap-2.5 px-8 lg:px-11 py-2.5 lg:py-3.5 rounded-lg text-white font-poppins">
          Generate API KEY <KeySvg className="w-6 h-6 fill-current" />
        </button>
      </div>
      <div className="grid grid-cols-5 gap-4 lg:gap-5">
        <div className="col-span-5 md:col-span-3 bg-[#ffffff]/70 flex flex-col items-center py-7 lg:py-8.5 px-5 lg:px-8 rounded-[20px]">
          <GreenWorldSvg className="w-16 h-16" />
          <h4 className="mt-4 lg:mt-7.5 text-[22px] lg:text-[34px] text-green font-medium text-center">
            Our simple tool helps you grow a greener world
          </h4>
          <p className="mt-4 text-[13px] lg:text-lg text-black font-medium text-center">
            Want to help the planet? With our API, you can plant trees every
            time someone buys something, signs up, or does something on your
            website. It's easy to use and good for the Earth.
          </p>
        </div>
        <div className="col-span-5 md:col-span-2 bg-[#ffffff]/70 flex flex-col items-center py-7.5 px-8 lg:px-5 rounded-[20px]">
          <div className="flex items-center lg:flex-col gap-3.5">
            <KeyFeaturesSvg className="w-16 h-16" />
            <h4 className="text-[22px] lg:text-[34px] text-green font-medium">
              Key Features
            </h4>
          </div>
          <h5 className="mt-8 lg:mt-3 text-lg lg:text-[22px] text-green font-medium">
            Easy Integration
          </h5>
          <p className="mt-4 lg:mt-5 text-[13px] lg:text-lg text-black font-medium text-center">
            Our API is designed for hassle-free implementation.
          </p>
          <button className="mt-4 bg-green flex items-center gap-2.5 px-8 lg:px-11 py-2.5 lg:py-3.5 rounded-lg text-white font-poppins">
            API documentation
          </button>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4 lg:gap-5">
        <div className="col-span-12 md:col-span-5 bg-[#ffffff]/70 flex flex-col items-center gap-4 lg:gap-5 py-7 lg:py-8.5 px-5 lg:px-8 rounded-[20px]">
          <h4 className="text-[22px] lg:text-[34px] text-green font-medium text-center">
            How it Works
          </h4>
          <div className="flex flex-col gap-1 items-start w-full">
            {howItWork.map((item, index) => (
              <span key={index} className="text-[13px] lg:text-lg text-green">
                <span className="pr-2.5 lg:pr-4">{index + 1}.</span>
                {item.heading}: <span className="text-black">{item.text}</span>
              </span>
            ))}
          </div>
        </div>
        <div className="col-span-12 md:col-span-7 bg-[#ffffff]/70 flex flex-col items-center gap-4 lg:gap-5 py-7 lg:py-8.5 px-5 lg:px-8 rounded-[20px]">
          <h4 className="text-[22px] lg:text-[34px] text-green font-medium text-center">
            What You Get
          </h4>

          <div className="flex flex-col gap-1 items-start w-full">
            <ul className="!list-disc !list-inside marker:!text-green">
              {whatYouGet.map((item, index) => (
                <li key={index} className="text-[13px] lg:text-lg text-green">
                  {item.heading}:
                  <span className="text-black"> {item.description}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#ffffff]/80 flex flex-col items-center px-3 py-7 lg:px-10 lg:py-12.5 rounded-[20px] gap-3.5">
        <div className="flex flex-col items-center gap-1">
          <h3 className="text-[22px] lg:text-[34px] text-green font-medium">
            Join the Movement
          </h3>
          <p className="text-[13px] lg:text-lg text-black font-medium text-center">
            Become part of the solution to climate change. Let's create a
            greener future together. Ready to get started?{" "}
            <Link href="/contact" className="text-green">
              Contact us
            </Link>{" "}
            to learn more about our API and how it can benefit your business.
          </p>
        </div>
      </div>
      page
    </div>
  );
};

export default page;
