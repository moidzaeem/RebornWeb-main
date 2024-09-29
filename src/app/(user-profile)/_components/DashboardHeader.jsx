"use client";
import LogoutSvg from "@/assets/svg/LogoutSvg";
import NotificationsSvg from "@/assets/svg/NotificationsSvg";
import MenuLeftAltSvg from "@/assets/svg/MenuLeftAltSvg";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { destroyCookie } from "nookies";
import React from "react";
import { Box, Drawer } from "@mui/material";
import { sideBarOptions } from "@/lib/constants";
import UserSvg from "@/assets/svg/UserSvg";
import RenderSiderBarOptions from "@/app/(user-profile)/_components/RenderSiderBarOptions";
import rebornLogo from "../../../../public/assets/logos/logo.png";
import Image from "next/image";

const DashboardHeader = () => {
  const router = useRouter();
  const pathName = usePathname();

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerContent = (
    <Box
      role="presentation"
      onClick={toggleDrawer(false)}
      className="bg-black h-full w-72 p-6 flex flex-col gap-4"
    >
      <div className="mt-12 flex items-center gap-3.5">
        <span className="p-3 bg-[#ffffff]/40 text-white rounded-full">
          <UserSvg className="fill-current w-16 h-16" />
        </span>
        <div className="flex flex-col gap-1.5">
          <p className="capitalize text-xl text-white font-medium">John Doe</p>
          <p className="uppercase text-xs text-white font-semibold">admin</p>
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
          <span className="p-2.5 bg-[#ffffff]/40 lg:bg-[#000000]/40 text-white rounded-full">
            <UserSvg className="fill-current w-6 h-6" />
          </span>
          <div className="flex flex-col gap-2">
            <p className="text-base font-normal text-white lg:text-black capitalize">
              John Doe
            </p>
            <p className="text-[10px] text-[#14A800] font-semibold uppercase">
              admin
            </p>
          </div>
        </div>

        <div className="flex gap-2.5">
          <Link
            href="/notifications"
            className="bg-transparent text-[#14A800] rounded-xl p-3.5 border border-[#ffffff]/20 lg:border-black/20"
          >
            <NotificationsSvg className="h-6 w-6 fill-current" />
          </Link>
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
