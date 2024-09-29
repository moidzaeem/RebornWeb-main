import React from "react";
import treesPlantedIcon from "../../../../public/assets/images/Trees Planted Icon.png";
import rebornLogo from "../../../../public/assets/logos/logo.png";
import NotificationsSvg from "@/assets/svg/NotificationsSvg";
import FaceSmileSvg from "@/assets/svg/FaceSmileSvg";
import UserGroupSvg from "@/assets/svg/UserGroupSvg";
import ShieldPlusSvg from "@/assets/svg/ShieldPlusSvg";
import HandHoldingUserSvg from "@/assets/svg/HandHoldingUserSvg";
import GlobeEarthSvg from "@/assets/svg/GlobeEarthSvg";
import Image from "next/image";

const page = () => {
  const whyTreeWidget = [
    {
      icon: <NotificationsSvg className="w-4.5 lg:w-6 h-auto fill-green" />,
      text: "Real-time updates of your tree planting statistics",
    },
    {
      icon: <FaceSmileSvg className="w-4.5 lg:w-6 h-auto fill-green" />,
      text: "Positive impact on your brand reputation",
    },
    {
      icon: <UserGroupSvg className="w-4.5 lg:w-6 h-auto fill-green" />,
      text: "Join the growing community of eco-conscious businesses",
    },
  ];

  const benefits = [
    {
      icon: <ShieldPlusSvg className="w-4.5 lg:w-6 h-auto fill-green" />,
      text: "Increase transparency and trust with your audience",
    },
    {
      icon: <HandHoldingUserSvg className="w-4.5 lg:w-6 h-auto fill-green" />,
      text: "Inspire others to take action",
    },
    {
      icon: <GlobeEarthSvg className="w-4.5 lg:w-6 h-auto fill-green" />,
      text: "Contribute to a healthier planet",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-4 lg:gap-5">
      <div className="bg-[#ffffff]/70 flex flex-col items-center px-5 lg:px-11 py-7 lg:py-11 rounded-[20px] gap-4 lg:gap-5">
        <h3 className="text-2xl lg:text-[44px] text-green font-medium">
          Showcase Your Sustainability with Our Tree Widget
        </h3>
        <p className="text-sm lg:text-lg text-black font-medium text-center">
          The Tree Widget allows you to integrate and display your tree planting
          statistics directly on your website. Highlight your commitment to
          environmental sustainability and showcase the positive impact of your
          initiatives with ease.
        </p>

        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 lg:gap-6">
          <div className="w-full md:w-fit bg-white flex rounded-lg p-3 lg:p-5">
            <Image
              src={treesPlantedIcon}
              alt="trees-planted"
              className="w-20 lg:w-32 h-auto"
            />
            <div className="flex items-end">
              <div className="flex flex-col gap-1.5 lg:gap-3">
                <h3 className="text-[22px] lg:text-[34px] text-black font-medium">
                  3,254 trees
                </h3>
                <p className="text-sm lg:text-lg text-black font-medium">
                  Planted With
                </p>
              </div>
              <Image
                src={rebornLogo}
                alt="reborn-logo"
                className="w-12 lg:w-24 h-auto"
              />
            </div>
          </div>
          <button className="w-fit rounded uppercase py-3 lg:py-4 px-18 lg:px-16 text-sm lg:text-base font-semibold lg:font-medium bg-green text-white">
            generate code
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5">
        <div className="relative col-span-2 md:col-span-1 bg-[#ffffff]/70 flex flex-col gap-4 lg:gap-5 rounded-[20px] pt-4 lg:pt-5.5 pb-4 lg:pb-10 px-6 lg:px-8">
          <h3 className="text-[22px] lg:text-[34px] text-green font-medium text-center">
            Why Tree Widget?
          </h3>
          <div className="flex flex-col gap-2">
            {whyTreeWidget.map((i, index) => (
              <div key={index} className="flex items-start gap-1.5 lg:gap-4">
                <span>{i.icon}</span>
                <p className="text-sm lg:text-lg text-black font-medium">
                  {i.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative col-span-2 md:col-span-1 bg-[#ffffff]/70 flex flex-col gap-4 lg:gap-5 rounded-[20px] pt-4 lg:pt-5.5 pb-4 lg:pb-10 px-6 lg:px-8">
          <h3 className="text-[22px] lg:text-[34px] text-green font-medium text-center">
            Benefits
          </h3>
          <div className="flex flex-col gap-2">
            {benefits.map((i, index) => (
              <div key={index} className="flex items-start gap-1.5 lg:gap-4">
                <span>{i.icon}</span>
                <p className="text-sm lg:text-lg text-black font-medium">
                  {i.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
