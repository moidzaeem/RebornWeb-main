"use client";
import LogoutSvg from "@/assets/svg/LogoutSvg";
import NotificationsSvg from "@/assets/svg/NotificationsSvg";
import MenuLeftAltSvg from "@/assets/svg/MenuLeftAltSvg";
import Link from "next/link";
import { redirect, usePathname, useRouter } from "next/navigation";
import { destroyCookie, parseCookies } from "nookies";
import React from "react";
import { Box, Drawer } from "@mui/material";
import { sideBarOptions } from "@/lib/constants";
import UserSvg from "@/assets/svg/UserSvg";
import RenderSiderBarOptions from "@/app/(user-profile)/_components/RenderSiderBarOptions";
import rebornLogo from "../../../../public/assets/logos/logo.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useUser } from "../../../../lib/UserConext";

const DashboardHeader = () => {
  const userData = useUser();

  const router = useRouter();
  const pathName = usePathname();
  const [name, setName] = useState("");
  const [profileImage, setProfileImage] = useState("");

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

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

  const DrawerContent = (
    <Box
      role="presentation"
      onClick={toggleDrawer(false)}
      className="bg-black h-full w-72 p-6 flex flex-col gap-4"
    >
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
          {/* <p className="uppercase text-xs text-white font-semibold">admin</p> */}
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        {RenderSiderBarOptions(sideBarOptions)}
      </div>
      <Image
        src={rebornLogo}
        alt="Reborn Logo"
        className="mt-28 max-w-48 h-auto"
      />
    </Box>
  );

  const handleLogout = () => {
    destroyCookie(null, "access_token", { path: "/" });
    destroyCookie(null, "refresh_token", { path: "/" });
    router.push("/login");
  };

  return (
    <div className="bg-black lg:bg-white flex justify-between items-center p-4 lg:px-8 lg:py-3.5 rounded-[20px]">
      <button onClick={toggleDrawer(true)} className="lg:hidden text-white">
        <MenuLeftAltSvg className="fill-current w-6 h-6" />
      </button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerContent}
      </Drawer>
      <p className="hidden lg:block text-[28px] text-black font-normal">
        {pathName === "/user-profile" && "Profile"}
        {pathName === "/climate-impact" && "Climate Impact"}
        {pathName === "/tree-planting-api" && "Tree Planting API"}
        {pathName === "/purchase-history" && "Purchase History"}
        {pathName === "/subscriptions" && "Subscriptions"}
        {pathName === "/notifications" && "Notifications"}
        {pathName === "/certificate" && "Certificate & Green Rewards"}
        {pathName === "/tree-widget" && "Tree Widget"}
      </p>
      <div className="flex items-center gap-3.5 lg:gap-6">
        <div className="flex items-center gap-2">
          {/* <span className="p-2.5 bg-white lg:bg-white/40 text-white rounded-full"> */}
          {profileImage ? (
            // <div className="w-12 h-12 rounded-full overflow-hidden">
            <Image
              src={profileImage}
              alt="Reborn Logo"
              width={64}
              height={64}
              // className="w-8.5 h-8.5 object-cover w-full h-full rounded-full"
              className="w-8.5 h-8.5 md:w-13 md:h-13 object-cover rounded-full"
            />
          ) : (
            // </div>
            <span className="p-2.5 bg-white lg:bg-white/40 text-white rounded-full">
              <UserSvg className="fill-white w-16 h-16 rounded-full" />
            </span>
          )}
          {/* </span> */}
          <div className="flex flex-col gap-2">
            <p className="text-base font-normal text-white lg:text-black capitalize">
              {name}
            </p>
            {/* Uncomment if you want to show the user role */}
            {/* <p className="text-[10px] text-[#14A800] font-semibold uppercase">
      admin
    </p> */}
          </div>
        </div>

        <div className="flex gap-2.5">
          {/* <Link
            href="/notifications"
            className="bg-transparent text-[#14A800] rounded-xl p-3.5 border border-[#ffffff]/20 lg:border-black/20"
          >
            <NotificationsSvg className="h-6 w-6 fill-current" />
          </Link> */}
          {/* <button className="bg-transparent text-[#14A800] rounded-xl p-3.5 border border-black/20">
            <NotificationsSvg className="h-6 w-6 fill-current" />
          </button> */}
          <button
            onClick={handleLogout}
            className="bg-black text-white rounded-xl p-3.5 border border-[#ffffff]/20 lg:border-black"
          >
            <LogoutSvg className="h-6 w-6 fill-current" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
