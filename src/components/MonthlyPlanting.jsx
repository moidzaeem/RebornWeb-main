"use client";

import axios from "axios";
import Image from "next/image";
import { redirect } from "next/navigation";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";
import AppButton from "./AppButton";

const MonthlyPlanting = ({ month }) => {
  const stripePromise = loadStripe(
    "pk_test_51P04IEFuASpzJP3Vnfivb5m5sBP5kWHqovoCzBEd2dceKS0au8CwoyzkZ8buLf3S5VECNDl4JM8MXFpTTZvHhZ6j00QT355vjk"
  );

  const router = useRouter();
  const [stripeId, setStripeId] = useState(null);

  const cookies = parseCookies();

  const accessToken = cookies?.access_token;

  const [treeInp, setTreeInp] = useState(0);
  const [disable, setDiable] = useState(true);

  const handle = async () => {
    setDiable(true);
    if (treeInp === 0) {
      toast.error("Please select a tree plan");
      setDiable(false);
    } else if (!accessToken) {
      setDiable(false);
      router.push("/login");
    } else {
      try {
        const apiUrl = process.env.API_URL;
        const unitCost = 1; // cost per tree
        const totalAmount = treeInp;
        // Assume you already have the accessToken available

        const authenticatedResponse = await axios.post(
          `${apiUrl}/order`,
          {
            unit_cost: unitCost,
            tree_count: totalAmount,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        if (authenticatedResponse.status === 200) {
          redirectToStripe(authenticatedResponse.data.data.id);
          setStripeId(authenticatedResponse.data.data.id);
          setDiable(false);
        } else {
          // Handle error response
          toast.error("Request failed");
        }
      } catch (error) {
        // Handle error
        toast.error("Request failed:", error.message);
        console.log(error);
        setDiable(false);
      }
    }
  };

  const redirectToStripe = async (sessionId) => {
    const stripe = await stripePromise;
    await stripe.redirectToCheckout({ sessionId });
  };

  useEffect(() => {
    if (treeInp < 1) {
      setDiable(true);
    } else {
      setDiable(false);
    }
  }, [treeInp]);
  return (
    <div>
      <section className="mx-auto my-4 flex items-center justify-center">
        {/* image and buttons main  */}
        <div
          style={{
            backgroundImage: "url('/images/TREE SELECTION PAGE.png')",
          }}
          className="w-full  px-10 flex flex-col min-h-[90vh] object-cover bg-no-repeat bg-cover object-center rounded-lg items-center justify-center"
        >
          <div className=" relative flex h-full p-4 shadow-lg shadow-[#2c2c2c] bg-[#00000036] flex-col items-center py-20 justify-between">
            {/* <h2 className="font-poppins text-center text-[16px] xsm:text-[18px] sm:text-[22px] font-semibold text-white">
              Select Number of Trees
            </h2> */}
            <Image
              src={"/images/Number Trees Selection Box.png"}
              height={500}
              width={500}
              alt="image"
              className="w-[300px] h-[300px]"
            />
            <div className="absolute bottom-[156px] w-[200px] bg-white rounded-lg my-3 flex items-center justify-center flex-col h-auto px-8 text-center py-6">
              <input
                type="number"
                value={treeInp}
                onChange={(e) => setTreeInp(e.target.value)}
                className="bg-transparent text-[25px] font-semibold text-center outline-none w-1/2 h-full"
              />
              <p className="font-semibold font-poppins">
                Trees {month && "per month"}
              </p>
            </div>
            <div className="h-[40px]" />
            <h2 className="font-poppins text-center text-[16px] xsm:text-[18px] sm:text-[30px] font-semibold text-white">
              Grow your forest!
            </h2>
            <p className=" font-poppins text-[12px] text-[#fff]">
              Choose how many trees you'll plant to make a difference
              {/* Please enter a minimum of 10 trees {month && "per month"} */}
            </p>
          </div>
          <div className="flex flex-wrap my-10 items-center justify-center gap-10 sm:gap-0 mdd:justify-between  w-full sm:w-[90%] mdd:w-[85%] lg:w-[75%]">
            <div className="flex gap-y-2 flex-col items-center justify-start">
              <p className=" text-[12px] text-white sm:text-[14px] font-light font-poppins">
                Perfect for a green start!
              </p>
              <AppButton onClick={() => setTreeInp(50)} text="50 Trees" />
            </div>
            <div className="flex gap-y-2 flex-col items-center justify-start">
              <p className=" text-[12px] text-white sm:text-[14px] font-light font-poppins">
                Double the impact!
              </p>

              <AppButton onClick={() => setTreeInp(100)} text="100 Trees" />
            </div>
            <div className="flex gap-y-2 flex-col items-center justify-start">
              <p className="font-poppins text-[12px] text-white sm:text-[14px] font-light ">
                Make a profound difference!
              </p>
              <AppButton onClick={() => setTreeInp(600)} text="600 Trees" />
              {/* <button
                onClick={() => setTreeInp(600)}
                className=" px-4 xsm:px-6 sm:px-10 md:px-14 text-[14px] md:text-[18px] bg-green py-3 rounded-full text-white font-semibold font-worksans tracking-wide"
              >
                600 Trees
              </button> */}
            </div>
          </div>
          <div className="flex my-10 items-center justify-between w-full">
            <p className="block max-w-sm p-6 bg-green  border border-green rounded-lg shadow hover:bg-lime-700 ">
              <p className=" font-poppins font-normal text-white ">
                Total: £ {treeInp}.00 / {month && "month"}
              </p>
            </p>
            <button
              disabled={treeInp === 0}
              onClick={handle}
              className={` ${
                disable ? "bg-[#14a80050]" : "bg-green"
              } px-4 font-poppins xsm:px-6 sm:px-10 md:px-14 text-[14px] md:text-[18px]  py-3 rounded-sm text-white font-semibold  tracking-wide`}
            >
              Continue
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MonthlyPlanting;
