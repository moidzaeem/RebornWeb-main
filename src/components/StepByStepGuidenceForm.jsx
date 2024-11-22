import React from "react";

const StepByStepGuidenceForm = () => {
  const handleSubmit = (values) => {
    console.log("values: ", values);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col items-center justify-center gap-5"
    >
      <div className="w-full flex flex-col gap-1">
        <label className="font-Montserrat font-semibold">First Name *</label>
        <input
          type="text"
          className="w-full pl-2 border-2 border-[#D7DCDE] rounded-md  bg-white py-3  font-Montserrat text-[#2E2E2E] mt-[10px] outline-none focus:border-[#2957A7]"
          required
          placeholder="First Name"
          name="fistName"
        />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label className="font-Montserrat font-semibold">Last Name *</label>
        <input
          type="text"
          className="w-full pl-2 border-2 border-[#D7DCDE] rounded-md  bg-white py-3  font-Montserrat text-[#2E2E2E] mt-[10px] outline-none focus:border-[#2957A7]"
          required
          placeholder="Last Name"
          name="lastName"
        />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label className="font-Montserrat font-semibold">Company Name *</label>
        <input
          type="text"
          className="w-full pl-2 border-2 border-[#D7DCDE] rounded-md  bg-white py-3  font-Montserrat text-[#2E2E2E] mt-[10px] outline-none focus:border-[#2957A7]"
          required
          placeholder="Company Name"
          name="companyName"
        />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label className="font-Montserrat font-semibold">Message *</label>
        <textarea
          type="text"
          className="w-full pl-2 border-2 border-[#D7DCDE] rounded-md  bg-white py-3  font-Montserrat text-[#2E2E2E] mt-[10px] outline-none focus:border-[#2957A7]"
          required
          placeholder="Message"
          name="message"
        />
      </div>
      <button
        type="submit"
        className="text-[13px] xsm:text-[16px] my-[40px] md:text-[20px] text-[#fff] font-poppins btn flex items-center justify-center font-medium"
      >
        Talk to an Expert
      </button>
    </form>
  );
};

export default StepByStepGuidenceForm;
