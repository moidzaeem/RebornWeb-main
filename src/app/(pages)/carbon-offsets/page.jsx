"use client";
import TracingBeam from "@/components/TracingBeam";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import ArrowLeftSvg from "@/assets/svg/ArrowLeftSvg";
import calculatePng from "../../../../public/calculate.png";
import supprotPng from "../../../../public/supprot.png";
import reducePng from "../../../../public/reduce.png";
import Image from "next/image";
import ArrowUpSvg from "@/assets/svg/ArrowUpSvg";
import ArrowDownSvg from "@/assets/svg/ArrowDownSvg";

const items = [
  {
    title: "Energy Efficiency Audits",
    content: `Identify areas for improvement in your facilities and implement energy-saving upgrades like LED lighting or smart thermostats.`,
  },
  {
    title: "Renewable Energy Procurement",
    content: `Invest in renewable energy sources like solar or wind power to reduce reliance on fossil fuels.`,
  },
  {
    title: "Employee Engagement",
    content: `Encourage eco-conscious behaviors among employees by promoting carpooling, and energy-saving practices in the workplace.`,
  },
  {
    title: "Circular Economy Principles",
    content: `Embrace practices like product lifecycle optimization, waste reduction, and responsible recycling.`,
  },
];

const howItWorksItems = [
  {
    icon: calculatePng,
    title: `Calculate your carbon footprint`,
    description: `Estimate the total amount of greenhouse gases your activities produce. Contact us to obtain your emissions report.`,
  },
  {
    icon: supprotPng,
    title: `Support projects that reduce or remove CO2`,
    description: `By purchasing carbon credits, you invest in initiatives like renewable energy generation, forest conservation, or carbon avoidance. These projects actively counteract your emissions, creating a net positive impact. You can purchase high-quality carbon credits from the RebornGreen platform.`,
  },
  {
    icon: reducePng,
    title: `Reduce your impact whenever possible`,
    description: `Reduce your impact whenever possible: Remember, offsetting is most effective when combined with efforts to minimize emissions at the source. Consider eco-friendly alternatives for travel, reduce energy consumption at home, and embrace sustainable practices in your daily life.`,
  },
];

const Page = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="overflow-hidden h-full">
      <div
        style={{
          backgroundImage:
            "url('/Untitled design - 2024-05-15T170119.931.png')",
        }}
        className=" flex-col h-[80vh] flex items-center justify-center bg-cover w-full  px-[30px] relative lg:px-[60px] xll:px-[120px] py-[6rem] mx-auto"
      >
        <motion.h3
          initial={{ y: 200 }}
          viewport={{ once: true }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className=" z-[1] leading-normal text-center lg:leading-[70px] xll:leading-[80px] text-[30px] sm:text-[50px] lg:text-[60px] xll:text-[65px] text-white font-medium font-worksans"
        >
          <span className="text-white">Start Your Net Zero Journey!</span>
        </motion.h3>
        <div className="w-full h-full absolute top-0 left-0 bg-black opacity-50 z-0"></div>
      </div>

      {/* Section 1.2 */}
      <section className="bg-white">
        <div className="w-full max-w-[1800px] my-[40px] px-[30px] lg:px-[60px] xll:px-[120px] py-[2rem] mx-auto">
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 0.5 }}
            className="flex gap-15 flex-col lg:flex-row my-20 items-center justify-center"
          >
            <div className="w-full mt-8 lg:mt-0 xsm:w-10/12 lg:flex-1 flex items-center justify-center flex-col">
              <div className="w-full xsm:w-10/12 lg:flex-1 flex items-center gap-24 text-center lg:text-start lg:items-start justify-center lg:flex-row flex-col">
                <h3 className="font-[500] w-full text-center lg:text-left mb-[20px] font-poppins text-[25px] xsm:text-[30px] lg:text-[35px] xll:text-[40px]">
                  Net zero starts with{" "}
                  <span className="text-green"> less!</span>
                </h3>
                <div>
                  <h3 className="w-fit font-black text-center lg:text-left mb-[20px] font-poppins text-[25px] xsm:text-[30px] lg:text-[35px] xll:text-[40px] text-[#223645] border-b-8 border-b-green">
                    Minmize emissions first
                  </h3>
                  <p className="leading-[30px] text-sm sm:text-[16px] font-worksans tracking-wide text-black-text">
                    The journey to net zero emissions requires a collaborative
                    effort, and businesses play a crucial role. Focusing on
                    reduction is the cornerstone of achieving net zero. Every
                    ton of CO2 your company avoids releasing translates to a
                    significant positive impact.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* accordions */}
      <section className="bg-white">
        <div
          style={{
            boxShadow: "0px 25px 50px -12px rgba(220.5, 220.5, 220.5, 0.5)",
            borderRadius: "16px",
            position: "relative",
            zIndex: 10,
            background: "white",
          }}
          className="w-[80%] mx-auto p-8"
        >
          <h3 className="w-fit font-black text-center lg:text-left mb-[20px] font-poppins text-[25px] xsm:text-[30px] lg:text-[35px] xll:text-[40px] text-[#223645]">
            Key strategies corporations can <br />
            <span className="border-b-8 border-green">
              Implement to minimize their emissions footprint.
            </span>
          </h3>
          <div className="mt-4">
            {items.map((i, index) => (
              <div key={index} className="z-10">
                <div
                  className="w-full flex justify-between items-center bg-white cursor-pointer py-4 rounded-lg"
                  onClick={() => handleToggle(index)}
                >
                  <h2 className="text-black text-base md:text-lg lg:text-xl font-medium">
                    {i.title}
                  </h2>
                  <span>
                    {activeIndex === index ? (
                      <ArrowUpSvg className="h-6 w-6" />
                    ) : (
                      <ArrowDownSvg className="h-6 w-6" />
                    )}
                  </span>
                </div>
                {activeIndex === index && i.content && (
                  <motion.div
                    initial={{ y: -20, opacity: 0.2 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{
                      y: -20,
                      opacity: 0.2,
                      transition: { duration: 0.2, type: "tween" },
                    }}
                    transition={{ duration: 0.35, type: "tween" }}
                    className="py-4"
                  >
                    <p className="text-sm md:text-base lg:text-lg text-gray-700">
                      {i.content}
                    </p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="h-25 bg-[#54CA41] rounded-2xl relative bottom-12.5 z-0 left-25 w-[80%]" />
      </section>

      <div style={{ height: 100 }} />
      <h2 className="text-center text-2xl lg:text-4xl font-light mb-10">
        Can&#39;t Avoid It? Offset It!{" "}
        <span className="text-[#5BE565] font-bold">The Sustainable Way</span>
      </h2>
      <div style={{ height: 40 }} />
      {/* image with 3 grid */}
      <section
        style={{
          backgroundImage:
            "url('https://reborngreen.co.uk/wp-content/uploads/2024/05/pexels-tomfisk-1605268-scaled.jpg')",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          opacity: 0.7,
        }}
        className="pt-[300px] lg:pl-40 pl-0"
      >
        <div className="bg-white py-20 w-full max-w-[1800px] mx-auto px-[30px] lg:px-[60px] xll:px-[120px]">
          <h3 className="font-[500] w-full mb-[20px] font-poppins text-[#1F2937] text-[25px] xsm:text-[30px] lg:text-[35px] xll:text-[40px]">
            Offsetting your emissions is a powerful tool for addressing your
            environmental footprint and contributing to a more sustainable
            future.
            <br />
            <span className="text-green">Here's how it works:</span>
          </h3>
          <div className="flex flex-col lg:flex-row gap-10">
            {howItWorksItems.map((i) => (
              <div key={i.title} className="flex-1 text-center lg:text-left">
                <Image src={i.icon} alt={i.title} className="w-fit h-auto" />
                <h3 className="text-xl font-bold mt-4 text-black">{i.title}</h3>
                <p className="mt-2 text-sm text-gray-700">{i.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div style={{ height: 200 }} />

      {/* Section 1 */}
      <section className="bg-[#F9F9F9]">
        <div className="w-full max-w-[1800px] my-[40px] px-[30px] lg:px-[60px] xll:px-[120px] py-[2rem] mx-auto">
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 0.5 }}
            className="flex gap-15 flex-col lg:flex-row my-20 items-center justify-center"
          >
            <div className="w-full mt-8 lg:mt-0 xsm:w-10/12 lg:flex-1 flex items-center justify-center flex-col">
              <div className="w-full xsm:w-10/12 lg:flex-1 flex items-center gap-24 text-center lg:text-start lg:items-start justify-center lg:flex-row flex-col">
                <h3 className="font-black text-center lg:text-left mb-[20px] font-poppins text-[25px] xsm:text-[30px] lg:text-[35px] xll:text-[40px] text-[#223645] border-b-8 border-b-green">
                  What is carbon&#39;offsetting?
                </h3>
                <p className="leading-[30px] text-sm sm:text-[16px] font-worksans tracking-wide text-black-text">
                  Carbon offsetting is a way for businesses and individuals to
                  address the greenhouse gas emissions they can’t eliminate
                  through their operations. It allows you to balance your
                  environmental impact by supporting projects that actively
                  reduce or remove carbon dioxide from the atmosphere.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* last banner */}
      <section className="bg-white">
        <div className="w-[90%] mx-auto">
          <section
            style={{
              backgroundImage:
                "url('https://reborngreen.co.uk/wp-content/uploads/2024/04/Untitled-design-73.png')",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className=" py-20 rounded-xl"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-start">
              <div className="lg:ml-36 w-full lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
                <h2
                  style={{ lineHeight: 1.5 }}
                  className="text-3xl lg:text-5xl font-semibold text-white mb-4"
                >
                  Offset Your <br /> Footprint & Make <br /> a Difference!
                </h2>
                <p
                  style={{ lineHeight: 2, fontSize: 15 }}
                  className=" text-[#B3917E] mb-6"
                >
                  Reduce your environmental footprint with high-quality projects
                  that benefit the planet. Select your plan directly from your
                  account.{" "}
                </p>
                <Link
                  href="/plant-tree-offset"
                  className="w-36 bg-blue-600 flex justify-center text-white font-semibold py-4 px-8 rounded"
                >
                  <ArrowLeftSvg className="stroke-current w-4 h-4" />
                  <ArrowLeftSvg className="stroke-current w-4 h-4" />
                  <ArrowLeftSvg className="stroke-current w-4 h-4" />
                </Link>
              </div>
              <div className="w-full lg:w-1/2 flex justify-center lg:justify-end flex-col">
                <div className=" flex  justify-center items-center">
                  <img
                    className="relative lg:top-[-200px] top-[-550px] right-0"
                    src="/Untitled-design-2024-05-29T202042.792.png"
                    alt="Phone 2"
                    width={400}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <div style={{ height: 100 }} />
    </div>
  );
};

export default Page;

const BenefitsOfTheProgram = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const items = [
    {
      title: "Flight Greener",
      content: `The program helps air travelers calculate and offset their flight emissions in less than a minute.`,
    },
    {
      title: "Environmental Benefit",
      content: `By offsetting emissions, it contributes to preserving the environment and combating climate change.`,
    },
    {
      title: "Support high-quality projects",
      content: `All carbon offsetting projects supported by RebornGreen are verified to the highest standards through the largest Carbon Certifications, including the Gold Standard Voluntary Emission Reductions (VER)`,
    },
  ];

  return (
    <div className="container mx-auto py-20 flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2 px-4">
        <h2 className="text-3xl font-bold mb-6">Benefits of the Program</h2>
        <p className="text-gray-700 mb-8">
          By providing convenient access to calculate and offset carbon
          emissions, this initiative holds significant promise. With an
          estimated 6 million individuals traveling by air daily, it possesses
          the potential to make a substantial impact in preserving the
          environment and combating climate change.
        </p>
      </div>
      <div className="md:w-1/2 px-4">
        <div className="w-[80%] bg-white mx-auto p-6">
          {items.map((item, index) => (
            <div key={index} className="my-2">
              <div
                className="w-full flex justify-between items-center  p-4 cursor-pointer rounded-lg"
                onClick={() => toggleAccordion(index)}
              >
                <h2 className="text-black text-lg">{item.title}</h2>
                <span>
                  {activeIndex === index ? (
                    <ArrowUpSvg className="h-6 w-6" />
                  ) : (
                    <ArrowDownSvg className="h-6 w-6" />
                  )}
                </span>
              </div>
              {activeIndex === index && item.content && (
                <motion.div
                  initial={{ y: -20, opacity: 0.2 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{
                    y: -20,
                    opacity: 0.2,
                    transition: { duration: 0.2, type: "tween" },
                  }}
                  transition={{ duration: 0.35, type: "tween" }}
                  className="text-sm text-neutral-700 p-4"
                >
                  <p className="text-gray-700">{item.content}</p>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const DataYouCanTrust = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (cardIndex) => {
    setHoveredCard(cardIndex);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div className="container mx-auto py-20">
      <h2 className="text-center text-2xl text-blue  mb-6">
        Flight Emissions Calculator
      </h2>
      <h3 className="text-center text-5xl font-bold mb-12 text-black">
        Data You Can Trust
      </h3>
      <div className="flex justify-center">
        <div
          className="cardxx mx-4 p-6 rounded-lg border shadow-lg transition-all duration-300 ease-in-out"
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={handleMouseLeave}
        >
          <h4 className="text-lg font-bold mb-2">Accredited</h4>
          <p className="">
            {hoveredCard === 0
              ? "Data is verified and recognized by official standards."
              : "Accredited data and methodology, fully aligned with GHG Protocol and SBTi requirements."}
          </p>
        </div>
        <div
          className="cardxx mx-4 p-6 rounded-lg border shadow-lg transition-all duration-300 ease-in-out"
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
        >
          <h4 className="text-lg font-bold mb-2">Scientific</h4>
          <p className="">
            {hoveredCard === 1
              ? "Methodologies reviewed by leading scientists."
              : "Regularly updated data and methodologies, vetted by climate scientists."}
          </p>
        </div>
      </div>
    </div>
  );
};
