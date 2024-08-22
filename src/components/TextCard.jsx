import Image from "next/image";
import Link from "next/link";
import React from "react";

const TextCard = ({ img, title, text, btnText, btnLink }) => {
  return (
    <div className=" w-full xsm:w-[90%] flex items-center justify-between bg-white duration-500 hover:scale-110 md:w-[48%] xlg:w-[30%] xll:w-[30%] h-full rounded-xl shadow-lg border min-h-[420px]">
      <div className="gap-y-5 text-center w-full h-full rounded-xl flex items-center justify-center flex-col  p-4">
        <Image src={img} alt="card image" width={90} height={90} />
        <div>
          <h2 className="text-dark text-lg xsm:text-2xl font-worksans font-semibold">
            {title}
          </h2>
          <p className="text-base text-black-text font-poppins mt-3">{text}</p>
          <Link href={btnLink} className="btn mt-5 inline-block">
            {btnText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TextCard;
