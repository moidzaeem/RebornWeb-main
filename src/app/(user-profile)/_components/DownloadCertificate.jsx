import React from "react";
import signatures from "../../../../public/assets/images/certificate-signature-removebg-preview.png";
import Image from "next/image";

const DownloadCertificate = () => {
  return (
    <div
      className="bg-no-repeat bg-cover bg-center w-full p-16 flex justify-end"
      style={{ backgroundImage: "url('/assets/images/ceartificate-bg.png')" }}
    >
      <div className="flex flex-col gap-16 max-w-screen-md py-20 px-10 items-center">
        <div className="flex flex-col items-center gap-3">
          <h3 className="uppercase font-bold text-8xl text-black">climate</h3>
          <p className="uppercase font-bold text-5xl text-black">
            impact certificate
          </p>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <p className="text-xl font-medium text-black">
            We are proud to give this certificate to
          </p>
          <h2 className="capitalize font-medium text-9xl text-black">
            User Name
          </h2>
        </div>
        <p className="text-center text-xl text-black font-medium">
          In recognition of your significant contribution to environmental
          sustainability, we commend you for planting [xxx] trees and supporting
          the avoidance of [CO2 value] tonnes of CO2. Your actions have made a
          positive and lasting impact on our planet.
        </p>
        <div className="flex justify-end w-full">
          <Image src={signatures} alt="signatures" />
        </div>
      </div>
    </div>
  );
};

export default DownloadCertificate;
