import React from "react";
import RebornGreenBonsai from "../../../../public/assets/images/RebornGreen-Bonsai.png";
import ClimateImpactGlobe from "../../../../public/assets/images/Climate-Impact-Globe.png";
import MaximizeSvg from "@/assets/svg/MaximizeSvg";
import LockSvg from "@/assets/svg/LockSvg";
import Image from "next/image";

const page = () => {
  return (
    <div className="w-full flex flex-col gap-4 lg:gap-5">
      <div className="bg-[#ffffff]/70 flex flex-col items-center px-5 lg:px-11 py-7 lg:py-11 rounded-[20px] gap-4">
        <h3 className="text-[34px] lg:text-[44px] text-green font-medium">
          Certificate
        </h3>
        <p className="text-sm lg:text-lg text-black font-medium text-center">
          Celebrate your commitment to the environment by downloading your
          personalized certificate. Click the button below to download and
          showcase your achievement.
        </p>
        <button className="w-fit rounded py-3 lg:py-4 px-16 lg:px-11 text-sm lg:text-base font-semibold lg:font-medium bg-green text-white">
          Download Certificate
        </button>
      </div>

      <div className="bg-[#ffffff]/70 flex flex-col px-5 lg:px-11 py-7 lg:py-11 rounded-[20px] gap-4 lg:gap-7">
        <h3 className="text-[34px] lg:text-[44px] text-green font-medium text-center">
          Green Rewards
        </h3>
        <div className="grid grid-cols-2 gap-5">
          <div className="relative col-span-2 md:col-span-1 bg-white flex flex-col items-center gap-4 lg:gap-5 rounded-[20px] pt-4 lg:pt-5.5 pb-4 lg:pb-10 px-6 lg:px-8">
            <button className="absolute top-5 lg:top-7 right-5 lg:right-7 text-green">
              <MaximizeSvg className="fill-current w-6 lg:w-8.5 h-6 lg:h-8.5" />
            </button>
            <Image
              src={RebornGreenBonsai}
              alt="reborn-green-bonsai"
              className="w-36 lg:w-48 h-auto"
            />
            <h3 className="text-[22px] lg:text-[34px] text-green font-medium text-center">
              RebornGreen Bonsai
            </h3>
            <p className="text-sm lg:text-lg text-black font-medium text-center md:min-h-45 lg:min-h-91 xl:min-h-56 xll:min-h-36">
              As a token of our appreciation for your increased corporate social
              responsibility, we present the RebornGreen Bonsai. This reward
              acknowledges your contribution and symbolizes new growth and
              sustainability.
            </p>
            <button className="w-full flex justify-center items-center gap-2 bg-[#9C9C9C] text-sm lg:text-base text-white font-medium p-2.5 lg:p-3 rounded">
              <LockSvg className="fill-current" /> Unlock at 500 tons of CO2
              avoided
            </button>
          </div>
          <div className="relative col-span-2 md:col-span-1 bg-white flex flex-col items-center gap-4 lg:gap-5 rounded-[20px] pt-4 lg:pt-5.5 pb-4 lg:pb-10 px-6 lg:px-8">
            <button className="absolute top-5 lg:top-7 right-5 lg:right-7 text-green">
              <MaximizeSvg className="fill-current w-6 lg:w-8.5 h-6 lg:h-8.5" />
            </button>
            <Image
              src={ClimateImpactGlobe}
              alt="climate-impact-globe"
              className="w-36 lg:w-48 h-auto"
            />
            <h3 className="text-[22px] lg:text-[34px] text-green font-medium text-center">
              Climate Impact Globe
            </h3>
            <p className="text-sm lg:text-lg text-black font-medium text-center">
              Unlock the Climate Impact Globe, a unique piece of art handmade
              from recycled paper by a talented artist. This beautiful globe
              serves as a perfect display for your reception desk, waiting room,
              or any area that connects people with your business. The globe can
              be customized to reflect your brand's identity.
            </p>
            <button className="w-full flex justify-center items-center gap-2 bg-[#9C9C9C] text-sm lg:text-base text-white font-medium p-2.5 lg:p-3 rounded">
              <LockSvg className="fill-current" /> Unlock at 1000 tons of CO2
              avoided
            </button>
          </div>
          <p className="col-span-2 text-xs lg:text-sm text-black font-normal">
            Once your reward is unlocked, claim it by sending us the unique code
            along with your delivery details.
            <br /> You will receive your reward within approximately 16 working
            days.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
