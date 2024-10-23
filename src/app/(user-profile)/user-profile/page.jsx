"use client";
import { redirect } from "next/navigation";
import Image from "next/image";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useUser } from "../../../../lib/UserConext";
import Link from "next/link";
import treesPlanted from "../../../../public/assets/images/trees-planted.png";
import co2Offset from "../../../../public/assets/images/CO2-Offset.png";
import carEmission from "../../../../public/assets/images/Car-Emissions.png";
import energyUsed from "../../../../public/assets/images/Energy-Used.png";
import wasteRecycling from "../../../../public/assets/images/Waste-Recycling.png";
import treePlantingProjects from "../../../../public/assets/images/Tree-Planting-Projects.png";
import verifiedCarbonProjects from "../../../../public/assets/images/Verified-Carbon-Projects.png";

const Page = () => {
  const userData = useUser();

  const [disable, setDiable] = useState(false);
  const [name, setName] = useState("");
  const [userApi, setUserApi] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [isGenrateApi, setIsGenrateApi] = useState(false);
  const [treePlanted, setTreePlanted] = useState(0);
  const [climatePoints, setClimatePoints] = useState(0);
  const [profilePicture, setProfilePicture] = useState("");

  useEffect(() => {
    const cookies = parseCookies();
    const name = cookies?.user_name;

    setName(name);
    if (userData !== undefined) {
      setUserApi(userData?.data.api_key);
      if (userData?.data.logo)
        setProfilePicture(
          `https://backend.reborngreen.org/${userData?.data.logo}`
        ); // Assuming profile picture URL is in userData
    }
    if (userApi !== undefined && userApi !== null) {
      setIsGenrateApi(true);
      console.log(isGenrateApi, userApi);
    }
    const accessToken = cookies?.access_token;
    if (!accessToken) {
      redirect("/login");
    } else {
      setAccessToken(accessToken);
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
            toast.error("Request failed");
          }
        } catch (error) {
          console.error("Request failed:", error.message);
          setDiable(false);
        }
      };
      getTreeData();
    }
  }, [userData, userApi, isGenrateApi]);

  return (
    <div className="w-full flex flex-col gap-4 lg:gap-5">
      <div className="bg-[#ffffff]/70 flex flex-col items-center p-7.5 rounded-[20px] gap-3.5">
        <h3 className="text-[34px] lg:text-[40px] text-green font-medium">
          Welcome {name}
        </h3>
        <h3 className="text-black text-base lg:text-[26px] font-medium">
          An Overview of your Climate Impact
        </h3>
        <div className="grid grid-cols-2 gap-8.5">
          <div className="bg-black/10 col-span-2 md:col-span-1 flex gap-4 lg:gap-5 p-4 lg:p-6 rounded-[20px]">
            <Image
              src={treesPlanted}
              alt="trees-planter"
              className="w-14 lg:w-20 h-14 lg:h-20"
            />
            <div className="flex flex-col gap-4">
              <p className="text-lg lg:text-[22px] text-green font-medium">
                {treePlanted} Tree Planted
              </p>
              <p className="text-[10px] lg:text-[13px] text-black font-medium">
                You've planted {treePlanted}. These trees will absorb{" "}
                {treePlanted * 0.1096} tonnes of CO2 throughout their lifetime.
              </p>
            </div>
          </div>
          <div className="bg-black/10 col-span-2 md:col-span-1 flex gap-4 lg:gap-5 p-4 lg:p-6 rounded-[20px]">
            <Image
              src={co2Offset}
              alt="CO2-Offset"
              className="w-14 lg:w-20 h-14 lg:h-20"
            />
            <div className="flex flex-col gap-4">
              <p className="text-lg lg:text-[22px] text-green font-medium">
                {climatePoints} Tonnes CO2 Offset
              </p>
              <p className="text-[10px] lg:text-[13px] text-black font-medium">
                You have offset {climatePoints} tonnes of CO2 by supporting
                verified carbon projects around the world.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 lg:gap-6">
        <div className="col-span-3 md:col-span-1 bg-[#ffffff]/80 flex flex-col items-center py-7 px-8 lg:px-5 rounded-[20px]">
          <Image
            src={carEmission}
            alt="car-emissions"
            className="mt-2 w-16 h-16"
          />
          <p className="mt-7.5 text-[22px] text-green font-medium">
            Equivalent Car Emissions
          </p>
          <p className="mt-4 text-[13px] text-black font-medium text-center">
            Offsetting {(treePlanted * 0.1096 + climatePoints).toFixed(3)}{" "}
            tonnes of CO2 is like taking a car off the road for about{" "}
            {((treePlanted * 0.1096 + climatePoints) / 0.408).toFixed(3)}{" "}
            kilometers (
            {(
              ((treePlanted * 0.1096 + climatePoints) / 0.408) *
              0.621371
            ).toFixed(3)}{" "}
            miles).
          </p>
        </div>
        <div className="col-span-3 md:col-span-1 bg-[#ffffff]/80 flex flex-col items-center py-7 px-8 lg:px-5 rounded-[20px]">
          <Image
            src={energyUsed}
            alt="energy-used"
            className="mt-2 w-16 h-16"
          />
          <p className="mt-7.5 text-[22px] text-green font-medium">
            Equivalent Energy Used
          </p>
          <p className="mt-4 text-[13px] text-black font-medium text-center">
            Offsetting {(treePlanted * 0.1096 + climatePoints).toFixed(3)}{" "}
            tonnes of CO2 is equivalent to the annual electricity use of an
            average household for about{" "}
            {(
              (((treePlanted * 0.1096 + climatePoints) * 3.6) / (11000 / 12)) *
              1000
            ).toFixed(0)}{" "}
            months.
          </p>
        </div>
        <div className="col-span-3 md:col-span-1 bg-[#ffffff]/80 flex flex-col items-center py-7 px-8 lg:px-5 rounded-[20px]">
          <Image
            src={wasteRecycling}
            alt="waste-recycling"
            className="mt-2 w-16 h-16"
          />
          <p className="mt-7.5 text-[22px] text-green font-medium">
            Equivalent Waste Recycling
          </p>
          <p className="mt-4 text-[13px] text-black font-medium text-center">
            Offsetting {(treePlanted * 0.1096 + climatePoints).toFixed(3)}{" "}
            tonnes of CO2 is equivalent to recycling about{" "}
            {(((treePlanted * 0.1096 + climatePoints) * 1000) / 0.15).toFixed(
              3
            )}{" "}
            plastic bottles instead of sending them to landfill.
          </p>
        </div>
      </div>
      <div className="bg-[#ffffff]/70 flex flex-col items-center p-7.5 rounded-[20px] gap-3.5">
        <div className="flex flex-col items-center gap-1">
          <h3 className="text-[22px] lg:text-[34px] text-green font-medium">
            Is Your Climate Impact Zero? Want to do More?
          </h3>
          <p className="text-lg text-black font-medium">
            Explore our options and find perfect fit for you. Together, we can
            make a difference
          </p>
        </div>
        <div className="w-full grid grid-cols-2 gap-8.5">
          <div className="bg-white col-span-2 md:col-span-1 p-4 lg:p-6 rounded-[20px] border-2 border-green">
            <Link href="/plant-tree" className="flex gap-4 lg:gap-5">
              <Image
                src={treePlantingProjects}
                alt="trees-planting-projects"
                className="w-14 lg:w-20 h-14 lg:h-20"
              />
              <div className="flex flex-col gap-4">
                <p className="text-lg lg:text-[22px] text-green font-medium">
                  Support Tree-Planting Projects
                </p>
                <p className="text-[10px] lg:text-[13px] text-black font-medium">
                  Grow your business sustainably and make the planet greener.
                </p>
              </div>
            </Link>
          </div>
          <div className="bg-white col-span-2 md:col-span-1 p-4 lg:p-6 rounded-[20px] border-2 border-green">
            <Link href="/plant-tree-offset" className="flex gap-4 lg:gap-5">
              <Image
                src={verifiedCarbonProjects}
                alt="verified-carbon-projects"
                className="w-14 lg:w-20 h-14 lg:h-20"
              />
              <div className="flex flex-col gap-4">
                <p className="text-lg lg:text-[22px] text-green font-medium">
                  Support Verified Carbon Projects
                </p>
                <p className="text-[10px] lg:text-[13px] text-black font-medium">
                  Offset your carbon footprint and fight climate change.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
