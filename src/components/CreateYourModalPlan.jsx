import { Box, Modal } from "@mui/material";
import React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "20px",
  p: 4,
};

const CreateYourModalPlan = (props) => {
  const { openModal, setOpenModal } = props;
  return (
    <Modal open={openModal} onClose={setOpenModal}>
      <Box sx={style}>
        <form className="w-[85vw] md:w-[55vw] flex-col flex items-center justify-center max-h-[75vh] overflow-auto sm:w-10/12 mdd:flex-1 gap-5">
          <div className="flex flex-col gap-1">
            <label className="font-Montserrat  font-semibold">
              Business Name *
            </label>
            <input
              type="text"
              className="w-full pl-2 border-2 border-[#D7DCDE] rounded-md  bg-white py-3  font-Montserrat text-[#2E2E2E] mt-[10px] outline-none focus:border-[#2957A7]"
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-Montserrat  font-semibold">Industry *</label>
            <select
              className="w-full pl-2 border-2 border-[#D7DCDE] rounded-md bg-white py-3 font-Montserrat text-[#2E2E2E] mt-[10px] outline-none focus:border-[#2957A7]"
              required
            >
              <option value="">Select your Industry</option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="Retail">Retail</option>
              <option value="Technology">Technology</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Hospitality">Hospitality</option>
              <option value="Other">Other (please specify)</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-Montserrat  font-semibold">
              Business Size *
            </label>
            <select
              className="w-full pl-2 border-2 border-[#D7DCDE] rounded-md bg-white py-3 font-Montserrat text-[#2E2E2E] mt-[10px] outline-none focus:border-[#2957A7]"
              required
            >
              <option value="">Select your Industry</option>
              <option value="Small">Small (1-50 employees)</option>
              <option value="Medium">Medium (51-200 employees)</option>
              <option value="Large">Large (200+ employees)</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-Montserrat  font-semibold">
              Current Sustainability Efforts
            </label>
            <select
              className="w-full pl-2 border-2 border-[#D7DCDE] rounded-md bg-white py-3 font-Montserrat text-[#2E2E2E] mt-[10px] outline-none focus:border-[#2957A7]"
              required
            >
              <option value="">Your Current Initiatives</option>
              <option value="Energy efficiency upgrades">
                Energy efficiency upgrades
              </option>
              <option value="Renewable energy adoption">
                Renewable energy adoption
              </option>
              <option value="Waste reduction">Waste reduction</option>
              <option value="Employee engagement programs">
                Employee engagement programs
              </option>
              <option value="Other">Other (please specify)</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-Montserrat  font-semibold">
              Key Goals *
            </label>
            <select
              className="w-full pl-2 border-2 border-[#D7DCDE] rounded-md bg-white py-3 font-Montserrat text-[#2E2E2E] mt-[10px] outline-none focus:border-[#2957A7]"
              required
            >
              <option value="">Your Main Goals</option>
              <option value="Reduce carbon footprint">
                Reduce carbon footprint
              </option>
              <option value="Achieve net zero emissions">
                Achieve net zero emissions
              </option>
              <option value="Transition to renewable energy">
                Transition to renewable energy
              </option>
              <option value="Implement circular economy practices">
                Implement circular economy practices
              </option>
              <option value="Other">Other (please specify)</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-Montserrat  font-semibold">
              Preferred Contact Method *
            </label>
            <select
              className="w-full pl-2 border-2 border-[#D7DCDE] rounded-md bg-white py-3 font-Montserrat text-[#2E2E2E] mt-[10px] outline-none focus:border-[#2957A7]"
              required
            >
              <option value="">Your Contact Method</option>
              <option value="Email">Email</option>
              <option value="Phone">Phone</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-Montserrat  font-semibold">
              Contact Information *
            </label>
            <input
              type="text"
              className="w-full pl-2 border-2 border-[#D7DCDE] rounded-md  bg-white py-3  font-Montserrat text-[#2E2E2E] mt-[10px] outline-none focus:border-[#2957A7]"
              placeholder="Enter Your Name"
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-Montserrat  font-semibold">
              Email Address *
            </label>
            <input
              type="text"
              className="w-full pl-2 border-2 border-[#D7DCDE] rounded-md  bg-white py-3  font-Montserrat text-[#2E2E2E] mt-[10px] outline-none focus:border-[#2957A7]"
              placeholder="Enter Your Email Address"
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-Montserrat  font-semibold">
              Phone Number
            </label>
            <input
              type="text"
              className="w-full pl-2 border-2 border-[#D7DCDE] rounded-md  bg-white py-3  font-Montserrat text-[#2E2E2E] mt-[10px] outline-none focus:border-[#2957A7]"
              placeholder="Enter Your Phone Number"
              required
            />
          </div>

          <button type="submit" className="btn w-fit mx-auto">
            Submit
          </button>
        </form>{" "}
      </Box>
    </Modal>
  );
};

export default CreateYourModalPlan;
