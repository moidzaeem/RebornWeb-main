"use client";
import priceTag from "@/assets/images/price-tag.png";
import reduceFootprint from "@/assets/images/ReduceFootprint.png";
import bigImpact from "@/assets/images/big-impact.png";
import greenStart from "@/assets/images/GreenStart.png";
import doubleImpact from "@/assets/images/DoubleImpact.png";
import profound from "@/assets/images/Profound.png";
import Image from "next/image";
import { MenuItem, Select } from "@mui/material";
// import Select from "react-select";

// import LeftSideBar from "@/components/LeftSideBar";
import { redirect } from "next/navigation";
import { parseCookies } from "nookies";
import { useEffect, useState, React } from "react";
import { useUser } from "../../../../lib/UserConext";

const Page = () => {
  const userData = useUser();

  const [userApi, setUserApi] = useState(null);
  // const [isCancelled, setIsCancelled] = useState(false);

  const [subscriptionData, setSubscriptionData] = useState([]);
  const [accessToken, setAccessToken] = useState(null);

  const getSubscriptionData = async () => {
    try {
      const apiUrl = `${process.env.API_URL}/subscription`;
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        if (data.status !== 200) {
        } else {
          setSubscriptionData(data.data);
        }
      } else {
      }
    } catch (error) {
      console.error("Request failed:", error.message);
    }
  };

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
      getSubscriptionData();
    }
  }, [userData, userApi]);

  // const cancelSubscription = async (subscriptionId) => {
  //   setIsCancelled(true);

  //   try {
  //     const apiUrl = `${process.env.API_URL}/subscription/cancel`;
  //     const response = await fetch(apiUrl, {
  //       method: "PATCH",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${accessToken}`,
  //       },
  //       body: JSON.stringify({ subscriptionId }),
  //     });

  //     if (response.ok) {
  //       // Subscription successfully cancelled
  //       // You may want to update the UI or fetch subscription data again
  //       console.log("Subscription cancelled successfully");
  //       await getSubscriptionData();
  //     } else {
  //       // Handle HTTP error responses
  //       console.error("Failed to cancel subscription:", response.status);
  //     }
  //   } catch (error) {
  //     setIsCancelled(false);
  //     console.error("Request failed:", error.message);
  //   }
  // };

  // return (
  //   <div className="overflow-hidden h-full">
  //     {/* about sec 1  */}
  //     <section className="w-full flex items-start justify-start mt-20 min-h-screen ">
  //       {/* <LeftSideBar /> */}
  //       <main className="max-w-[1800px] flex-1 bg-[#fbfbfb] px-[0px] lg:px-[60px] xll:px-[120px] py-[2rem] mx-auto h-full">
  //         <h3 className=" text-center leading-normal my-7 lg:leading-[50px] xll:leading-[60px] text-[30px] lg:text-[40px] xll:text-[50px] text-black-text font-medium font-worksans">
  //           {" "}
  //           Subscriptions
  //         </h3>
  //         <div className="my-12 flex flex-row gap-6">
  //           {subscriptionData.map((subscription) => (
  //             <div
  //               key={subscription.id}
  //               className="subscription-item flex flex-col items-center justify-start gap-6"
  //             >
  //               <div>
  //                 <p>Status: {subscription.status}</p>
  //                 <p>
  //                   End Date:{" "}
  //                   {subscription.end_date
  //                     ? new Date(subscription.end_date).toLocaleDateString()
  //                     : "Ongoing"}
  //                 </p>
  //                 <p>Subscription Cost: {subscription.grand_total} GBP</p>
  //               </div>
  //               {subscription.status !== "canceled" && (
  //                 <button
  //                   onClick={() => cancelSubscription(subscription.id)}
  //                   disabled={isCancelled} // Disable the button when isCancelled is true
  //                   className="cancel-button"
  //                 >
  //                   Cancel
  //                 </button>
  //               )}
  //             </div>
  //           ))}
  //         </div>
  //       </main>
  //     </section>
  //   </div>
  // );

  const CarbonReductionProjects = [
    {
      icon: priceTag,
      name: "Start Sustainable",
      detail: "Take the first step towards a sustainable workplace",
      price: 8.25,
      positionType: "remote",
    },
    {
      icon: reduceFootprint,
      name: "Reduce Your Footprint",
      detail: "Do your part for a greener future",
      price: 15.5,
      positionType: "hybrid",
    },
    {
      icon: bigImpact,
      name: "Big Impact",
      detail: "Make the biggest difference for the environment",
      price: 26.7,
      positionType: "full-time office",
    },
  ];

  const numberOfEmployees = [
    { label: "1 employee", value: 1 },
    { label: "2 employees", value: 2 },
    { label: "3 employees", value: 3 },
    { label: "4 employees", value: 4 },
    { label: "5 employees", value: 5 },
    { label: "6 employees", value: 6 },
  ];

  const treePlantingProjects = [
    {
      icon: greenStart,
      name: "Perfect for Green Start!",
      price: "50.00",
      numberOfTrees: 50,
    },
    {
      icon: doubleImpact,
      name: "Double the Impact!",
      price: "100.00",
      numberOfTrees: 100,
    },
    {
      icon: profound,
      name: "Make a Profound Difference!",
      price: "600.00",
      numberOfTrees: 600,
    },
  ];

  const numberOfTreesOptions = [
    { label: "1 Tree - £60", value: 1 },
    { label: "1 Tree - £60", value: 2 },
    { label: "1 Tree - £60", value: 3 },
    { label: "1 Tree - £60", value: 4 },
    { label: "1 Tree - £60", value: 5 },
    { label: "1 Tree - £60", value: 6 },
  ];

  return (
    <div className="w-full flex flex-col gap-4 lg:gap-5">
      {/* ---| Current Subscription Card Mobile |--- */}
      <div className="bg-[#ffffff]/70 relative lg:hidden flex flex-col items-center px-5 py-7 rounded-2xl gap-4">
        <div className="absolute top-4 right-4 py-2 px-2.5 bg-[#14A800]/10 rounded text-[10px] text-green font-semibold">
          Active
        </div>
        <div className="flex flex-col items-center gap-1">
          <p className="text-xs text-black font-medium">Current Subscription</p>
          <p className="text-[22px] text-green font-medium capitalize">
            Reduce your footprint
          </p>
        </div>
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center gap-4">
            <p className="text-base text-black font-medium">
              Start Date:
              <br />
              06/08/2024
            </p>
            <button className="bg-[#FF1D1D] py-2 px-5 text-[10px] text-white font-semibold rounded-md">
              Cancel
            </button>
          </div>
          <p className="text-[22px] text-green font-semibold">£15.50</p>
        </div>
      </div>
      {/* ---| Current Subscription Card Laptop |--- */}
      {subscriptionData.map((subscription, index) => (
        <div
          key={index} // Use a unique key, consider subscription.id if available
          className="bg-[#ffffff]/70 hidden lg:flex justify-between items-center p-7.5 rounded-[20px] gap-6"
        >
          <div className="flex flex-col gap-1">
            {/* <p className="text-base text-black font-medium">
              Current Subscription
            </p> */}
            <div className="flex items-center gap-5">
              <h3 className="text-[28px] text-green font-medium capitalize">
                {subscription.title || "Reduce your footprint"}{" "}
                {/* Assuming a title field */}
              </h3>
              <div className="py-2 px-2.5 bg-[#14A800]/10 rounded text-base text-green font-semibold">
                {subscription.status === "active" ? "Active" : "Inactive"}{" "}
                {/* Assuming an active field */}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch gap-3">
            <p className="text-xl text-black font-medium">
              Start Date:{" "}
              {new Date(subscription.createdAt).toLocaleDateString()}{" "}
              {/* Format the date */}
            </p>
            <div className="w-full flex justify-between items-center">
              <p className="text-xl text-green font-semibold">
                {subscription.price} {/* Assuming a price field */}
              </p>
              {subscription.status === "active"?
              
              <button
                className="bg-[#FF1D1D]/10 hover:bg-[#FF1D1D] text-[#FF1D1D] hover:text-white py-2 px-4.5 text-base font-semibold rounded-md"
                onClick={() => handleCancel(subscription.id)} // Assuming you have a function to handle cancellation
              >
                Cancel
              </button>: null}
            </div>
          </div>
        </div>
      ))}

      {/* <div className="bg-[#ffffff]/70 flex flex-col items-center py-7 lg:py-9 px-5 md:px-10 xl:px-20 rounded-[20px]">
        <h3 className="text-[34px] lg:text-[44px] text-green font-medium">
          Monthly Subscription
        </h3>
        <p className="text-sm lg:text-lg text-black font-medium">
          Fund certified climate projects with high social and humanitarian
          benefits.
        </p>
        <h4 className="mt-4 lg:mt-8.5 text-lg lg:text-3xl text-[#0A033C] font-semibold">
          Support Carbon Reduction and Removal Projects
        </h4>
        <div className="w-full mt-5 grid grid-cols-3 gap-4">
          {CarbonReductionProjects.map((project) => (
            <div
              key={project.name}
              className="bg-white col-span-3 md:col-span-1 flex flex-col p-5 rounded-[10px]"
            >
              <div className="flex flex-col pb-4 border-b border-[#0A033C15]">
                <Image
                  src={project.icon}
                  alt={project.name}
                  className="w-7.5 h-auto"
                />
                <h6 className="mt-4 text-lg lg:text-xl text-[#0A033C] font-semibold">
                  {project.name}
                </h6>
                <p className="mt-2.5 text-[10px] lg:text-sm text-[#0A033C] font-medium">
                  {project.detail}
                </p>
              </div>
              <div className="mt-3 lg:mt-4.5 flex lg:flex-col items-center lg:items-start justify-between gap-3">
                <div className="flex flex-col lg:flex-row lg:items-center lg:gap-2.5">
                  <h5 className="text-2xl lg:text-3xl text-[#0A033C] font-semibold">
                    <span className="text-base lg:text-xl">£</span>
                    {project.price}
                  </h5>
                  <p className="text-[10px] lg:text-xs text-[#5D5A6F] font-semibold">
                    Per employee per month
                  </p>
                </div>
                <Select
                  fullWidth
                  defaultValue={numberOfEmployees[0].value}
                  sx={{
                    // "& .MuiOutlinedInput-notchedOutline": {
                    //   borderColor: "transparent", // Remove the default border
                    // },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#14A800", // Prevent border color change on hover
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      border: "0px", // borderColor: "#14A800", // Prevent border color change on focus
                      // boxShadow: "none", // Remove any focus shadow
                    },
                  }}
                  className="border border-green text-green text-base font-medium hover:bg-green hover:text-white font-montserrat"
                >
                  {numberOfEmployees.map((i) => (
                    <MenuItem key={i.value} value={i.value}>
                      {i.label}
                    </MenuItem>
                  ))}
                </Select>
              </div>
              <p className="mt-2 lg:mt-5 text-[10px] lg:text-xs text-[] font-semibold">
                Offset the average emissions for a {project.positionType}{" "}
                employee.
              </p>
            </div>
          ))}
        </div>
        <p className="mt-4 lg:mt-6 text-xs lg:text-base text-black font-medium">
          VCC’s are verified via Gold Standard, Verra, & UN and ensure we adhere
          to the highest governance and compliance standards in the industry.
        </p>
        <h3 className="mt-7 text-lg lg:text-3xl text-[#0A033C] font-semibold">
          Support Certified Tree-Planting Projects
        </h3>
        <div className="w-full mt-7.5 grid grid-cols-3 gap-4">
          {treePlantingProjects.map((project) => (
            <div
              key={project.name}
              className="bg-white col-span-3 md:col-span-1 flex flex-col p-5 rounded-[10px]"
            >
              <Image
                src={project.icon}
                alt={project.name}
                className="w-7.5 h-auto"
              />
              <h6 className="mt-4 text-lg lg:text-xl text-[#0A033C] font-semibold">
                {project.name}
              </h6>
              <h5 className="mt-8 text-2xl lg:text-3xl text-[#0A033C] font-semibold">
                <span className="text-base lg:text-xl">£</span>
                {project.price}
              </h5>
              <p className="mt-2 text-sm text-[#0A033C] font-medium">
                Select a different amount of trees
              </p>
              <div className="mt-3.5 rounded-md border border-green p-4 text-center text-base text-green font-medium">
                {project.numberOfTrees} Trees
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 w-full bg-white flex flex-col lg:flex-row lg:justify-between items-center rounded-[10px] gap-4 p-5">
          <p className="text-base font-semibold text-[#0A033C]">
            Select a custom number of trees you will like to plant per month
          </p>
          <Select
            fullWidth
            defaultValue={numberOfEmployees[0].value}
            sx={{
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#14A800",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                border: "0px",
              },
            }}
            className="border border-green text-green text-base font-medium hover:bg-green hover:text-white font-montserrat md:!max-w-64"
          >
            {numberOfTreesOptions.map((i) => (
              <MenuItem key={i.value} value={i.value}>
                {i.label}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div className="mt-5 lg:mt-8 w-full grid grid-cols-2 md:grid-cols-3 items-center gap-6 lg:gap-12">
          <div className="col-span-1 md:col-span-2 flex items-center md:gap-7.5">
            <h3 className="min-w-fit text-[28px] lg:text-[45px] text-green font-semibold">
              <span className="text-base lg:text-[28px]">Total: </span>
              <span className="text-xl lg:text-4xl">£</span>15.50
            </h3>
            <p className="hidden lg:block text-xs text-black font-medium">
              Feel great about your contribution! 100% of your support goes
              towards climate impact and other projects dedicated to our planet.
            </p>
          </div>
          <button className="w-full col-span-1 rounded p-3 lg:p-4 text-xs lg:text-base font-medium bg-green text-white">
            Continue
          </button>
        </div>
        <p className="mt-2 block lg:hidden text-xs text-black font-medium">
          Feel great about your contribution! 100% of your support goes towards
          climate impact and other projects dedicated to our planet.
        </p>
      </div> */}
    </div>
  );
};

export default Page;
