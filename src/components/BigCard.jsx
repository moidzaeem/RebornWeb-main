import Image from "next/image";
import Link from "next/link";
import React from "react";

const BigCard = ({ img, title, text, btnLink, span }) => {
  return (
    <div className=" w-full xsm:w-[90%] flex items-start justify-between bg-white duration-500  md:w-[48%] xlg:w-[30%] xll:w-[30%] h-full rounded-xl shadow-lg hover:shadow-2xl border min-h-[610px]">
      <div className="gap-y-5  w-full h-full rounded-xl flex items-center justify-center flex-col  ">
        <Image
          src={img}
          alt="card image"
          className="w-full"
          width={200}
          height={200}
        />
        <div className="px-[20px]">
          <h2 className=" text-dark text-[18px] xsm:text-[24px] font-worksans font-semibold">
            {title}
          </h2>
          <p className=" text-[14px] tracking-wide leading-6 capitalize text-black-text font-poppins mt-3">
            {text}
          </p>
          <p className="text-black-text font-poppins mt-4">
            <span className="font-semibold">GOAL 2024:</span>
            {span}
          </p>
          <Link href={btnLink} className="btn mt-5 inline-block">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BigCard;
