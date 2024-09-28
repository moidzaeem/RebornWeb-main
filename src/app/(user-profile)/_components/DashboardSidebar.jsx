import UserSvg from "../../../assets/svg/UserSvg";
import Link from "next/link";
import React from "react";
import rebornLogo from "../../../../public/assets/logos/logo.png";
import Image from "next/image";

const DashboardSidebar = () => {
  const sideBarOptions = [
    { label: "Profile", link: "/user-profile" },
    { label: "Climate Impact", link: "/climate-impact" },
    { label: "Certificate & Green Rewards", link: "" },
    {
      label: "Integrations",
      link: "",
      children: [
        { label: "Tree Widget", link: "" },
        { label: "Tree Planting API", link: "/tree-planting-api" },
      ],
    },
    { label: "Subscriptions", link: "/subscriptions" },
    { label: "Purchase History", link: "/purchase-history" },
    { label: "Settings", link: "/settings" },
  ];

  const renderOptions = (options) => {
    return options.map((option, index) => {
      if (option.children) {
        return (
          <div key={index} className="flex flex-col gap-1.5">
            <Link
              href={option.link}
              className="text-sm text-white font-medium p-2 hover:bg-[#2B2B2B] rounded-lg"
            >
              {option.label}
            </Link>
            <div className="flex flex-col gap-1.5">
              {renderOptions(option.children)}
            </div>
          </div>
        );
      }
      return (
        <Link
          key={index}
          href={option.link}
          className="text-sm text-white font-medium p-2 hover:bg-[#2B2B2B] rounded-lg"
        >
          {option.label}
        </Link>
      );
    });
  };
  return (
    <div className="bg-black h-full px-4 rounded-[20px] flex flex-col gap-4">
      <div className="mt-12 flex items-center gap-3.5">
        <span className="p-3 bg-[#ffffff]/40 rounded-full">
          <UserSvg className="fill-white w-16 h-16" />
        </span>
        <div className="flex flex-col gap-1.5">
          <p className="capitalize text-xl text-white font-medium">John Doe</p>
          <p className="uppercase text-xs text-white font-semibold">admin</p>
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        {renderOptions(sideBarOptions)}
        {/* {sideBarOptions.map((option) => (
          <p className="text-sm text-white font-medium">{option}</p>
        ))} */}
      </div>
      <Image
        src={rebornLogo}
        alt="Reborn Logo"
        className="mt-28 w-full h-auto"
      />
    </div>
  );
};

export default DashboardSidebar;
