"use client";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { FaGlobeAfrica, FaTree } from "react-icons/fa";
import MonthlyPlanting from "./MonthlyPlanting";
import MyTeam from "./MyTeam";
import Image from "next/image";

const steps = ["Step 1", "Step 2", "Step 3", "Step 4"];

export default function StepperComp() {
  const [activeStep, setActiveStep] = useState(0);
  const [step1, setStep1] = useState("");
  const [step2, setStep2] = useState("");

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const step1plantClick = () => {
    setStep1("plant-tree");
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const step1offsetClick = () => {
    setStep1("plant-tree");
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const step2teamClick = () => {
    setStep2("team");
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const everymonth = () => {
    setStep2("month");
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const oneOff = () => {
    setStep2("oneoff");
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <main className="mx-auto flex items-center justify-center flex-col">
            <h1 className="text-center w-full sm:w-[70%] my-[60px] font-poppins text-[25px] xsm:text-[30px] lg:text-[35px] xll:text-[40px] font-[500] text-[#3d3d3d]">
              <span className="font-bold text-[#14a800]">
                Support tree planting <br />
              </span>
              <span className="text-[25px]">
                {" "}
                Grow Your Bussiness Sustainably
              </span>
            </h1>
            <motion.div
              onClick={step1plantClick}
              initial={{ x: -250, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "easeInOut" }}
              className="flex h-auto cursor-pointer lg:h-[520px] flex-col w-full lg:flex-row items-flex-start justify-center"
            >
              <div className=" h-[400px] rounded-tr-lg rounded-tl-lg  lg:rounded-tr-none lg:rounded-s-xl  gre-card w-full  sm:w-[80%] mdd:w-[60%] py-16 lg:flex-1  flex items-center justify-center flex-col">
                <div className="w-full h-full xsm:w-10/12 lg:flex-1 flex items-center text-center lg:text-start lg:items-start  justify-center flex-col">
                  <p>
                    <Image
                      src={"/Reforestation .svg"}
                      alt="image"
                      height={1000}
                      width={1000}
                      className="w-[80px] h-[80px]"
                    />
                    {/* <FaTree className="text-white my-6 stepicon " size={35} /> */}
                  </p>
                  <h3 className=" text-center lg:text-left mb-[20px] font-poppins text-[25px] xsm:text-[30px] lg:text-[35px] xll:text-[40px] font-[500] text-white">
                    Reforestation
                  </h3>
                  <p className="leading-[26px] text-sm sm:text-[16px]  font-poppins tracking-wide text-[#dedbdb]">
                    Reforestation involves recovering destroyed forest areas by
                    planting new trees. This crucial effort combats climate
                    change, restores habitats, and supports local communities.
                  </p>
                </div>
              </div>
              <div className=" overflow-hidden rounded-br-lg rounded-bl-lg  lg:rounded-bl-none lg:rounded-e-lg w-full h-full relative sm:w-[80%] mdd:w-[60%] lg:flex-1 ">
                <Image
                  src="/Untitled design - 2024-06-17T131310.595.png"
                  width={1000}
                  height={1000}
                  alt="Plant Tree Image"
                  loading="lazy"
                  className="w-full lg:h-[400px] h-full"
                />
                {/* <div className='w-full overflow-hidden  h-full absolute top-0 left-0 bg-black opacity-30 z-0'></div> */}
              </div>
            </motion.div>

            <motion.div
              onClick={step1offsetClick}
              initial={{ x: 250, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "easeInOut" }}
              className="flex my-24 cursor-pointer h-auto lg:h-[400px] flex-col w-full lg:flex-row items-center justify-center"
            >
              <div className=" overflow-hidden rounded-tr-lg rounded-tl-lg  lg:rounded-tr-none lg:rounded-s-xl  w-full h-full relative sm:w-[80%] mdd:w-[60%] lg:flex-1">
                <Image
                  src="/Untitled design - 2024-06-17T132802.901.png"
                  width={1000}
                  height={1000}
                  alt="bussnessec2"
                  loading="lazy"
                  className="w-full border lg:h-[400px] h-full"
                />
              </div>

              <div className=" h-full rounded-br-lg rounded-bl-lg  lg:rounded-bl-none lg:rounded-e-lg  gre-card w-full  sm:w-[80%] mdd:w-[60%] py-16 lg:flex-1  flex items-center justify-center flex-col">
                <div className="w-full h-full xsm:w-10/12 lg:flex-1 flex items-center text-center lg:text-start lg:items-start  justify-center flex-col">
                  <p>
                    <Image
                      src={"/Afforestation .svg"}
                      alt="image"
                      height={1000}
                      width={1000}
                      className="w-[80px] h-[80px]"
                    />
                  </p>
                  <h3 className="mt-2 text-center lg:text-left mb-[20px] font-poppins text-[25px] xsm:text-[30px] lg:text-[35px] xll:text-[40px] font-[500] text-white">
                    Afforestation
                  </h3>
                  <p className="leading-[26px] text-sm sm:text-[16px]  font-poppins tracking-wide text-[#dedbdb]">
                    Afforestation is the establishment of a forest or stand of
                    trees (forestation) in an area where there was no recent
                    tree cover. The benefits of afforestation include helping
                    protect bare ground from soil erosion, flooding, and
                    sequestering carbon dioxide from the atmosphere.
                  </p>
                </div>
              </div>
            </motion.div>
          </main>
        );
      case 1:
        return (
          <div style={{ marginTop: 100, marginBottom: 50 }}>
            {step1 === "offset" ? (
              <div
                initial={{ y: 200 }}
                viewport={{ once: true }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center mt-6 justify-center gap-7 sm:gap-16 flex-wrap"
              >
                <div
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(20,168,0,1) 0%, rgba(6,38,2,1) 100%)",
                    boxShadow: "2px 4px 8px #434343",
                    borderRadius: "30px 0px 30px 0px",
                  }}
                  onClick={step2teamClick}
                  className="cursor-pointer w-full sm:flex-1 hover:scale-110 duration-300 flex items-center justify-center flex-col text-center px-5 md:px-10 py-10 min-h-[300px] bg-white hover:shadow-xl card  z-10 shadow-lg"
                >
                  <FaTree size={30} className="my-5 arrow  text-white" />
                  <h4 className="text-2xl  text-white font-semibold">
                    Monthly Subscription
                  </h4>
                  <p className="text-[16px]  text-white  font-worksans pt-2">
                    Making the planet greener every month.
                  </p>
                </div>
                <Link
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(20,168,0,1) 0%, rgba(6,38,2,1) 100%)",
                    boxShadow: "2px 4px 8px #434343",
                    borderRadius: "31% 31% 20% 23% / 30% 26% 26% 28%",
                  }}
                  href={"/contact"}
                  className="cursor-pointer w-full sm:flex-1 hover:scale-110 duration-300 flex items-center justify-center flex-col text-center px-5 md:px-10 py-10 min-h-[300px] bg-white hover:shadow-xl card  z-10 shadow-lg"
                >
                  <FaTree size={30} className="my-5 arrow text-white" />
                  <h4 className="text-2xl  text-white font-semibold">
                    Occasional
                  </h4>
                  <p className="text-[16px] text-white  font-worksans pt-2">
                    Flexible tree planting support.
                  </p>
                </Link>
                <Link
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(20,168,0,1) 0%, rgba(6,38,2,1) 100%)",
                    boxShadow: "2px 4px 8px #434343",
                    borderRadius: "30px 30px 0px 0px",
                  }}
                  href={"/contact"}
                  className="cursor-pointer  text-white w-full sm:flex-1 hover:scale-110 duration-300 flex items-center justify-center flex-col text-center px-5 md:px-10 py-10 min-h-[300px] bg-white hover:shadow-xl card  z-10 shadow-lg"
                >
                  <FaTree size={30} className="my-5 arrow  text-white" />
                  <h4 className="text-2xl  text-white  font-semibold">
                    Tree Planting Integration
                  </h4>
                  <p className="text-[16px]  text-white  font-worksans pt-2">
                    Plant a tree for every sale or other company activity using
                    our API integrations.
                  </p>
                </Link>
              </div>
            ) : (
              <div
                initial={{ y: 200 }}
                viewport={{ once: true }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center mt-6 justify-center gap-7 sm:gap-16 flex-wrap"
              >
                <div
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(20,168,0,1) 0%, rgba(6,38,2,1) 100%)",
                    boxShadow: "2px 4px 8px #434343",
                    borderRadius: "30px 0px 30px 0px",
                  }}
                  onClick={everymonth}
                  className=" cursor-pointer w-full sm:flex-1 hover:scale-110 duration-300 flex items-center justify-center flex-col text-center px-5 md:px-10 py-10 min-h-[300px]  hover:shadow-xl card  z-10 shadow-lg"
                >
                  <FaTree size={30} className="mb-8 arrow text-white" />

                  <h4 className="text-2xl text-white  font-semibold">
                    Monthly Subscription
                  </h4>
                  <p className="text-[16px] text-white  font-worksans pt-2">
                    Making the planet greener every month.
                  </p>
                </div>
                <div
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(20,168,0,1) 0%, rgba(6,38,2,1) 100%)",
                    boxShadow: "2px 4px 8px #434343",
                    borderRadius: "31% 31% 20% 23% / 30% 26% 26% 28%",
                  }}
                  onClick={oneOff}
                  className="cursor-pointer  border-2 border-green w-full sm:flex-1 hover:scale-110 duration-300 flex items-center justify-center flex-col text-center px-5 md:px-10 py-10 min-h-[300px] bg-white hover:shadow-xl card  z-10 shadow-lg"
                >
                  <FaTree size={30} className=" arrow text-white" />

                  <h4 className="text-2xl mt-5  font-semibold">
                    <span className="text-white gr-span">Occasional</span>
                  </h4>
                  <p className="text-[16px]  text-white font-worksans pt-2">
                    Flexible tree planting support.
                  </p>
                </div>
                <Link
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(20,168,0,1) 0%, rgba(6,38,2,1) 100%)",
                    boxShadow: "2px 4px 8px #434343",
                    borderRadius: "30px 30px 0px 0px",
                  }}
                  href={"/contact"}
                  className="cursor-pointer w-full sm:flex-1 hover:scale-110 duration-300 flex items-center justify-center flex-col text-center px-5 md:px-10 py-10 min-h-[300px] bg-green hover:shadow-xl card  z-10 shadow-lg"
                >
                  <FaTree size={30} className="mb-10 arrow text-white" />
                  <h4 className="text-2xl  font-semibold">
                    <span className=" text-white gr-span">
                      Tree Planting Integration
                    </span>
                  </h4>
                  <p className="text-[16px] text-white  font-worksans pt-2">
                    Plant a tree for every sale or other company activity using
                    our API integrations.
                  </p>
                </Link>
              </div>
            )}
          </div>
        );
      case 2:
        return (
          <>
            {(step2 === "team" && <MyTeam />) ||
              (step2 === "month" && <MonthlyPlanting month={true} />) ||
              (step2 === "oneoff" && <MonthlyPlanting month={false} />)}
          </>
        );
      default:
        return null;
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeStep]);
  return (
    <Box mt={20} sx={{ width: "100%" }}>
      <div className="hidden sm:block">
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel className="px-4 py-4 rounded-lg bg-[#14A800] border-2 border-green ">
                <span className="text-white"> {label}</span>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
      {activeStep === steps.length ? (
        <>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </>
      ) : (
        <>
          <Box mt={4}>{renderStepContent()}</Box>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {/* <Button onClick={handleNext}>{activeStep === steps.length - 1 ? 'Finish' : 'Next'}</Button> */}
          </Box>
        </>
      )}
    </Box>
  );
}
