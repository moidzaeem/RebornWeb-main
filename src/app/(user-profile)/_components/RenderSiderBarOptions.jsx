import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const RenderSiderBarOptions = (options) => {
  const pathname = usePathname();
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
          <div className="flex flex-col gap-1.5 pl-6">
            {RenderSiderBarOptions(option.children)}
          </div>
        </div>
      );
    }
    return (
      <Link
        key={index}
        href={option.link}
        aria-selected={pathname === option.link}
        className="text-sm text-white font-medium p-2 hover:bg-[#2B2B2B] rounded-lg aria-selected:bg-[#ffffff17]"
      >
        {option.label}
      </Link>
    );
  });
};

export default RenderSiderBarOptions;
