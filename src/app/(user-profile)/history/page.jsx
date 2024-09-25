"use client";
import LeftSideBar from "@/components/LeftSideBar";
import { redirect } from "next/navigation";
import { parseCookies } from "nookies";
import React from "react";

const page = () => {
  const cookies = parseCookies();
  const accesstoken = cookies?.access_token;

  if (!accesstoken) {
    redirect("/login");
  }

  return (
    <div className="overflow-hidden h-full">
      {/* about sec 1  */}
      <section className="w-full flex items-start justify-start mt-20 min-h-screen ">
        <LeftSideBar />
        <main className="max-w-[1800px] flex-1 bg-[#fbfbfb] px-[0px] lg:px-[60px] xll:px-[120px] py-[2rem] mx-auto h-full">
          <h3 className=" text-center leading-normal lg:leading-[50px] xll:leading-[60px] text-[25px] lg:text-[35px] xll:text-[45px] text-black-text font-medium font-worksans">
            {" "}
            <span className="text-green font-semibold">History</span>
          </h3>
          <p className="text-[13px] xsm:text-[16px] font-poppins text-black w-[90%]  sm:w-[70%] mx-auto font-normal xsm:font-medium text-center tracking-wide mb-6 ">
            Below you will find your transaction history (including any
            subscriptions, one-off, or automated tree planting) and can download
            uniquely numbered tree planting certificates to showcase your
            impact.{" "}
          </p>
          <div className="w-full flex flex-col gap-5 items-center justify-center">
            <div
              style={{
                backgroundImage: "url('/assets/images/treeplantmain.jpg')",
              }}
              className="bg-white w-full sm:w-[60%] flex relative items-center flex-col justify-center px-3 h-[300px] mt-4 shadow-2xl py-10 bg-cover bg-no-repeat rounded-xl "
            >
              <h1 className="z-10 text-center leading-normal lg:leading-[50px] xll:leading-[60px] text-[25px] lg:text-[35px] xll:text-[45px] text-white font-medium font-worksans">
                0 total trees planted
              </h1>

              <button className="text-white my-3 bg-blue-700 hover:bg-blue-500 rounded-md px-6 tracking-wide z-10 font-worksans py-3">
                Certificate
              </button>

              <div className="absolute overflow-hidden rounded-xl z-0 top-0 left-0 w-full h-full bg-[#000] opacity-[0.4]"></div>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default page;
