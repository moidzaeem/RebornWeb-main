import { Box, Modal } from "@mui/material";
import Image from "next/image";
import React from "react";
import LockSvg from "@/assets/svg/LockSvg";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  //   width: 400,
  bgcolor: "background.paper",
  //   border: "2px solid #000",
  boxShadow: 24,
  borderRadius: "20px",
  p: 4,
  //   pt: 2,
  //   px: 4,
  //   pb: 3,
  //   background: "white",
};

const GreenRewardModal = (props) => {
  const { imageSrc, title, detail, openModal, setOpenModal } = props;

  return (
    <Modal open={openModal} onClose={setOpenModal}>
      <Box sx={style}>
        <div className="flex max-w-[85vw] md:max-w-[55vw] flex-col items-center">
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
          <button className="w-full flex justify-center items-center gap-2 bg-[#9C9C9C] text-sm lg:text-base text-white font-medium p-2.5 lg:p-3 rounded">
            <LockSvg className="fill-current" /> Unlock at 500 tons of CO2
            avoided
          </button>
        </div>
      </Box>
    </Modal>
  );
};

export default GreenRewardModal;
