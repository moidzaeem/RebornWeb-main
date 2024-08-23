"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { SendMailClient } from "zeptomail";
import axios from "axios";


const ContactCom = () => {
  const router = useRouter();
  const [regValue, setRegValue] = useState({
    name: "",
    email: "",
    country: "",
    enquiryReason: "",
    hearAbout: "",
    message: "",
  });
  const [errors, setError] = useState({
    nameEr: "",
    emailEr: "",
  });

  const handle = async (e) => {
    e.preventDefault();
    const { name, email, country, message } = regValue;

    if (name.length <= 4) {
      setError((pev) => ({ ...pev, nameEr: "Please Enter a Correct Name" }));
      setError((pev) => ({ ...pev, emailEr: "" }));

      toast.error("Please Enter a Correct Name", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(regValue.email)) {
      setError((pev) => ({ ...pev, nameEr: "Please Enter a Valid Email" }));
      setError((pev) => ({ ...pev, nameEr: "" }));

      toast.error("Please Enter a Correct Email", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      
      try {
        // Send data to server
        await axios.post('https://backend.reborngreen.org/send-email', regValue);
        toast.success("Your message has been sent!", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        // Clear form fields
        setRegValue({
          name: "",
          email: "",
          country: "",
          enquiryReason: "",
          hearAbout: "",
          message: "",
        });
      } catch (error) {
        console.log(error);
        toast.error("There was an error sending your message. Please try again later.", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  };

  return (
    <>
      <main className="w-full  my-[20px] sm:my-[20px] h-full flex items-center justify-center flex-col mdd:flex-row gap-[60px] mx-auto">
        <div className=" w-full sm:w-10/12 mdd:flex-1">
          <Image
            src="/Untitled design - 2024-06-02T110913.411.png"
            loading="lazy"
            width={600}
            height={600}
            className="w-full h-auto"
            alt="contact image"
          />
        </div>

        <motion.form
          viewport={{ once: true }}
          onSubmit={handle}
          initial={{ opacity: 0, x: -180 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: "tween" }}
          action=""
          className="flex-col  flex items-center justify-center w-full sm:w-10/12 mdd:flex-1"
        >
          <div className="mt-[50px] flex flex-col gap-[10px] w-full">
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, x: -180 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, type: "tween" }}
              className="w-full h-auto xsm:h-[80px]"
            >
              <label className="font-Montserrat  font-semibold">
                Full name *
              </label>
              <input
                type="text"
                className="w-full pl-2 border-2 border-[#D7DCDE] rounded-md  bg-white py-3  font-Montserrat text-[#2E2E2E] mt-[10px] outline-none focus:border-[#2957A7]"
                name="full name"
                value={regValue.name}
                onChange={(e) =>
                  setRegValue((prev) => ({ ...prev, name: e.target.value }))
                }
                required
              />
              {errors.nameEr && (
                <span style={{ color: "red" }}>{errors.nameEr}</span>
              )}
            </motion.div>
            {/* ---- email  */}
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, x: 180 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, type: "tween" }}
              className="w-full h-auto xsm:h-[80px]"
            >
              <label className="font-Montserrat font-semibold">Email *</label>
              <input
                type="email"
                className="w-full bg-white py-3 border-2 border-[#D7DCDE] rounded-md  font-Montserrat text-[#2E2E2E] mt-[10px] outline-none pl-2 focus:border-[#2957A7]"
                name="Email"
                value={regValue.email}
                onChange={(e) =>
                  setRegValue((prev) => ({ ...prev, email: e.target.value }))
                }
                required
              />
              {errors.emailEr && (
                <span style={{ color: "red" }}>{errors.emailEr}</span>
              )}
            </motion.div>

            {/* ---- Country Select  */}
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, x: -180 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, type: "tween" }}
              className="w-full h-[80px]"
            >
              {/* Country Field */}
              <label className="font-Montserrat font-semibold">Country *</label>
              <select
                className="w-full pl-2 border-2 border-[#D7DCDE] rounded-md bg-white py-3 font-Montserrat text-[#2E2E2E] mt-[10px] outline-none focus:border-[#2957A7]"
                value={regValue.country}
                onChange={(e) =>
                  setRegValue((prev) => ({ ...prev, country: e.target.value }))
                }
                required
              >
                <option value="">Select a country</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
                <option value="Rest of Europe">Rest of Europe</option>
                <option value="Rest of World">Rest of World</option>
              </select>
            </motion.div>

            {/* ---- Reason For inquer */}
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, x: 180 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, type: "tween" }}
              className="w-full h-auto xsm:h-[80px]"
            >
              {/* Reason for Enquiry Field */}
              <label className="font-Montserrat font-semibold">
                What is the main reason for your enquiry?{" "}
              </label>
              <select
                className="w-full pl-2 border-2 border-[#D7DCDE] rounded-md bg-white py-3 font-Montserrat text-[#2E2E2E] mt-[10px] outline-none focus:border-[#2957A7]"
                value={regValue.enquiryReason}
                onChange={(e) =>
                  setRegValue((prev) => ({
                    ...prev,
                    enquiryReason: e.target.value,
                  }))
                }
              >
                <option value="">Select a reason</option>
                <option value="Starting our climate journey">
                  Starting our climate journey
                </option>
                <option value="Measuring and/or reducing carbon emissions">
                  Measuring and/or reducing carbon emissions
                </option>
                <option value="Purchasing carbon offsets">
                  Purchasing carbon offsets
                </option>
                <option value="Planting trees">Planting trees</option>
                <option value="More information about RebornGreen">
                  More information about RebornGreen
                </option>
                <option value="Other">Other</option>
              </select>
            </motion.div>

            {/* ---- Where You Know about here */}
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, x: 180 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, type: "tween" }}
              className="w-full h-auto xsm:h-[80px]"
            >
              {/* Reason for Enquiry Field */}
              <label className="font-Montserrat font-semibold">
                How did you hear about us?
              </label>
              <select
                className="w-full pl-2 border-2 border-[#D7DCDE] rounded-md bg-white py-3 font-Montserrat text-[#2E2E2E] mt-[10px] outline-none focus:border-[#2957A7]"
                value={regValue.hearAbout}
                onChange={(e) =>
                  setRegValue((prev) => ({
                    ...prev,
                    hearAbout: e.target.value,
                  }))
                }
              >
                <option value="">Select an option</option>
                <option value="Search engine">Search engine</option>
                <option value="Social media">Social media</option>
                <option value="Advertisement">Advertisement</option>
                <option value="Word of mouth">Word of mouth</option>
                <option value="Blog or publication">Blog or publication</option>
              </select>
            </motion.div>

            {/* ---- Message */}

            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, x: -180 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, type: "tween" }}
              className="w-full "
            >
              <label className="font-Montserrat font-semibold">Message</label>
              <textarea
                className="w-full resize-none pl-2 border-2 border-[#D7DCDE] rounded-md  bg-white py-3 font-Montserrat text-[#2E2E2E] mt-[10px] min-h-[140px] outline-none  focus:border-[#2957A7]"
                name="Message"
                value={regValue.message}
                onChange={(e) =>
                  setRegValue((prev) => ({ ...prev, message: e.target.value }))
                }
              ></textarea>
            </motion.div>
          </div>
          <button
            type="submit"
            className="text-[13px] xsm:text-[16px] my-[40px] md:text-[20px] text-[#fff] font-poppins btn flex items-center justify-center font-medium"
          >
            Send Message
          </button>
        </motion.form>
      </main>

      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default ContactCom;
