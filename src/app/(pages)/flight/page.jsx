"use client";
import FlightTimeLine from "@/components/FlightGoals";
import { easeIn, easeInOut, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import React from "react";
import { CiCalculator1, CiFlag1, CiMobile1 } from "react-icons/ci";
import { FaCalculator, FaHandHolding, FaRegClock } from "react-icons/fa";

const GoalTimeLineData = [
  {
    id: 1,
    img: "/assets/timel1.svg",
    text: "Attach the Tag to Your Luggage",
    rgt: false,
    icon: <CiFlag1 width={25} className={"text-green text-2xl"} />,
  },
  {
    id: 2,
    img: "/assets/timel2.svg",
    text: "Simply Touch it to the Back of Your Phone or Scan the QR Code Located on the Back",
    rgt: true,
    icon: <CiMobile1 width={25} className={"text-green text-2xl"} />,
  },
  {
    id: 3,
    img: "/assets/timel1.svg",
    text: "You Will Be Directed to Our Flight Carbon Emissions Calculator",
    rgt: false,
    icon: <CiCalculator1 width={25} className={"text-green text-2xl"} />,
  },
  {
    id: 4,
    img: "/assets/timel2.svg",
    text: "Select a Verified Carbon Credits Project and Offset Your Emissions",
    rgt: true,
    icon: <FaHandHolding width={25} className={"text-green text-2xl"} />,
  },
];

const page = () => {
  return (
    <div className="overflow-hidden h-full">
      <div
        style={{ backgroundImage: "url('/assets/images/airplaneimg.jpg')" }}
        className=" flex-col h-[80vh] flex items-center justify-center bg-cover w-full  bg-center px-[30px] relative lg:px-[60px] xll:px-[120px] py-[6rem] mx-auto"
      >
        <motion.h3
          initial={{ y: 200 }}
          viewport={{ once: true }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className=" z-[1] leading-normal text-center lg:leading-[70px] xll:leading-[80px] text-[30px] sm:text-[50px] lg:text-[60px] xll:text-[65px] text-white font-medium font-worksans"
        >
          Project Create by Us{","} Supported by You{","} For Our
          <span className="text-green font-bold">Planet</span>
        </motion.h3>

        <div className="w-full h-full absolute top-0 left-0 bg-black opacity-20 z-0"></div>
      </div>

      {/* section 1  */}
      <section className="bg-[#ffffff]">
        <div className="w-full max-w-[1800px] my-[40px]   px-[30px] lg:px-[60px] xll:px-[120px] py-[2rem] mx-auto">
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 0.5 }}
            className={`flex gap-15 flex-col lg:flex-row my-20 items-center justify-center`}
          >
            <div className="flex-1 flex items-center justify-center">
              <Image
                src="/assets/images/mob-sec1.png"
                width={600}
                height={600}
                alt="bussnessec2"
                loading="lazy"
                className=" rounded-lg w-full lg:w-[500px]  object-cover h-auto sm:h-[400px] lg:h-[550px]"
              />
            </div>
            <div className="  w-full mt-8 lg:mt-0 xsm:w-10/12 lg:flex-1  flex items-center justify-center flex-col">
              <div className="w-full xsm:w-10/12 lg:flex-1 flex items-center t  justify-center flex-col">
                <Image
                  src="/assets/images/co2reduc.png"
                  width={100}
                  height={100}
                  alt="Co2 reduction"
                  loading="lazy"
                  className=" rounded-lg w-[160px]  object-cover h-auto "
                />

                <h3 className=" text-center  mb-[20px] font-sans text-[25px] xsm:text-[30px] xll:text-[30px] font-[500] text-green">
                  Flight Carbon Offset Luggage Tag
                </h3>
                <p className="leading-[30px] text-sm sm:text-[15px]  font-sans  text-black-text">
                  Our first and unique project was created to reduce flight
                  emissions{"."}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Goal Time Line Section 2 */}
      <section className="w-full bg-[#f6f6f6] mt-10 max-w-[1800px] mb-[60px]  px-[30px] lg:px-[60px] xll:px-[120px] py-[4rem] mx-auto">
        <motion.div
          initial={{ y: 200 }}
          viewport={{ once: true }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full flex flex-col items-center justify-center"
        >
          <h1 className="text-center mb-[20px] font-poppins text-[30px] xsm:text-[40px] lg:text-[55px] xll:text-[60px] font-[500] text-[#3d3d3d]">
            <span className="font-bold text-[#14a800]"> How it works</span>
          </h1>
          <p className=" mb-12 w-full xsm:w-[90%] leading-5 tracking-normal font-worksans mdd:w-[60%] text-center text-black-text text-sm xsm:text-[16px]">
            About the Luggage Tag
          </p>
        </motion.div>

        <div className="timeLine  relative w-full mx-auto bg-[#F3F4F9] py-[5rem] rounded-xl my-[100px]">
          {GoalTimeLineData?.map((item) => (
            <FlightTimeLine
              key={item.id}
              img={item.img}
              text={item.text}
              id={item.id}
              rgt={item.rgt}
              icon={item.icon}
            />
          ))}
        </div>
      </section>

      {/* section 3  */}
      <section className="bg-[#ffffff]">
        <div className="w-full max-w-[1800px] my-[40px]   px-[30px] lg:px-[60px] xll:px-[120px] py-[2rem] mx-auto">
          <motion.div
            initial={{ y: 200 }}
            viewport={{ once: true }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full flex flex-col items-center justify-center"
          >
            <h1 className="text-center mb-[20px] font-poppins text-[30px] xsm:text-[40px] lg:text-[50px]  font-[500] text-[#3d3d3d]">
              Crafted from Sustainable
              <span className="font-bold text-[#14a800]"> Materials</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 0.5 }}
            className={`flex gap-15 flex-col lg:flex-row lg:my-0 my-20 items-center justify-center`}
          >
            <div className="flex-1 flex items-center relative justify-center">
              <Image
                src="/assets/boombo.jpg"
                width={600}
                height={600}
                alt="bussnessec2"
                loading="lazy"
                className=" rounded-lg w-full lg:w-[600px]  object-cover h-auto"
              />
              <Image
                src="/assets/latex.JPG"
                width={600}
                height={600}
                alt="bussnessec2"
                loading="lazy"
                className=" rounded-lg w-[140px] xsm:w-[200px] lg:w-[300px] xll::w-[400px] absolute top-0 left-0 lg:left-[-60px]  object-cover h-auto"
              />
            </div>
            <div className="  w-full mt-8 lg:mt-0 xsm:w-10/12 lg:flex-1  flex items-center justify-center flex-col">
              <div className="w-full text-center lg:text-left   xsm:w-10/12 lg:flex-1 flex items-center lg:items-start  justify-center lg:justify-start flex-col">
                <Image
                  src="/assets/logos/ecofrendly.png"
                  width={200}
                  height={200}
                  alt="bussnessec2"
                  loading="lazy"
                  className=" w-[50px]  object-cover h-auto"
                />
                <h3 className="   mb-[0px] font-sans text-[25px] xsm:text-[30px] xll:text-[30px] font-[500] text-green">
                  Bamboo
                </h3>
                <p className="leading-[30px] text-sm sm:text-[16px] font-normal  font-sans  text-black-text">
                  Bamboo is a rapidly renewable resource that requires minimal
                  water and thrives without pesticides{"."}
                </p>

                <Image
                  src="/assets/logos/hnd.png"
                  width={200}
                  height={200}
                  alt="bussnessec2"
                  loading="lazy"
                  className=" w-[50px] mt-5 object-cover h-auto"
                />
                <h3 className=" mb-[0px] font-sans text-[25px] xsm:text-[30px] xll:text-[30px] font-[500] text-green">
                  Latex
                </h3>
                <p className="leading-[30px] text-sm sm:text-[16px] font-normal  font-sans  text-black-text">
                  Latex is a natural{","} renewable material derived from the
                  rubber tree{"."}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* section 4  */}
      <section className="bg-[#f9f9f9]">
        <div className="w-full max-w-[1800px] my-[40px]   px-[30px] lg:px-[60px] xll:px-[120px] py-[2rem] mx-auto">
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 0.5 }}
            className={`flex gap-15 flex-col lg:flex-row my-20 items-center justify-center`}
          >
            <div className="flex-1 flex text-center lg:text-left items-center lg:items-start relative justify-center flex-col">
              <h3 className="   mb-[0px] font-sans text-[25px] xsm:text-[30px] xll:text-[30px] font-[500] text-green">
                Benefits of the Program
              </h3>
              <p className="leading-[30px] text-sm sm:text-[16px] font-normal  font-sans  text-black-text">
                By providing convenient access to calculate and offset carbon
                emissions{","} this initiative holds significant promise{"."}{" "}
                With an estimated 6 million individuals traveling by air daily
                {","} it possesses the potential to make a substantial impact in
                preserving the environment and combating climate change{"."}
              </p>
            </div>

            <div className="  w-full mt-8 lg:mt-0 xsm:w-10/12 lg:flex-1  flex items-center justify-center flex-col">
              <div className="w-full xsm:w-10/12 lg:flex-1 shadow-xl rounded-lg py-5 px-2 flex items-start  justify-start flex-col">
                {/* Acorian */}
                <div className="collapse collapse-arrow bg-white">
                  <input type="radio" name="my-accordion-2" defaultChecked />
                  <div className="collapse-title mb-[0px] font-poppins text-[18px] xsm:text-[20px] font-semibold text-[#504545]">
                    Flight Greener
                  </div>
                  <div className="collapse-content">
                    <p>
                      The program helps air travelers calculate and offset their
                      flight emissions in less than a minute{"."}
                    </p>
                  </div>
                </div>
                {/* Acorian */}
                <div className="collapse collapse-arrow bg-white">
                  <input type="radio" name="my-accordion-2" defaultChecked />
                  <div className="collapse-title mb-[0px] font-poppins text-[18px] xsm:text-[20px] font-semibold text-[#504545]">
                    Environmental Benefit{" "}
                  </div>
                  <div className="collapse-content">
                    <p>
                      By offsetting emissions{","} it contributes to preserving
                      the environment and combating climate change{"."}
                    </p>
                  </div>
                </div>
                {/* Acorian */}
                <div className="collapse collapse-arrow bg-white">
                  <input type="radio" name="my-accordion-2" defaultChecked />
                  <div className="collapse-title mb-[0px] font-poppins text-[18px] xsm:text-[20px] font-semibold text-[#504545]">
                    Support high-quality projects{" "}
                  </div>
                  <div className="collapse-content">
                    <p>
                      All carbon offsetting projects supported by RebornGreen
                      are verified to the highest standards through the largest
                      Carbon Certifications{","} including the Gold Standard
                      Voluntary Emission Reductions (VER)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* section 5  */}
      <section className="w-full flex items-center justify-start flex-col bg-white mt-10 max-w-[1800px] mb-[60px]  px-[30px] lg:px-[60px] xll:px-[120px] py-[4rem] mx-auto">
        <motion.div
          initial={{ y: 200 }}
          viewport={{ once: true }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full flex flex-col items-center justify-center"
        >
          <h1 className="text-center mb-[20px] font-poppins text-[30px] xsm:text-[40px] lg:text-[55px] xll:text-[60px] font-[500] text-[#3d3d3d]">
            Data You Can
            <span className="font-bold text-[#14a800]"> Trust</span>
          </h1>
          <p className=" mb-12 w-full xsm:w-[90%] leading-5 tracking-normal font-worksans mdd:w-[60%] text-center text-black-text text-sm xsm:text-[16px]">
            Flight Emissions Calculator
          </p>
        </motion.div>

        {/* card 1   */}
        <motion.div
          initial={{ y: 200 }}
          viewport={{ once: true }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center mt-6 justify-center gap-7 sm:gap-16 flex-wrap"
        >
          {/* card 1   */}
          <div className=" relative w-[340px] sm:w-[500px] hover:scale-110 duration-300 flex items-center justify-center flex-col text-center px-4 py-5 min-h-[200px] bg-secondary  z-10 rounded-xl">
            <div className="thecard ">
              <div className="front  gap-y-3 text-center rounded-xl flex items-center justify-center flex-col bg-[#f6f6f6] p-6">
                {/* <Image src={img} alt='card image' width={60} height={60} /> */}
                <div>
                  <h2 className=" text-green text-[16px] xsm:text-[20px] font-worksans font-semibold">
                    Accredited
                  </h2>
                  <p className=" text-[12px] xsm:text-sm text-earthy-brown">
                    Accredited data and methodology{","} fully aligned with SHG
                    Protocol and SBYI requirements{"."}
                  </p>
                </div>
              </div>
              <div className="Flightbacked bg-secondary flex items-center justify-center rounded-xl p-4 ">
                <p className=" text-[12px] xsm:text-[16px] xsm:text-sm text-black">
                  Data from 30+ sources is now easily ingestible in a structured
                  format{","} enriched with metadata such as validity year{","}{" "}
                  source{","}
                  CO2e calculation method{","} region{","} quality flags{","}{" "}
                  and LCA activity{"."}
                </p>
              </div>
            </div>
          </div>

          {/* card 2  */}
          <div className=" relative w-[340px] sm:w-[500px] hover:scale-110 duration-300 flex items-center justify-center flex-col text-center px-4 py-5 min-h-[200px] bg-sec  z-10 rounded-xl">
            <div className="thecard ">
              <div className="front  gap-y-3 text-center rounded-xl flex items-center justify-center flex-col bg-[#f6f6f6] p-6">
                <FaRegClock size={30} className="text-green" />

                <div>
                  <h2 className=" text-green text-[16px] xsm:text-[20px] font-worksans font-semibold">
                    Scientific
                  </h2>
                  <p className=" text-[12px] xsm:text-sm text-earthy-brown">
                    Regularly updated data and methodologies{","} vetted by
                    climate scientists{"."}.
                  </p>
                </div>
              </div>
              <div className="Flightbacked bg-secondary flex items-center justify-center rounded-xl p-4 ">
                <p className=" text-[12px] xsm:text-[16px] xsm:text-sm text-black">
                  Our data is verified through expert manual review and
                  AI-driven outlier detection{","} audited by scientists{","}{" "}
                  and overseen by a panel of respected environmental experts
                  {"."}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* section 6  */}
      <section className="bg-[#ffffff]">
        <div className="w-full max-w-[1800px] my-[40px]   px-[30px] lg:px-[60px] xll:px-[120px] py-[2rem] mx-auto">
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 0.5 }}
            className={`flex gap-15 flex-col lg:flex-row my-20 items-center lg:items-start justify-center`}
          >
            <div className="  w-full mt-8 lg:mt-0 xsm:w-10/12 lg:flex-1 px-1 ssm:px-5 xsm:px-10 text-center lg:text-left  flex items-center lg:items-start justify-center flex-col">
              <h3 className="   mb-[0px] font-sans text-[25px] xsm:text-[30px] xll:text-[30px] font-[500] text-dark">
                Calculate the Carbon Footprint of Your{" "}
                <span className="text-green">Flight</span>
              </h3>
              <p className="leading-[30px] text-sm sm:text-[16px] font-normal  font-sans  text-black-text">
                Utilize RebornGreen{"'"}s flight calculator to determine the
                carbon footprint of your flight and offset it by supporting
                environmentally beneficial initiatives{"."}
              </p>
              <Link href="/calculator">
                <button className="border-none text-white rounded-sm hover:bg-secondary transition-all duration-500 outline-none px-5 hover:scale-95 py-5 my-6 bg-green flex items-center gap-2">
                  Flight Emissions Calculator <FaCalculator />
                </button>
              </Link>
            </div>

            <div className="flex-1 flex items-center relative justify-center">
              <Image
                src="/assets/images/airplaneimg.jpg"
                width={600}
                height={600}
                alt="bussnessec2"
                loading="lazy"
                className=" rounded-lg w-full lg:w-[600px]  object-cover h-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* section 7  */}
      <section className="bg-[#ffffff]">
        <div className="w-full max-w-[1800px] my-[40px]   px-[30px] lg:px-[60px] xll:px-[120px] py-[2rem] mx-auto">
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 0.5 }}
            className={`flex gap-15 flex-col lg:flex-row my-20 items-center bg-secondary rounded-xl  justify-center`}
          >
            <div className="  w-full mt-8 lg:mt-0 xsm:w-10/12 lg:flex-1 px-1 ssm:px-5 xsm:px-10 text-center lg:text-left  flex items-center lg:items-start justify-center flex-col">
              <h3 className="   mb-[0px] font-sans text-[25px] xsm:text-[30px] xll:text-[30px] font-[500] text-[#fcfbfb]">
                Order Your Luggage Tag Today and Start Flying Greener
              </h3>
              <p className="leading-[30px] text-sm sm:text-[16px] font-normal  font-sans  text-[#fcfbfb]">
                Travel sustainably with RebornGreen{`’`}s Flight Offset Luggage
                Tag. Offset your carbon footprint effortlessly and support
                climate projects with every journey.
              </p>

              <div className="flex items-center flex-wrap gap-2">
                <button className="border-none text-white rounded-lg hover:bg-white hover:text-black transition-all duration-500 outline-none px-10  hover:scale-95 py-3 my-6 bg-blue-700 flex items-center gap-2">
                  Buy Now
                </button>
                {/* <Link href={'/contact'} className="border-none text-black rounded-lg hover:text-white hover:bg-blue-700 transition-all duration-500 outline-none px-10  hover:scale-95 py-3 my-6 bg-white flex items-center gap-2">
                  Contact us
                  </Link> */}
              </div>
            </div>

            <div className="flex-1 flex items-center lg:items-start flex-col justify-center">
              <Image
                src="/assets/images/mob-sec1.png"
                width={600}
                height={600}
                alt="bussnessec2"
                loading="lazy"
                className=" rounded-lg w-full lg:w-[400px]  object-cover h-auto sm:h-[450px]"
              />
              <p className="leading-[30px] text-center px-2 py-10 text-sm sm:text-[16px] font-normal  font-sans  text-[#fcfbfb]">
                For bulk or corporate orders please{" "}
                <Link href={"/contact"} className="font-bold text-white">
                  get in touch
                </Link>{" "}
                with us
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default page;
