"use client";
import LeftSideBar from "@/components/LeftSideBar";
import { redirect } from "next/navigation";
import { destroyCookie, parseCookies } from "nookies";
import React, { useEffect, useState } from "react";
import { useUser } from "../../../../lib/UserConext"; // Ensure this path is correct
import axios from "axios";
import EditSvg from "@/assets/svg/EditSvg";
import { Box, Modal } from "@mui/material";
import { useRouter } from "next/navigation";

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

const Page = () => {
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false); // Manage modal open state
  const userData = useUser();
  const [userInfor, setUserInfor] = useState({
    name: "",
    email: "",
    picture: null,
  });
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false); // for handling loading state



  useEffect(() => {
    const cookies = parseCookies();

    if (!cookies?.access_token) {
      redirect("/login"); // Redirect if no access token exists
    }

    if (userData) {
      setUserInfor({
        name: userData?.data.name,
        email: userData?.data.email,
      });
    }
  }, [userData]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setUserInfor({ ...userInfor, picture: file });
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("user_id", userData?.data.id);
    formData.append("name", userInfor?.name);

    if (userInfor.picture) {
      formData.append("image", userInfor.picture);
    }

    try {
      const response = await axios.post(
        `https://backend.reborngreen.org/upload-image`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Upload successful:", response.data);
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  const handleDeleteAccount = async () => {
    setLoading(true);
    const cookies = parseCookies();
    const accessToken = cookies?.access_token;

    if (!accessToken) {
      alert("No access token found. Please log in again.");
      setLoading(false);
      return;
    }

    try {
      const apiUrl = `${process.env.API_URL}/auth/delete-user`;
      const response = await fetch(apiUrl, {
        method: "GET", // Use DELETE method for deleting an account
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      if (response.status === 200) {
        alert("Account deleted successfully");
        setOpenModal(false); // Close the modal on success
        destroyCookie(null, "access_token", { path: "/" });
        destroyCookie(null, "refresh_token", { path: "/" });
        router.push("/login");
      } else {
        alert("There was an issue deleting your account.");
      }
    } catch (error) {
      console.error("Delete account error:", error);
      alert(
        "An error occurred while deleting the account. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-[#ffffff]/70 flex flex-col items-center gap-6 lg:gap-10 py-7 lg:py-11 px-5 md:px-10 rounded-[20px] overflow-auto">
      <h3 className="text-[34px] lg:text-[44px] text-green font-medium">
        Settings
      </h3>

      <form
        onSubmit={handleSubmit}
        className="w-full bg-white flex flex-col items-center px-5 lg:px-8 py-7 lg:py-9 lg:max-w-3xl rounded-[20px] gap-7 lg:gap-9"
      >
        <div className="w-full flex flex-col gap-4.5 lg:gap-6">
          <div className="flex justify-center">
            <div className="relative w-28 lg:w-36 h-auto">
              <img
                src={
                  preview ??
                  "https://www.shareicon.net/data/512x512/2015/09/18/103160_man_512x512.png"
                }
                alt={userInfor.name}
                className="w-36 h-auto rounded-full shadow-lg"
              />
              <div className="absolute bottom-0 right-0">
                <label htmlFor="profile-image">
                  <div className="rounded-full p-2 bg-green text-white cursor-pointer">
                    <EditSvg className="fill-current" />
                  </div>
                  <input
                    id="profile-image"
                    type="file"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
              </div>
            </div>
          </div>

          <input
            onChange={(e) =>
              setUserInfor({ ...userInfor, name: e.target.value })
            }
            value={userInfor?.name}
            type="text"
            placeholder="Enter Your Name"
            className="outline-none rounded shadow-lg placeholder:text-[#949494] text-black px-7 py-4 bg-black/10"
          />
          <input
            value={userInfor?.email}
            readOnly
            type="email"
            placeholder="Enter Your Email"
            className="outline-none rounded shadow-lg placeholder:text-[#949494] text-black px-7 py-4 bg-black/10"
          />
        </div>
        <button
          type="submit"
          className="w-fit rounded py-3 lg:py-4 px-20 lg:px-36 text-xs lg:text-base font-medium bg-green text-white"
        >
          Save
        </button>
      </form>

      <div className="w-full bg-white flex flex-col items-center px-5 lg:px-8 py-7 lg:py-9 lg:max-w-3xl rounded-[20px] gap-4 lg:gap-5">
        <h6 className="text-base lg:text-xl text-black font-semibold">
          Delete Account
        </h6>
        <button
          onClick={() => setOpenModal(true)}
          className="w-fit rounded py-3 lg:py-4 px-12 lg:px-24 text-xs lg:text-base font-medium bg-[#FF1D1D] text-white"
        >
          Delete Account
        </button>

        <Modal open={openModal} onClose={() => setOpenModal(false)}>
          <Box sx={style}>
            <div className="flex flex-col gap-5 items-center">
              <h6 className="text-xl">
                Are you sure you want to delete your account?
              </h6>
              <div className="flex gap-4">
                <button
                  className="w-fit rounded py-2 px-5 text-sm lg:text-base font-semibold lg:font-medium bg-black text-white"
                  onClick={() => setOpenModal(false)}
                >
                  Cancel
                </button>

                <button
                  className="w-fit rounded py-2 px-5 text-xs lg:text-base font-medium bg-[#FF1D1D] text-white"
                  onClick={handleDeleteAccount}
                  disabled={loading}
                >
                  {loading ? "Deleting..." : "Delete Account"}
                </button>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default Page;
