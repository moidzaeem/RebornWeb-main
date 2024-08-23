"use client";
import { motion } from "framer-motion";
import {
  FaCalculator,
  FaHandHoldingHeart,
  FaSearch,
  FaTree,
} from "react-icons/fa";
import { PiPottedPlant } from "react-icons/pi";
import { LiaSearchSolid } from "react-icons/lia";
import Image from "next/image";
import ProjectsCard from "@/components/ProjectsCard";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import TextCard from "@/components/TextCard";
import PlantingPartner from "@/components/PlantingPartner";
import { Helmet } from "react-helmet";

const textcardData = [
  {
    image: "/assets/treeplanting-images/Ethiopia/3.png",
    title: "Combating climate change",
    text: "Ethiopia is one of the countries most vulnerable to climate change, and deforestation has been a major problem. Trees absorb carbon dioxide, a greenhouse gas, so planting them helps reduce Ethiopias carbon footprint.",
    btnText: "Explore Our Work",
    btnLink: "/",
  },
  {
    image: "/assets/treeplanting-images/Ethiopia/4.png",
    title: "Restoring degraded land",
    text: `Decades of deforestation and overgrazing have damaged a lot of Ethiopian land. Planting trees helps prevent soil erosion and improve soil fertility, making the land more productive again.`,
    btnText: "Learn More",
    btnLink: "/",
  },
  {
    image: "/assets/treeplanting-images/Ethiopia/5.png",
    title: "Water conservation",
    text: `Trees help regulate the water cycle, by releasing water vapor into the atmosphere and reducing evaporation from the soil. This can help alleviate drought conditions in Ethiopia.`,
    btnText: "About Us",
    btnLink: "/About US",
  },
];

const sec3TimelineData = [
  {
    id: 1,
    icon: (
      <img
        src="/assets/treeplanting-images/Madadascar/location-2955.svg"
        alt=""
      />
    ),
    title: "Location",
    desc: "Shebedino, Ethiopia",
  },
  {
    icon: (
      <img
        src="/assets/treeplanting-images/Madadascar/globe-search-12180.svg"
        alt=""
      />
    ),
    title: "Focus",
    desc: "This project focuses on reforestation efforts and livelihood enhancement activities in the Shebedino community.",
  },
  {
    icon: (
      <img
        src="/assets/treeplanting-images/Madadascar/donation-7850.svg"
        alt=""
      />
    ),
    title: "Benefits",
    desc: "Restores ecosystems, boosts biodiversity, and empowers communities (especially women) through sustainable development practices.",
  },
];

const page = () => {
  return (
    <div className="overflow-hidden h-full">
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Restore Ethiopia’s Green Legacy | Forest & Land Rehabilitation</title>
        <meta
          name="title"
          content="Restore Ethiopia’s Green Legacy | Forest & Land Rehabilitation"
        />
        <meta
          name="description"
          content="Our initiatives focus on reforestation, enhancing soil health, and supporting sustainable land management in Shebedino to combat deforestation and climate change."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://reborngreen.org" />
        <meta
          property="og:title"
          content="Restore Ethiopia’s Green Legacy | Forest & Land Rehabilitation"
        />
        <meta
          property="og:description"
          content="Our initiatives focus on reforestation, enhancing soil health, and supporting sustainable land management in Shebedino to combat deforestation and climate change."
        />
        <meta property="og:image" content="" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="http://website.com" />
        <meta
          property="twitter:title"
          content="Restore Ethiopia’s Green Legacy | Forest & Land Rehabilitation"
        />
        <meta
          property="twitter:description"
          content="Our initiatives focus on reforestation, enhancing soil health, and supporting sustainable land management in Shebedino to combat deforestation and climate change."
        />
        <meta property="twitter:image" content="" />
      </Helmet>
      <div
        style={{
          backgroundImage: "url('/assets/treeplanting-images/Ethiopia/1.png')",
        }}
        className=" flex-col   h-[95vh] flex items-center justify-center bg-cover w-full  px-[30px] relative lg:px-[60px] xll:px-[120px] py-[6rem] mx-auto"
      >
        <motion.h3
          initial={{ y: 200 }}
          viewport={{ once: true }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className=" z-[1] leading-normal text-center lg:leading-[70px] xll:leading-[80px] text-[30px] sm:text-[50px] lg:text-[60px] xll:text-[65px] text-white font-medium font-worksans"
        >
          <span className="text-white">Ethiopia </span>
        </motion.h3>
        <div className="w-full h-full absolute top-0 left-0 bg-black opacity-50 z-0"></div>
      </div>

      {/* sec 1  */}
      <section className="bg-white">
        <div className="w-full max-w-[1800px] my-[40px]   px-[30px] lg:px-[60px] xll:px-[120px] py-[2rem] mx-auto">
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 0.5 }}
            className={`flex gap-15 flex-col lg:flex-row my-20 items-center justify-center`}
          >
            <div className="  w-full mt-8 lg:mt-0 xsm:w-10/12 lg:flex-1  flex items-center justify-center flex-col">
              <div className="w-full xsm:w-10/12 lg:flex-1 flex items-center text-center lg:text-start lg:items-start  justify-center flex-col">
                <h3 className=" text-center lg:text-left mb-[20px] font-poppins text-[25px] xsm:text-[30px] lg:text-[35px] xll:text-[40px] font-[500] text-black">
                  Rebuilding Ethiopia &#39;s Forests
                </h3>
                <p className="leading-[30px] text-sm sm:text-[16px]  font-worksans tracking-wide text-black-text">
                  Ethiopia, once known as the “Green Gold of Africa”, has faced
                  significant deforestation challenges. This has led to soil
                  erosion, decreased agricultural productivity, and reduced
                  water availability. Our tree planting initiatives in Ethiopia
                  focus on restoring native forests, improving soil health, and
                  promoting sustainable land management practices for a more
                  resilient future.
                </p>
              </div>
            </div>
            <Image
              src="/assets/treeplanting-images/Ethiopia/2.png"
              width={700}
              height={600}
              alt="bussnessec2"
              loading="lazy"
              className=" rounded-lg w-full sm:w-[80%] mdd:w-[50%] h-auto"
            />
          </motion.div>
        </div>
      </section>
      {/* Section 2 */}
      <section className="w-full bg-white mt-10 max-w-[1800px] mb-[60px]  px-[30px] lg:px-[60px] xll:px-[120px] py-[4rem] mx-auto">
        <h1 className="text-center mb-[20px] font-poppins text-[30px] xsm:text-[40px] lg:text-[50px] xll:text-[55px] font-[500] text-[#3d3d3d]">
          <span className="font-semibold text-black">
            Why Restore in Ethiopia ?
          </span>
        </h1>
        <div className="flex gap-6 flex-wrap items-center justify-center">
          {textcardData?.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(${item.image})`,
                filter: "brightness(1.5)",
              }}
              className={`${
                index !== 1 ? "ima " : ""
              }w-full xsm:w-[90%] flex items-end relative bg-cover bg-no-repeat justify-between duration-500 hover:scale-110 md:w-[48%] xlg:w-[30%] xll:w-[30%] h-full rounded-xl shadow-lg border min-h-[520px]`}
            >
              <div className="gap-y-5 mb-20 relative z-20 text-center w-full h-full rounded-xl flex items-center justify-center flex-col p-4">
                <div>
                  <h2 className="text-[#ffffff] text-[18px] xsm:text-[24px] font-worksans font-semibold">
                    {item.title}
                  </h2>
                  <p className="text-[14px] tracking-wide capitalize text-[#ffffffc2] font-poppins mt-3">
                    {item.text}
                  </p>
                </div>
              </div>
              <div className="w-full h-full absolute top-0 left-0 bg-black opacity-40 z-0"></div>
            </div>
          ))}
        </div>
      </section>
      {/* sec 23 */}

      <section className="bg-[#f6f6f6]">
        <section className="w-full flex items-center justify-start flex-col   max-w-[1800px]  px-[30px] lg:px-[60px] xll:px-[120px] py-[4rem] mx-auto">
          <motion.div
            initial={{ y: 200 }}
            viewport={{ once: true }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full flex flex-col items-center justify-center"
          >
            <h1 className="text-center mb-[20px] font-poppins text-[30px] xsm:text-[35px] lg:text-[50x] xll:text-[55px] font-[500] text-black">
              Reforestation and Livelihood Support in Shebedino Community
            </h1>
          </motion.div>
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 0.5 }}
            className="flex gap-28 flex-col  my-20 items-start justify-start w-full lg:p-32 xs:p:0"
          >
            <ul className="timeline timeline-snap-icon timeline-compact timeline-vertical">
              {sec3TimelineData?.map((item, index) => {
                return (
                  <li key={item.id}>
                    <hr />
                    <div className="timeline-middle w-[80px] text-white text-2xl h-[80px] flex items-center justify-center font-semibold  rounded-full mx-3">
                      {item.icon}
                    </div>
                    <div className="timeline-end  px-4 py-6 mb-10">
                      <h5 className="text-black-text text-[20px] font-semibold mb-1 font-poppins">
                        {item.title}
                      </h5>
                      <p className="text-[#6E6B6B] font-medium text-[14px] font-worksans">
                        {item.desc}
                      </p>
                    </div>
                    <hr />
                  </li>
                );
              })}
            </ul>
            <Image
              src="/assets/treeplanting-images/Ethiopia/6.png"
              width={800}
              height={600}
              alt="bussnessec2"
              loading="lazy"
              className=" rounded-lg w-full  h-auto"
            />
            <div className="w-full flex flex-col items-end justify-end">
              <Image
                src="/pla.png"
                width={800}
                height={600}
                alt="bussnessec2"
                loading="lazy"
                className=" rounded-lg w-[180px]  h-auto lg:mr-24"
              />
              <p className="text-[black] mt-8 font-medium text-[24px] lg:mr-24">
                Planting Partner
              </p>
            </div>
          </motion.div>
        </section>
      </section>
    </div>
  );
};

export default page;
