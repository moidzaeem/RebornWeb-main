"use client";
import UserSvg from "../../../assets/svg/UserSvg";
import React from "react";
import rebornLogo from "../../../../public/assets/logos/logo.png";
import Image from "next/image";
import { sideBarOptions } from "@/lib/constants";
import RenderSiderBarOptions from "@/app/(user-profile)/_components/RenderSiderBarOptions";
import { useEffect, useState } from "react";
import { useUser } from "../../../../lib/UserConext";
import { parseCookies } from "nookies";
import { redirect } from "next/navigation";

const DashboardSidebar = () => {
  const userData = useUser();

  const [name, setName] = useState("");
  const [profileImage, setProfileImage] = useState("");

  useEffect(() => {
    const cookies = parseCookies();
    const name = cookies?.user_name;
    setName(name);
    if (cookies?.profileImage) {
      setProfileImage(
        `https://backend.reborngreen.org/${cookies?.profileImage}`
      );
    }
    const accessToken = cookies?.access_token;
    if (!accessToken) {
      redirect("/login");
    }
  }, [userData]);

  return (
    <div className="bg-black h-full px-4 rounded-[20px] flex flex-col gap-4">
      <div className="mt-12 flex items-center gap-3.5">
        {profileImage ? (
          <Image
            src={profileImage}
            alt="Profile Image"
            width={100}
            height={100}
            className="w-16 h-16 object-cover rounded-full"
          />
        ) : (
          <span className="bg-[#ffffff]/40 text-white rounded-full">
            <UserSvg className="w-16 h-16 fill-current text-white" />
          </span>
        )}
        <div className="flex flex-col gap-1.5">
          <p className="capitalize text-xl text-white font-medium">{name}</p>
          {/* Uncomment if you want to show the user role */}
          {/* <p className="uppercase text-xs text-white font-semibold">admin</p> */}
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        {RenderSiderBarOptions(sideBarOptions)}
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
