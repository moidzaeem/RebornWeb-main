import Link from "next/link";
import React from "react";

const RenderSiderBarOptions = (options) => {
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
            {RenderSiderBarOptions(option.children)}
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

export default RenderSiderBarOptions;
