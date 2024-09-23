"use client";
// import LeftSideBar from "@/components/LeftSideBar";
// import { redirect } from "next/navigation";
// import { parseCookies } from "nookies";
// import { useEffect, useState, React } from "react";
// import { useUser } from "../../../../lib/UserConext";

const Page = () => {
  // const userData = useUser();

  // const cookies = parseCookies();
  // const accessToken = cookies?.access_token;
  // const [userApi, setUserApi] = useState(null);
  // const [isCancelled, setIsCancelled] = useState(false);

  // const [subscriptionData, setSubscriptionData] = useState([]);

  // if (!accessToken) {
  //   redirect("/login");
  // }

  // const getSubscriptionData = async () => {
  //   try {
  //     const apiUrl = `${process.env.API_URL}/subscription`;
  //     const response = await fetch(apiUrl, {
  //       method: "GET",
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`,
  //       },
  //     });

  //     if (response.ok) {
  //       const data = await response.json();
  //       if (data.status !== 200) {
  //       } else {
  //         setSubscriptionData(data.data);
  //       }
  //     } else {
  //     }
  //   } catch (error) {
  //     console.error("Request failed:", error.message);
  //   }
  // };

  // useEffect(() => {
  //   if (userData !== undefined) {
  //     setUserApi(userData?.data.api_key);
  //   }

  //   if (userApi) {
  //     getSubscriptionData();
  //   }
  // }, [userData, userApi]);

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
      <div className="bg-[#ffffff]/70 hidden lg:flex justify-between items-cneter p-7.5 rounded-[20px] gap-6">
        <div className="flex flex-col gap-1">
          <p className="text-base text-black font-medium">
            Current Subscription
          </p>
          <div className="flex items-center gap-5">
            <h3 className="text-[28px] text-green font-medium capitalize">
              Reduce your footprint
            </h3>
            <div className="py-2 px-2.5 bg-[#14A800]/10 rounded text-base text-green font-semibold">
              Active
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch gap-3">
          <p className="text-xl text-black font-medium">
            Start Date: 06/08/2024
          </p>
          <div className="w-full flex justify-between items-center">
            <p className="text-xl text-green font-semibold">£15.50</p>
            <button className="bg-[#FF1D1D]/10 hover:bg-[#FF1D1D] text-[#FF1D1D] hover:text-white py-2 px-4.5 text-base text-white font-semibold rounded-md">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
