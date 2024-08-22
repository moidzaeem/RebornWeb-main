"use client";
import Image from "next/image";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";

const Hero = ({ videoSrc }) => {
  return (
    <div className="relative w-full h-full">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div> */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="w-[90%] max-w-[1440px] h-full ssm:w-[80%] flex-col mx-auto hero-content flex items-center gap-y-3 justify-center z-10">
        <h1 className="text-[#ffffff] text-center font-worksans font-semibold text-sm ssm:text-lg xsm:text-[25px] sm:text-[35px] mdd:text-[50px] xlg:text-[60px] xll:text-[70px]">
          Innovating, Supporting, and Engaging You in{" "}
          <span className="text-[#14a800]">Climate </span> Solutions
        </h1>

        {/* <div className='mt-4'>
        <Link className='bg-white text-[#45a856] text-[16px] sm:text-[18px] px-6 sm:px-10 font-semibold rounded-[30px] py-3 sm:py-4 hover:bg-[#8acf25] duration-300 ease-linear hover:text-[#4c563c]' href='/about'>About US</Link>
      </div> */}
      </div>
    </div>
  );
};

export default Hero;
