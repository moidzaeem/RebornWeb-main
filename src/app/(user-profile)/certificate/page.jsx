"use client";

import React from "react";
import RebornGreenBonsai from "../../../../public/assets/images/RebornGreen-Bonsai.png";
import ClimateImpactGlobe from "../../../../public/Globe/Globe.png";
import LockSvg from "@/assets/svg/LockSvg";
import DownloadCertificate from "@/app/(user-profile)/_components/DownloadCertificate";
import GreenRewardCard from "@/app/(user-profile)/_components/GreenRewardCard";
import { useUser } from "../../../../lib/UserConext";
import { parseCookies } from "nookies";

const page = () => {
  const userData = useUser();

  const [name, setName] = React.useState("");
  const [userApi, setUserApi] = React.useState(null);
  const [isGenrateApi, setIsGenrateApi] = React.useState(false);
  const [treePlanted, setTreePlanted] = React.useState(0);
  const [climatePoints, setClimatePoints] = React.useState(0);

  React.useEffect(() => {
    const cookies = parseCookies();
    const name = cookies?.user_name;

    setName(name);
    if (userData !== undefined) setUserApi(userData?.data.api_key);

    if (userApi !== undefined && userApi !== null) {
      setIsGenrateApi(true);
      console.log(isGenrateApi, userApi);
    }
    const accessToken = cookies?.access_token;
    if (!accessToken) redirect("/login");

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
            } else {
              if (data.data.tree_planted) {
                const treePlanted = data.data.tree_planted;
                setTreePlanted(treePlanted);
              }
              if (data.data.climate_points) {
                const climatePoints = data.data.climate_points;
                setClimatePoints(climatePoints);
              }
            }
          } else toast.error("Request failed");
        } catch (error) {
          console.error("Request failed:", error.message);
        }
      };
      getTreeData();
    }
  }, [userData, userApi, isGenrateApi]);

  const CO2Value = (treePlanted * 0.1096 + climatePoints).toFixed(3);

  const greenRewards = [
    {
      rewardImage: RebornGreenBonsai,
      rewardTitle: "RebornGreen Bonsai",
      rewardDetail: `As a token of our appreciation for your increased corporate social responsibility, we present the RebornGreen Bonsai. This reward acknowledges your contribution and symbolizes new growth and sustainability.`,
      buttonText:
        CO2Value > 500 ? (
          `${name}bonsai${CO2Value}`
        ) : (
          <>
            <LockSvg className="fill-current" /> Unlock at 500 tons of CO2
            avoided
          </>
        ),
      disabled: CO2Value < 500,
    },
    {
      rewardImage: ClimateImpactGlobe,
      rewardTitle: "Climate Impact Globe",
      rewardDetail: `Unlock the Climate Impact Globe, a unique piece of art handmade from recycled paper by a talented artist. This beautiful globe serves as a perfect display for your reception desk, waiting room, or any area that connects people with your business. The globe can be customized to reflect your brand's identity.`,
      buttonText:
        CO2Value > 1000 ? (
          `${name}globe${CO2Value}`
        ) : (
          <>
            <LockSvg className="fill-current" /> Unlock at 500 tons of CO2
            avoided
          </>
        ),
      disabled: CO2Value < 1000,
    },
  ];

  return (
    <div className="w-full flex flex-col gap-4 lg:gap-5">
      <div className="bg-[#ffffff]/70 flex flex-col items-center px-5 lg:px-11 py-7 lg:py-11 rounded-[20px] gap-4">
        <h3 className="text-[34px] lg:text-[44px] text-green font-medium">
          Certificate
        </h3>
        <p className="text-sm lg:text-lg text-black font-medium text-center">
          Celebrate your commitment to the environment by downloading your
          personalized certificate. Click the button below to download and
          showcase your achievement.
        </p>
        {/* <button></button> */}
        <button
          // disabled
          className="w-fit rounded py-3 lg:py-4 px-16 lg:px-11 text-sm lg:text-base font-semibold lg:font-medium bg-black text-white"
        >
          Download Certificate
        </button>
        {/* <p className="text-black">Coming Soon</p> */}
      </div>

      <DownloadCertificate />

      <div className="bg-[#ffffff]/70 flex flex-col px-5 lg:px-11 py-7 lg:py-11 rounded-[20px] gap-4 lg:gap-7">
        <h3 className="text-[34px] lg:text-[44px] text-green font-medium text-center">
          Green Rewards
        </h3>
        <div className="grid grid-cols-2 gap-5">
          {greenRewards.map((greenReward) => (
            <GreenRewardCard
              key={greenReward.rewardTitle}
              imageSrc={greenReward.rewardImage}
              title={greenReward.rewardTitle}
              detail={greenReward.rewardDetail}
              buttonText={greenReward.buttonText}
              disabled={greenReward.disabled}
            />
          ))}
          <p className="col-span-2 text-xs lg:text-sm text-black font-normal">
            Once your reward is unlocked, claim it by sending us the unique code
            along with your delivery details.
            <br /> You will receive your reward within approximately 16 working
            days.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
