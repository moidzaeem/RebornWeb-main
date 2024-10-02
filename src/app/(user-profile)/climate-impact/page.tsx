"use client";

import React from "react";
import treesPlantedIcon from "../../../../public/assets/images/Trees Planted Icon.png";
import Image from "next/image";
import co2Offset from "../../../../public/assets/images/CO2-Offset.png";
import CleanEnergySvg from "../../../assets/svg/CleanEnergySvg";
import EconomicGrowthSvg from "../../../assets/svg/EconomicGrowthSvg";
import LifeOnLandSvg from "../../../assets/svg/LifeOnLandSvg";
import { useEffect, useState } from "react";
import { parseCookies } from "nookies";
import { redirect } from "next/navigation";
import { useUser } from "../../../../lib/UserConext";

const Page = () => {
  const userData = useUser();

  const [accessToken, setAccessToken] = useState(null);
  const [userApi, setUserApi] = useState(null);
  const [disable, setDiable] = useState(false);
  const [treePlanted, setTreePlanted] = useState(0);
  const [climatePoints, setClimatePoints] = useState(0);

  useEffect(() => {
    const cookies = parseCookies();

    const accessToken = cookies?.access_token;
    if (!accessToken) {
      redirect("/login");
    } else {
      setAccessToken(accessToken);
    }
    if (userData !== undefined) {
      setUserApi(userData?.data.api_key);
    }
    if (userApi) {
      const getTreeData = async () => {
        try {
          const apiUrl = `${process.env.API_URL}/user/tree-record?api_key=${userApi}`;
          const response = await fetch(apiUrl, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });

          if (response.ok) {
            const data = await response.json();
            if (data.status !== 200) {
              // toast.error(data.message)
              setDiable(false);
            } else {
              if (data.data.tree_planted) {
                const treePlanted = data.data.tree_planted;

                setTreePlanted(treePlanted);
              }
              if (data.data.climate_points) {
                const climatePoints = data.data.climate_points;

                setClimatePoints(climatePoints);
              }
              setDiable(false);
            }
          } else {
            setDiable(false);
          }
        } catch (error) {
          console.error("Request failed:", error.message);
          setDiable(false);
        }
      };
      getTreeData();
    }
  }, [userData, userApi]);

  const contributions = [
    {
      number: 7,
      label: "affordable and clean energy",
      icon: <CleanEnergySvg className="w-14 h-14 fill-current" />,
      bgColor: "bg-[#FCC30B]",
    },
    {
      number: 8,
      label: "decent work and economic growth",
      icon: <EconomicGrowthSvg className="w-14 h-14 fill-current" />,
      bgColor: "bg-[#A21942]",
    },
    {
      number: 13,
      label: "climate action",
      icon: <CleanEnergySvg className="w-14 h-14 fill-current" />,
      bgColor: "bg-[#3F7E44]",
    },
    {
      number: 14,
      label: "life below water",
      icon: <CleanEnergySvg className="w-14 h-14 fill-current" />,
      bgColor: "bg-[#0A97D9]",
    },
    {
      number: 15,
      label: "life on land",
      icon: <LifeOnLandSvg className="w-14 h-14 fill-current" />,
      bgColor: "bg-[#56C02B]",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-4 lg:gap-5">
      <div className="bg-treesPlantedBG bg-cover bg-no-repeat rounded-[20px]">
        <div className="bg-[#ffffff]/45 flex flex-col items-center p-7.5 rounded-[20px] gap-4">
          <div className="bg-[#ffffff]/60 py-3 px-7.5 rounded-[10px]">
            <h3 className="text-[34px] lg:text-[40px] text-green font-medium">
              Trees Planted
            </h3>
          </div>
          <div className="flex items-start gap-x-6 lg:gap-x-8">
            <div className="flex flex-col items-end gap-3">
              <div className="flex gap-x-4 lg:gap-x-5">
                {String(treePlanted).padStart(7, '0').split('').map((digit, index) => (
                  <div
                    key={index}
                    className="bg-[#ffffff]/60 p-2 lg:p-5 rounded-lg lg:rounded-[20px] flex items-center justify-center"
                  >
                    <p className="text-[40px] lg:text-[104px] font-normal text-black">
                      {digit}
                    </p>
                  </div>
                ))}
              </div>

              <div className="hidden lg:block bg-[#ffffff]/60 py-4 px-5 rounded-[10px]">
                <p className="text-[22px] text-black font-medium">
                  {climatePoints} Tones CO2 Sequestered
                </p>
              </div>
            </div>
            <Image
              src={treesPlantedIcon}
              alt="trees-planted"
              className="w-28 lg:w-40 h-auto"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 lg:gap-6">
        <div className="col-span-4 md:col-span-1 bg-[#ffffff]/80 flex lg:flex-col items-center py-7 px-8 lg:px-5 rounded-[20px]">
          <Image src={co2Offset} alt="CO2-Offset" className="w-16 h-auto" />
          <div className="lg:mt-7 flex flex-col items-center">
            <p className="text-[19px] lg:text-[22px] text-green font-medium">
              CO2 Avoided
            </p>
            <p className="text-[41px] lg:text-[53px] text-black font-medium text-center">
            {climatePoints} Tones
            </p>
          </div>
        </div>
        <div className="col-span-4 md:col-span-3 bg-[#ffffff]/80 flex flex-col py-7 px-5 lg:px-7.5 lg:py-10 rounded-[20px]">
          <p className="text-[22px] text-green font-medium">
            Your Contribution to the SDGs
          </p>
          <div className="mt-4.5 lg:mt-7 flex gap-1.5 lg:gap-3">
            {contributions.map((contribution, index) => (
              <div
              key={index}
                className={`w-[25%] ${contribution.bgColor} flex flex-col items-center justify-between gap-2 lg:gap-3 p-1.5 lg:p-2.5 rounded-[10px] lg:rounded-[20px]`}
              >
                <div className="flex items-start gap-1.5 lg:gap-2.5">
                  <p className="text-2xl lg:text-3xl text-white font-bold">
                    {contribution.number}
                  </p>
                  <p className="text-sm lg:text-base text-white font-medium uppercase">
                    {contribution.label}
                  </p>
                </div>
                <span className="text-white">{contribution.icon}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#ffffff]/80 flex flex-col items-center px-3 py-7 lg:px-10 lg:py-12.5 rounded-[20px] gap-3.5">
        <div className="flex flex-col items-center gap-1">
          <h3 className="text-[22px] lg:text-[34px] text-green font-medium">
            Your Climate Impact Is Bigger Than You Think
          </h3>
          <p className="text-[13px] lg:text-[22px] text-black font-medium">
            Every tonne of CO2 offset through carbon projects or every tree
            planted with RebornGreen helps people around the world by creating
            jobs for those who need them most and contributes to developing more
            climate projects, creating a better planet for all.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
