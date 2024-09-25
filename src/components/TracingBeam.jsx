"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const TracingBeam = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Attach the Tag to Your Luggage",
      image: "/2.jpeg",
    },
    {
      title:
        "Simply Touch it to the Back of Your Phone or Scan the QR Code Located on the Back",
      image: "/asd.jpg",
    },
    {
      title: "You Will Be Directed to Our Flight Carbon Emissions Calculator",
      image: "/bag.jpeg",
    },
    {
      title:
        "Select a Verified Carbon Credits Project and Offset Your Emissions",
      image: "/bag.jpeg",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const stepHeight = window.innerHeight / 2;
      const scrollTop = window.scrollY;
      const stepIndex = Math.min(
        Math.floor(scrollTop / stepHeight),
        steps.length - 1
      );
      setActiveStep(stepIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [steps.length]);

  return (
    <div className="relative overflow-hidden bg-i">
      <p className="text-3xl p-6">About the Luggage Tag</p>
      <p className="text-5xl p-6 font-bold text-white">How it works</p>
      <div className="absolute left-1/2 top-0 h-full border-l-4 border-blue-500"></div>
      <div className="container mx-auto py-20">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className={`m-6 flex items-center my-8 ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <div className="w-1/2 p-4 z-10  shadow-md ">
              <img
                src={step.image}
                alt={step.title}
                className="rounded-lg shadow-lg"
              />
              <h3 className="text-xl mt-4">{step.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TracingBeam;
