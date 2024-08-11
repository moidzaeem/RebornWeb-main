"use client";
import FlightTimeLine from "@/components/FlightGoals";
import { easeIn, easeInOut, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiCalculator1 } from "react-icons/ci";
import { HiUsers } from "react-icons/hi";
import {
  FaCalculator,
  FaChevronRight,
  FaHandHolding,
  FaRegClock,
  FaShoppingBasket,
  FaStamp,
  FaTimes,
  FaTree,
} from "react-icons/fa";
import exploreProjects from "../../../../public/assets/coffee/Explore-Projects.webp";

const GoalTimeLineData = [
  {
    id: 1,
    img: "/assets/coffee/coftime1.png",
    text: "The Coffee Shop Orders Loyalty Cards from Us",
    rgt: false,
    icon: <FaShoppingBasket width={25} className={"text-green text-2xl"} />,
  },
  {
    id: 2,
    img: "/assets/timel2.svg",
    text: "Customers Can Get Our Loyalty Cards and Collect Stamps for Each Coffee",
    rgt: true,
    icon: <HiUsers width={25} className={"text-green text-2xl"} />,
  },
  {
    id: 3,
    img: "/assets/timel1.svg",
    text: "Once the Card is Complete with a Certain Number of Stamps, We Receive the Order from the Coffee Shop",
    rgt: false,
    icon: <FaStamp width={25} className={"text-green text-2xl"} />,
  },
  {
    id: 4,
    img: "/assets/timel2.svg",
    text: "On Behalf of Their Customers, We Will Plant a Tree for Each Completed Card",
    rgt: true,
    icon: <FaTree width={25} className={"text-green text-2xl"} />,
  },
];

const page = () => {
  return (
    <div className="overflow-hidden h-full">
      <div
        style={{ backgroundImage: "url('/assets/coffee/header.png')" }}
        className=" flex-col h-[80vh] flex items-center justify-center bg-cover w-[110%] left-[-20px]  bg-top px-[30px] relative lg:px-[60px] xll:px-[120px] py-[6rem] mx-auto"
      >
        <motion.h3
          initial={{ y: 200 }}
          viewport={{ once: true }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className=" z-[1] leading-normal text-center lg:leading-[70px] xll:leading-[80px] text-[30px] sm:text-[50px] lg:text-[60px] xll:text-[65px] text-white font-medium font-worksans"
        >
          Project Create by Us, Supported by You, For Our{" "}
          <span className="text-green font-bold">Planet</span>
        </motion.h3>

        <div className="w-full h-full absolute top-0 left-0 bg-black opacity-40 z-0"></div>
      </div>

      {/* section 1  */}
      <section className="bg-[#f9f9f9]">
        <div className="w-full max-w-[1800px] my-[40px]   px-[30px] lg:px-[60px] xll:px-[120px] py-[2rem] mx-auto">
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 0.5 }}
            className={`flex gap-15 flex-col-reverse lg:flex-row my-20 items-center justify-center`}
          >
            <div className="flex-1 flex items-center justify-center">
              <Image
                src="/assets/coffee/cosec2.png"
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
                  src="/assets/coffee/co2.svg"
                  width={100}
                  height={100}
                  alt="Co2 reduction"
                  loading="lazy"
                  className=" rounded-lg w-[160px]  object-cover h-auto "
                />

                <h3 className=" text-center  mb-[20px] font-sans text-[25px] xsm:text-[30px] xll:text-[30px] font-[500] text-green">
                  Coffee Shop Loyalty Program
                </h3>
                <p className="leading-[30px] text-sm sm:text-[15px]  font-sans text-center text-black-text">
                  Our Second and unique project was created to help the
                  environment by planting trees.
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
            {" "}
            <span className="font-bold text-[#14a800]">How it works</span>
          </h1>
          <p className=" mb-12 w-full xsm:w-[90%] leading-5 tracking-normal font-worksans mdd:w-[60%] text-center text-black-text text-sm xsm:text-[16px]">
            About the Coffee Shop Loyalty Program
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

      {/* section 4  */}
      <section className="bg-[#ffffff]">
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
                With about 1 billion out of 8 billion people drinking coffee
                every day, this program can plant millions of trees and inspire
                millions of people to make something good for the planet while
                enjoying their coffee.
              </p>
            </div>

            <div className="  w-full mt-8 lg:mt-0 xsm:w-10/12 lg:flex-1  flex items-center justify-center flex-col">
              <div className="w-full xsm:w-10/12 lg:flex-1 shadow-xl rounded-lg py-5 px-2 flex items-start  justify-start flex-col">
                {/* Acorian */}
                <div className="collapse collapse-arrow bg-white">
                  <input type="radio" name="my-accordion-2" defaultChecked />
                  <div className="collapse-title mb-[0px] font-poppins text-[18px] xsm:text-[20px] font-medium text-[#626672;]">
                    Environmental Benefit
                  </div>
                  <div className="collapse-content">
                    <p className="text-[#a18c8c]">
                      This program directly translates customer loyalty into a
                      positive environmental action. By simply enjoying their
                      coffee, customers contribute to reforestation efforts.
                    </p>
                  </div>
                </div>
                {/* Acorian */}
                <div className="collapse collapse-arrow bg-white">
                  <input type="radio" name="my-accordion-2" defaultChecked />
                  <div className="collapse-title mb-[0px] font-poppins text-[18px] xsm:text-[20px] font-medium text-[#626672;]">
                    Increased Customer Loyalty{" "}
                  </div>
                  <div className="collapse-content">
                    <p className="text-[#a18c8c]">
                      Customers are rewarded with a positive environmental
                      impact for their continued patronage. This can build brand
                      loyalty and positive associations with the coffee shop.
                    </p>
                  </div>
                </div>
                {/* Acorian */}
                <div className="collapse collapse-arrow bg-white">
                  <input type="radio" name="my-accordion-2" defaultChecked />
                  <div className="collapse-title mb-[0px] font-poppins text-[18px] xsm:text-[20px] font-medium text-[#626672;]">
                    Sustainable Partnership{" "}
                  </div>
                  <div className="collapse-content">
                    <p className="text-[#a18c8c]">
                      Customers don’t need to go out of their way to make a
                      difference. Their everyday coffee routine becomes an
                      opportunity to support environmental well-being. (VER)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* section 5  */}
      <section className="bg-[#ffffff]">
        <div className="w-full max-w-[1800px] my-[40px]   px-[30px] lg:px-[60px] xll:px-[120px] py-[2rem] mx-auto">
          <motion.div
            initial={{ y: 200 }}
            viewport={{ once: true }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full flex flex-col items-center justify-center"
          >
            <h1 className="text-center mb-[20px] font-poppins text-[25px] xsm:text-[35px] lg:text-[45px] font-[500] text-[#3d3d3d]">
              Help Us Plant Trees Where They Are Most Needed
            </h1>
            <p className=" mb-12 w-full xsm:w-[90%] leading-5 tracking-normal font-worksans mdd:w-[60%] text-center text-black-text text-sm xsm:text-[16px]">
              Learn more about the tree-planting projects waiting for your
              support.
            </p>
          </motion.div>

          <div className="flex-1 relative flex-col flex items-center justify-center">
            <Image
              src={exploreProjects}
              alt="explore-projects"
              loading="lazy"
              className=" rounded-lg w-full md:w-[90%] h-auto"
            />
            <Link
              href="/plant-tree"
              className="border-none text-white rounded-lg hover:bg-blue-900 transition-all duration-500 outline-none px-6 static mdd:absolute top-[45%]  hover:scale-95 py-3 my-6 bg-blue-700 flex items-center gap-2"
            >
              Explore Projects <FaChevronRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* section 6  */}
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
                Every Cup Counts for the Planet!
              </h3>
              <p className="leading-[30px] text-sm sm:text-[16px] font-normal  font-sans  text-[#fcfbfb]">
                Ready to take your coffee shop green? Our program helps you
                offer a loyalty reward that plants trees. Increase customer
                loyalty and create a positive environmental impact. Contact us
                today to learn more!
              </p>

              <Link
                href="/contact"
                className="border-none text-white rounded-lg hover:bg-blue-900 transition-all duration-500 outline-none px-10  hover:scale-95 py-3 my-6 bg-blue-700 flex items-center gap-2"
              >
                Get In Touch
              </Link>
            </div>

            <div className="flex-1 flex items-center lg:items-start flex-col justify-center">
              <Image
                src="/assets/coffee/nur.png"
                width={600}
                height={600}
                alt="bussnessec2"
                loading="lazy"
                className=" rounded-lg w-full lg:w-[400px]  object-cover h-auto sm:h-[450px]"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default page;
