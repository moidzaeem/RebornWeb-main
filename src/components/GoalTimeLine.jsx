"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

const GoalTimeLine = ({ title, description, id, rgt, img, link }) => {
  const [isMobile, setIsMobile] = useState(false);
  const closed = !isMobile
    ? { scale: 0, opacity: 0 }
    : { scale: 1, opacity: 1 };
  const opened = !isMobile
    ? { scale: 1, opacity: 1 }
    : { scale: 1, opacity: 1 };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <Link href={link}>
      <div
        className={`main w-full mb-10 md:w-[50%]  pl-8 xsm:pl-0 px-0 xsm:px-[45px] md:px-[50px] relative  py-[10px] ${
          rgt ? " left-3 md:left-1/2" : " left-3 md:left-[10px]"
        }`}
      >
        <div
          className={`absolute smimg bg-[#ffff] shadow-sm  px-3 py-2 w-[50px] rounded-lg top-[32px] z-10 right-[-20px] text-white font-bold ${
            rgt ? "left-[-20px]" : " right-[-20px]"
          }`}
        >
          <h1 className=" text-[40px] xsm:text-[60px] font-worksans text-green">
            {id}
          </h1>
        </div>
        <motion.div
          initial={closed}
          viewport={{ once: true }}
          whileInView={opened}
          transition={{ duration: 0.5, type: "ease-in" }}
          className="text relative min-h-[170px] flex shadow-sm shadow-[#c1c1c1] items-center justify-between font-DmSans rounded-lg bg-[#ffffff] py-[20px] px-[10px] xsm:px-[30px]"
        >
          <div>
            <h2 className=" text-dark text-[18px] xsm:text-[20px] sm:text-[24px] font-worksans font-semibold">
              {title}
            </h2>
            <p className=" text-sm sm:text-[14px] mt-2 mb-2 capitalize text-black-text font-poppins">
              {description}
            </p>
            {img && (
              <Image
                src={img}
                alt="logos"
                height={70}
                width={600}
                className="mt-3"
              />
            )}
          </div>
        </motion.div>
      </div>
    </Link>
  );
};

export default GoalTimeLine;
