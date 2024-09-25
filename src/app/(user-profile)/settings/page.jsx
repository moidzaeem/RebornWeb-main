"use client";
import LeftSideBar from "@/components/LeftSideBar";
import { redirect } from "next/navigation";
import { parseCookies } from "nookies";
import React, { useEffect, useState } from "react";
import { useUser } from "../../../../lib/UserConext";
import axios from "axios";

const Page = () => {
  const userData = useUser();
  const [userInfor, setUserInfor] = useState({
    name: "",
    email: "",
    picture: null,
  });
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    const cookies = parseCookies();
    console.log("this is", userData);

    if (userData) {
      setUserInfor({
        name: userData?.data.name,
        email: userData?.data.email,
      });
    }

    const accessToken = cookies?.access_token;
    if (!accessToken) {
      redirect("/login");
    }
  }, [userData]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setUserInfor({ ...userInfor, picture: file });
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object to send the file
    const formData = new FormData();
    formData.append("user_id", userData?.data.id);
    formData.append("name", userInfor?.name);

    if (userInfor.picture) {
      formData.append("image", userInfor.picture);
    }
    const apiUrl = process.env.API_URL;

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
      // Handle successful upload
    } catch (error) {
      console.error("Upload failed:", error);
      // Handle upload error
    }
  };

  return (
    <div className="overflow-hidden h-full">
      <section className="w-full flex items-start justify-start mt-20 min-h-screen ">
        <LeftSideBar />
        <main className="max-w-[1800px] flex-1 bg-[#fbfbfb] px-[0px] lg:px-[60px] xll:px-[120px] py-[2rem] mx-auto h-full">
          <h3 className=" text-center leading-normal my-7 lg:leading-[50px] xll:leading-[60px] text-[30px] lg:text-[40px] xll:text-[50px] text-black-text font-medium font-worksans">
            Settings
          </h3>
          <div className="w-full flex flex-col gap-5 items-center justify-center">
            <form
              className="w-[240px] ssm:w-[300px] xsm:max-w-[600px] px-3 sm:px-10 py-20 rounded-lg sm:w-[600px] bg-white shadow-lg"
              onSubmit={handleSubmit}
            >
              <h2 className="text-left font-worksans text-[20px] xsm:text-[25px] lg:text-[30px] xll:text-[35px] uppercase font-semibold text-[#3d3d3d]">
                Personal Details
              </h2>
              <div>
                <div className="flex my-4 flex-col">
                  <label className="mb-1">Full Name</label>
                  <input
                    onChange={(e) =>
                      setUserInfor({ ...userInfor, name: e.target.value })
                    }
                    value={userInfor?.name}
                    type="text"
                    placeholder="full name"
                    className="outline-none border-2 rounded-md shadow-lg border-[#443d3d82] px-4 py-2"
                  />
                </div>
                <div className="flex my-4 flex-col">
                  <label className="mb-1">Email</label>
                  <input
                    value={userInfor?.email}
                    readOnly
                    type="email"
                    placeholder="Email"
                    className="outline-none border-2 rounded-md shadow-lg border-[#443d3d82] px-4 py-2"
                  />
                </div>
                <div className="flex my-4 flex-col">
                  <label className="mb-1">Upload Picture</label>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="outline-none border-2 rounded-md shadow-lg border-[#443d3d82] px-4 py-2"
                  />
                </div>
                {preview && (
                  <div className="flex my-4 flex-col">
                    <img
                      src={preview}
                      alt="Selected Preview"
                      className="rounded-md shadow-lg max-w-full h-auto"
                    />
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-4 items-center justify-start w-full">
                <button className="w-full px-7 py-3 bg-blue-900 hover:bg-blue-700 duration-300 text-white rounded-lg font-poppins text-[16px] xll:text-[18px] font-medium tracking-wide">
                  Save
                </button>
              </div>
            </form>
          </div>
        </main>
      </section>
    </div>
  );
};

export default Page;
