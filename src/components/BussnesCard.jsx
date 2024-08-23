import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BussnesCard = ({ title, desc, img, btnText, link }) => {
  return (
    <motion.div
      initial={{ x: -250, opacity: 0, scale: 0.5 }}
      whileInView={{ x: 0, opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, type: "easeInOut" }}
      className="flex h-auto lg:h-[520px] flex-col w-full lg:flex-row items-center justify-center"
    >
      <div className=" h-full rounded-tr-lg rounded-tl-lg  lg:rounded-tr-none lg:rounded-s-xl  gre-card w-full  sm:w-[80%] mdd:w-[60%] py-16 lg:flex-1  flex items-center justify-center flex-col">
        <div className="w-full h-full xsm:w-10/12 lg:flex-1 flex items-center text-center lg:text-start lg:items-start  justify-center flex-col">
          <h3 className=" text-center lg:text-left mb-[20px] font-poppins text-[25px] xsm:text-[30px] lg:text-[35px] xll:text-[40px] font-[500] text-white">
            {title}
          </h3>
          <p className="leading-[26px] text-sm sm:text-[16px]  font-poppins tracking-wide text-[#dedbdb]">
            {desc}
          </p>
        </div>
        <Link className="btn" href={link}>
          {btnText}
        </Link>
      </div>

      <div className="overflow-hidden rounded-br-lg rounded-bl-lg lg:rounded-bl-none lg:rounded-e-lg w-full h-full relative sm:w-[80%] mdd:w-[60%]">
        <Image
          src={img}
          width={900}
          height={900}
          alt="bussnessec2"
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>
  );
};

export default BussnesCard;
