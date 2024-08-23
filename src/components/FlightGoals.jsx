"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const FlightTimeLine = ({ img, text, description, id, rgt, icon }) => {
  return (
    <motion.div
      initial={{ y: 200 }}
      viewport={{ once: true }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`main w-full mb-10 md:w-[50%]  pl-8 xsm:pl-0 px-0 xsm:px-[45px] md:px-[50px] relative  py-[10px] ${
        rgt ? " left-3 md:left-1/2" : " left-3 md:left-[10px]"
      }`}
    >
      <div
        className={`absolute smimg bg-[#ffffff] shadow-sm  px-3 py-2 w-[70px] h-[70px] rounded-full flex items-center justify-center top-[32px] z-10 right-[-20px] text-white font-bold ${
          rgt ? "left-[-20px]" : " right-[-20px]"
        }`}
      >
        {icon}
      </div>
      <motion.div
        transition={{ duration: 0.5, type: "ease-in" }}
        className="text relative min-h-[170px] flex shadow-sm shadow-[#c1c1c1] items-center justify-between font-DmSans rounded-lg bg-[#b4a9a926] py-[20px] text-center px-[10px] xsm:px-[30px]"
      >
        <div>
          <Image
            src={img}
            width={400}
            height={400}
            alt="img"
            className="w-full h-auto"
          />
          <h2 className=" text-dark my-4 text-[18px] xsm:text-[20px] sm:text-[24px] font-worksans font-semibold">
            {text}
          </h2>
          {description && (
            <p className=" text-sm sm:text-[14px] text-black-text font-poppins">
              {description}
            </p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FlightTimeLine;
