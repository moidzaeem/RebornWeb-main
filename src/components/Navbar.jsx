"use client";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/app/constant/NavLink";
import { CiMenuFries } from "react-icons/ci";
import { IoMdMail } from "react-icons/io";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./com.css";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaSearch,
  FaTwitter,
} from "react-icons/fa";
import { destroyCookie, parseCookies } from "nookies";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [navOpen, setOpen] = useState(false);
  const [dropDown, setDropDown] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [username, setUsername] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const cookies = parseCookies();
    const accessToken = cookies?.access_token;
    const name = cookies?.user_name;
    const getFirst = name?.slice(0, 1);

    if (accessToken) {
      setAccessToken(accessToken);
      setUsername(getFirst);
    } else {
      setAccessToken(null);
    }
  }, [accessToken]);

  const LogoutButton = () => {
    destroyCookie(null, "access_token", { path: "/" });
    destroyCookie(null, "refresh_token", { path: "/" });
    setAccessToken(null);
    router.push("/login");
  };

  const LinkClick = () => {
    setOpen(false);
  };

  const [navScroll, setNavScroll] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setNavScroll(window.scrollY >= 80);
      setDropDown(null); // Close the dropdown on scroll

    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleDropdown = (id) => {
    setDropDown((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <div className="bg-green">
        <div className="max-w-[1800px] mx-auto border-white w-full h-full py-[1rem] flex gap-y-3 sm:gap-y-0 flex-col sm:flex-row justify-between items-center px-[30px] lg:px-[60px] xll:px-[120px]">
          <div className="flex gap-x-1 items-center justify-center">
            <IoMdMail className="text-white text-[16px]" />
            <Link
              className="text-white font-normal text-[14px] tracking-wide font-worksans"
              href={"mailto:contact@reborngreen.org"}
            >
              contact@reborngreen.org
            </Link>
          </div>
          <div className="flex items-center gap-x-4 mr-2 flex-col">
            <div className="flex items-center gap-x-2 sm:gap-x-4 mr-2">
              <p className="text-white pr-2 ssm:pr-5 font-normal font-worksans text-[10px] ssm:text-sm">
                Follow Us
              </p>
              {[
                {
                  Icon: FaFacebook,
                  url: "https://www.facebook.com/profile.php?id=61556415091062",
                },
                { Icon: FaTwitter, url: "https://twitter.com/Reborn_Green" },
                {
                  Icon: FaInstagram,
                  url: "https://www.instagram.com/reborngreen_org",
                },
                {
                  Icon: FaLinkedin,
                  url: "https://www.linkedin.com/company/reborngreen",
                },
              ].map(({ Icon, url }, index) => (
                <Link key={index} href={url}>
                  <span className="text-white cursor-pointer hover:text-[#c2c2c2] duration-200">
                    <Icon size={16} />
                  </span>
                </Link>
              ))}
              {/* <span onClick={() => setSearchOpen(true)} className='inline-block md:hidden cursor-pointer text-white hover:text-[#c2c2c2]'>
                <FaSearch size={16} />
              </span> */}
              {/* <div className='hidden w-[250px] md:flex items-center rounded-sm py-2 px-2 bg-[#ffffff55]'>
                <input type='text' placeholder='search here...' className='w-full pl-2 placeholder:text-white placeholder:text-[14px] text-white h-full outline-none bg-transparent' />
                <FaSearch className='text-white cursor-pointer' />
              </div> */}
              <div
                className={`absolute duration-500 bg-[#181a189f] z-[99] flex items-center justify-center left-0 w-full h-1/2 md:hidden ${
                  searchOpen ? "top-20" : "top-[-9999px]"
                }`}
              >
                <div className="w-[250px] flex items-center rounded-sm py-2 px-2 bg-[#ffffff55]">
                  <input
                    type="text"
                    placeholder="search here..."
                    className="w-full pl-2 placeholder:text-white placeholder:text-[14px] text-white h-full outline-none bg-transparent"
                  />
                  <FaSearch className="text-white cursor-pointer" />
                </div>
                <p
                  onClick={() => setSearchOpen(false)}
                  className="absolute cursor-pointer top-1/4 right-4"
                >
                  <AiOutlineClose className="text-white" size={25} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav
        className={`fixed mt-0 w-full ${
          navScroll ? "bg-white top-0" : ""
        } z-[100] max mx-auto py-[0.5rem] h-auto flex justify-between items-center`}
      >
        <div className="max-w-[1800px] mx-auto h-full flex justify-between w-full items-center px-[30px] py-3 lg:px-[60px] xll:px-[120px]">
          <Link href={"/"} className="relative">
            <Image
              src="/assets/logos/logo.png"
              width={1000}
              height={1000}
              alt="Picture of the author"
              priority
              className="w-[120px] xsm:w-[160px] h-auto object-cover"
            />
          </Link>
          <ul
            className={`flex items-start lg:items-center flex-col absolute top-0 pl-6 lg:pl-0 transition-all duration-[0.6s] lg:static lg:flex-row w-1/2 h-[100vh] bg-[#F2EEEE] lg:bg-transparent lg:h-auto lg:w-auto justify-start pt-20 lg:pt-0 lg:justify-center gap-[20px] xlg:gap-[30px] ${
              navOpen ? "right-0" : "right-[-9000px]"
            }`}
          >
            <div>
              <AiOutlineClose
                onClick={() => setOpen(false)}
                className="text-[30px] cursor-pointer inline-block absolute top-[20px] left-[20px] lg:hidden"
              />
            </div>
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`relative drop-menu font-poppins text-[14px] lg:text-[14px] text-black-text ${
                  navScroll ? "lg:text-black-text" : "lg:text-white"
                } font-[400]`}
              >
                {link.dropdown ? (
                  <>
                    <div className="gap-x-2 flex items-end">
                      <Link href={link.id} className="group-li flex items-end">
                        {link.title}
                      </Link>
                      <p
                        onClick={() => toggleDropdown(link.id)}
                        className="cursor-pointer inline-block"
                      >
                        {dropDown === link.id ? (
                          <MdKeyboardArrowUp
                            className={`${
                              navScroll ? "text-black" : "text-white"
                            } drop-icon`}
                            size={20}
                          />
                        ) : (
                          <MdKeyboardArrowDown
                            className={`${
                              navScroll ? "text-black" : "text-white"
                            } drop-icon`}
                            size={20}
                          />
                        )}
                      </p>
                    </div>
                    <div
                      style={{
                        overflow: "hidden",
                        width: "100%",
                        padding: 0,
                        textAlign: "center",
                        opacity: 0.8,
                      }}
                      className={`bg-white absolute top-12 shadow-sm show-drop z-10 px-1 py-2 gap-y-3 flex-col left-0 ${
                        dropDown === link.id ? "flex" : "hidden"
                      }`}
                    >
                      {link.dropdownItems.map((item) => (
                        <Link
                          className="px-2 link py-2 text-black-text border-b"
                          key={item.id}
                          href={item.id}
                        >
                          {item.dropTitle}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link href={link.id} className="link">
                    {link.title}
                  </Link>
                )}
              </li>
            ))}
            {accessToken ? (
              <>
                <button
                  onClick={LogoutButton}
                  className="px-6 py-2 bg-green rounded-lg text-white font-poppins"
                >
                  Logout
                </button>
                <li>
                  <Link
                    href={"/user-profile"}
                    className="w-[50px] h-[50px] text-3xl flex items-center text-white justify-center font-medium bg-blue-600 rounded-full"
                  >
                    <p className="mb-1">{username}</p>
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <Link className="btn" href="/login">
                  Login
                </Link>
              </li>
            )}
          </ul>
          <CiMenuFries
            onClick={() => setOpen(true)}
            className={` ${
              navScroll ? "text-black" : "text-white"
            } text-[30px] cursor-pointer inline-block lg:hidden`}
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
