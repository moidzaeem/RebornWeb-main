"use client";
import { FormControlLabel, styled, Switch } from "@mui/material";
import React from "react";

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#65C466",
        opacity: 1,
        border: 0,
        ...theme.applyStyles("dark", {
          backgroundColor: "#2ECA45",
        }),
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color: theme.palette.grey[100],
      ...theme.applyStyles("dark", {
        color: theme.palette.grey[600],
      }),
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: 0.7,
      ...theme.applyStyles("dark", {
        opacity: 0.3,
      }),
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: "#E9E9EA",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
    ...theme.applyStyles("dark", {
      backgroundColor: "#39393D",
    }),
  },
}));

const page = () => {
  return (
    <div className="w-full bg-[#ffffff]/70 flex flex-col items-center gap-6 lg:gap-10 py-7 lg:py-9 px-5 md:px-10 pt-7 lg:pt-11 rounded-[20px]">
      <h3 className="text-[34px] lg:text-[44px] text-green font-medium">
        Notifications Preferences
      </h3>
      {/* ---| News & Updates |--- */}
      <div className="w-full flex justify-between gap-4 lg:gap-8">
        <div className="flex flex-col gap-1">
          <h4 className="text-lg lg:text-xl text-[#04091E] font-semibold">
            News & Updates
          </h4>
          <p className="text-sm text-[#747681] font-medium">
            Sent automatically notification to the user
          </p>
        </div>
        <FormControlLabel
          control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
          label=""
        />
      </div>
      {/* ---| Tree Planted |--- */}
      <div className="w-full flex justify-between gap-4 lg:gap-8">
        <div className="flex flex-col gap-1">
          <h4 className="text-lg lg:text-xl text-[#04091E] font-semibold">
            Tree Planted
          </h4>
          <p className="text-sm text-[#747681] font-medium">
            Sent automatically notification to the user
          </p>
        </div>
        <FormControlLabel
          control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
          label=""
        />
      </div>
      {/* ---| CO2 Purchased |--- */}
      <div className="w-full flex justify-between gap-4 lg:gap-8">
        <div className="flex flex-col gap-1">
          <h4 className="text-lg lg:text-xl text-[#04091E] font-semibold">
            CO2 Purchased
          </h4>
          <p className="text-sm text-[#747681] font-medium">
            Sent automatically notification to the user
          </p>
        </div>
        <FormControlLabel
          control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
          label=""
        />
      </div>
      {/* ---| Transaction |--- */}
      <div className="w-full flex justify-between gap-4 lg:gap-8">
        <div className="flex flex-col gap-1">
          <h4 className="text-lg lg:text-xl text-[#04091E] font-semibold">
            Transaction
          </h4>
          <p className="text-sm text-[#747681] font-medium">
            Sent automatically notification to the user
          </p>
        </div>
        <FormControlLabel
          control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
          label=""
        />
      </div>
      {/* ---| Subscription Ends |--- */}
      <div className="w-full flex justify-between gap-4 lg:gap-8">
        <div className="flex flex-col gap-1">
          <h4 className="text-lg lg:text-xl text-[#04091E] font-semibold">
            Subscription Ends
          </h4>
          <p className="text-sm text-[#747681] font-medium">
            Sent automatically notification to the user
          </p>
        </div>
        <FormControlLabel
          control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
          label=""
        />
      </div>
    </div>
  );
};

export default page;
