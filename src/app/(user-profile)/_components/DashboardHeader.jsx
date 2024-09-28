"use client";
import LogoutSvg from "@/assets/svg/LogoutSvg";
import NotificationsSvg from "@/assets/svg/NotificationsSvg";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { destroyCookie } from "nookies";
import React from "react";

const DashboardHeader = () => {
  const router = useRouter();
  const pathName = usePathname();

  const handleLogout = () => {
    destroyCookie(null, "access_token", { path: "/" });
    destroyCookie(null, "refresh_token", { path: "/" });
    router.push("/login");
  };

  return (
    <div className="bg-white flex justify-between items-center p-4 lg:px-8 lg:py-3.5 rounded-[20px]">
      <p className="hidden lg:block text-[28px] text-black font-normal">
        {pathName === "/user-profile" && "Profile"}
        {pathName === "/climate-impact" && "Climate Impact"}
        {pathName === "/tree-planting-api" && "Tree Planting API"}
        {pathName === "/purchase-history" && "Purchase History"}
        {pathName === "/subscriptions" && "Subscriptions"}
        {pathName === "/notifications" && "Notifications"}
      </p>
      <div className="flex items-center gap-3.5 lg:gap-6">
        <div className="flex flex-col gap-2">
          <p className="text-base font-normal text-black capitalize">
            John Doe
          </p>
          <p className="text-[10px] text-[#14A800] font-semibold uppercase">
            admin
          </p>
        </div>
        <div className="flex gap-2.5">
          <Link
            href="/notifications"
            className="bg-transparent text-[#14A800] rounded-xl p-3.5 border border-black/20"
          >
            <NotificationsSvg className="h-6 w-6 fill-current" />
          </Link>
          {/* <button className="bg-transparent text-[#14A800] rounded-xl p-3.5 border border-black/20">
            <NotificationsSvg className="h-6 w-6 fill-current" />
          </button> */}
          <button
            onClick={handleLogout}
            className="bg-black text-white rounded-xl p-3.5"
          >
            <LogoutSvg className="h-6 w-6 fill-current" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
