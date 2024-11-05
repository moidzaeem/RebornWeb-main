import MaximizeSvg from "@/assets/svg/MaximizeSvg";
import Image from "next/image";
import React from "react";
import GreenRewardModal from "@/app/(user-profile)/_components/GreenRewardModal";

const GreenRewardCard = (props) => {
  const { imageSrc, title, detail, buttonText, disabled } = props;

  const [openModal, setOpenModal] = React.useState(false);

  return (
    <div className="relative col-span-2 md:col-span-1 bg-white flex flex-col items-center gap-4 lg:gap-5 rounded-[20px] pt-4 lg:pt-5.5 pb-4 lg:pb-10 px-6 lg:px-8">
      <button
        onClick={() => setOpenModal(true)}
        className="absolute top-5 lg:top-7 right-5 lg:right-7 text-green"
      >
        <MaximizeSvg className="fill-current w-6 lg:w-8.5 h-6 lg:h-8.5" />
      </button>
      <GreenRewardModal
        imageSrc={imageSrc}
        title={title}
        detail={detail}
        openModal={openModal}
        setOpenModal={(prev) => setOpenModal(!prev)}
        buttonText={buttonText}
        disabled={disabled}
      />
      <Image
        src={imageSrc}
        alt="reborn-green-bonsai"
        className="w-36 lg:w-48 h-auto"
      />
      <h3 className="text-[22px] lg:text-[34px] text-green font-medium text-center">
        {title}
      </h3>
      <p className="text-sm lg:text-lg text-black font-medium text-center md:min-h-45 lg:min-h-91 xl:min-h-56 xll:min-h-36">
        {detail}
      </p>
      <button
        disabled={disabled}
        className="w-full flex justify-center items-center gap-2 bg-green disabled:cursor-not-allowed disabled:bg-[#9C9C9C] text-sm lg:text-base text-white font-medium p-2.5 lg:p-3 rounded"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default GreenRewardCard;
