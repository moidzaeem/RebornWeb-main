"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import React, { useEffect, useState } from "react";
import { parseCookies, setCookie } from "nookies";
import { useRouter, useSearchParams } from "next/navigation";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams(); // To get query parameters

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const cookies = parseCookies();
    const accessToken = cookies?.access_token;

    if (accessToken) {
      router.push("/");
    }
  }, [router]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!formData.password || !formData.email) {
      setLoading(false);
      toast.error("Please fill in all required fields.");
      return;
    }

    try {
      const apiUrl = process.env.API_URL;

      const response = await axios.post(`${apiUrl}/auth/login`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        if (response.data.status === 200) {
          toast.success(response.data.message);
          const { access, refresh } = response.data.data.tokens;
          const { name,logo  } = response.data.data.user;

          setCookie(null, "access_token", access.token, {
            maxAge: 12 * 60 * 60, // 12 hours expiration
            path: "/",
            sameSite: "lax",
            httpOnly: false,
          });
          setCookie(null, "refresh_token", refresh.token, {
            maxAge: 30 * 24 * 60 * 60, // 30 days expiration
            path: "/",
            sameSite: "lax",
            httpOnly: false,
          });
          setCookie(null, "user_name", name, {
            maxAge: 12 * 60 * 60, // 12 hours expiration
            path: "/",
            sameSite: "lax",
            httpOnly: false,
          });

          setCookie(null, "profileImage", logo, {
            maxAge: 12 * 60 * 60, // 12 hours expiration
            path: "/",
            sameSite: "lax",
            httpOnly: false,
          });

          // Check query parameters
          const isPricing = searchParams.get('is_pricing') === 'true';
          const isLink = searchParams.get('is_link') === 'true';
          if (isPricing && !isLink) {
            router.push("/plant-tree");
          }else if(isPricing && isLink){
            router.push("/plant-tree-offset");
          } else {
            router.push("/user-profile");
          }
        } else if (response.data.status === 400) {
          setLoading(false);
          toast.error(response.data.message);
        } else {
          setLoading(false);
          toast.error("Login failed");
        }
      } else {
        setLoading(false);
        toast.error("Login failed");
      }
    } catch (error) {
      setLoading(false);
      toast.error("Login failed: " + error.message);
    }
  };

  return (
    <div className="overflow-hidden h-full">
      {/* Login sec 1 */}
      <section
        style={{ backgroundImage: "url('/assets/images/aboutmain.jpg')" }}
        className="w-full bg-[#f5f5f6] bg-cover object-center max-w-[1800px] px-[10px] xsm:px-[30px] relative lg:px-[60px] xll:px-[120px] py-[6rem] mx-auto"
      >
        <div className="absolute w-full h-full z-0 top-0 left-0 bg-black opacity-[0.2]"></div>
        <div className="flex z-10 relative w-full min-h-screen items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="max-w-[600px] px-3 xsm:px-5 py-10 rounded-lg w-[500px] bg-white shadow-lg"
          >
            <h2 className="text-left font-worksans text-[20px] xsm:text-[25px] lg:text-[30px] xll:text-[35px] uppercase font-semibold text-[#3d3d3d]">
              Login
            </h2>
            <div>
              <div className="flex my-4 flex-col">
                <label className="mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="outline-none border-2 rounded-md shadow-lg border-[#443d3d82] px-4 py-2"
                  onChange={handleChange}
                />
              </div>

              <div className="flex my-4 flex-col">
                <label className="mb-1">Password</label>
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="outline-none border-2 rounded-md shadow-lg border-[#443d3d82] px-4 py-2"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex flex-col gap-4 items-center justify-start w-full">
              <button
                disabled={loading}
                className={`w-full px-7 py-3 hover:bg-blue-700 duration-300 text-white rounded-lg font-poppins text-[16px] xll:text-[18px] font-medium tracking-wide ${
                  loading ? "bg-blue-900 opacity-50" : "bg-blue-900"
                }`}
              >
                Login
              </button>

              <p>
                Not Have Account{" "}
                <Link
                  className="font-semibold hover:text-blue-900 text-green"
                  href="/Register"
                >
                  Register
                </Link>
              </p>
              <Link
                className="font-semibold hover:text-blue-900 text-green"
                href="/Forget-password"
              >
                Forget password
              </Link>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
