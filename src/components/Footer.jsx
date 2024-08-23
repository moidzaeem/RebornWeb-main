import { FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

const Footer = () => (
  <footer className=" bg-green px-[20px] sm:px-[60px] lg:px-[90px] xlb:px-[120px] pt-[4rem] opacity-[0.8] w-full flex items-center flex-col justify-start">
    <div className="w-full h-full max-w-[1440px] mx-auto">
      <div className=" flex-wrap px-[20px] xxm:px-[40px]  md:flex-nowrap flex gap-[5px] xxm:gap-[10px] mdd:gap-[30px] lg:gap-[50px] items-start justify-start md:justify-center w-full">
        <div className=" w-full xsm:w-[60%] md:w-[45%] mdd:w-[40%] flex flex-col gap-[20px]">
          <Link href={"/"} className="relative">
            <Image
              src="/assets/logos/logo.png"
              width={1000}
              height={1000}
              alt="Picture of the author"
              priority
              className="w-[120px] xsm:w-[240px] h-auto object-cover"
            />
          </Link>

          <p className="text-white text-[12px] lg:text-[16px] font-normal font-poppins tracking-wide">
            At RebornGreen, we believe in giving back to nature.
          </p>
          <div className="flex items-center justify-start gap-[10px]">
            <Link
              target="_blank"
              className="text-[23px] hover:text-[#1d1d1e] duration-500 hover:scale-110 text-white"
              href="https://www.linkedin.com/company/reborngreen/"
            >
              {" "}
              <FaLinkedinIn className="text-[23px] hover:text-[#1d1d1e] duration-500 hover:scale-110 text-white" />
            </Link>
            <Link href="mailto:contact@reborngreen.org">
              <FiMail className="text-[23px] hover:text-[#1d1d1e] duration-500 hover:scale-110 text-white" />
            </Link>
            {/* <Link href="https://www.linkedin.com/company/reborngreen/" > <FiPhone className="text-[23px] hover:text-[#1d1d1e] duration-500 hover:scale-110 text-white" /></Link> */}
          </div>
        </div>

        <div className="flex flex-col md:mt-0 mt-[30px] w-full ssm:w-[60%] xxm:w-[60%] md:w-[30%] gap-4 items-start">
          <p className="text-white text-[16px] xll:text-[20px] font-Noto font-[500]">
            Programs
          </p>
          <hr className="border-t-2 border-white w-full" />

          <Link
            className="text-white hover:text-secondary duration-500  text-[12px] lg:text-[14px] xll:text-[18px] font-Noto font-[500]"
            href={"/flight"}
          >
            Offset Your Flight Emissions with Our Luggage Tag
          </Link>
          <Link
            className="text-white hover:text-secondary duration-500  text-[12px] lg:text-[14px] xll:text-[18px] font-Noto font-[500]"
            href={"/coffee"}
          >
            Join Our Coffee Shop Loyalty Program
          </Link>
        </div>
        <div className="flex flex-col md:mt-0 mt-[30px] w-full ssm:w-[60%] xxm:w-[60%] md:w-[30%] gap-4 items-start">
          <p className="text-white text-[16px] xll:text-[20px] font-Noto font-[500]">
            Climate Projects
          </p>
          <hr className="border-t-2 border-white w-full" />

          <Link
            className="text-white hover:text-secondary duration-500  text-[12px] lg:text-[14px] xll:text-[18px] font-Noto font-[500]"
            href={"/tree-planting"}
          >
            Tree Planting
          </Link>
          <Link
            className="text-white hover:text-secondary duration-500  text-[12px] lg:text-[14px] xll:text-[18px] font-Noto font-[500]"
            href={"/carbon-offsets"}
          >
            Carbon Offsets
          </Link>
        </div>

        <div className="flex flex-col md:mt-0 mt-[30px] w-full ssm:w-[60%] xxm:w-[60%] md:w-[30%] gap-4 items-start">
          <p className="text-white text-[16px] xll:text-[20px] font-Noto font-[500]">
            About Us
          </p>
          <hr className="border-t-2 border-white w-full" />

          <Link
            className="text-white hover:text-secondary duration-500  text-[12px] lg:text-[14px] xll:text-[18px] font-Noto font-[500]"
            href={"/about"}
          >
            About Reborn Green
          </Link>
        </div>
        <div className="flex flex-col md:mt-0 mt-[30px] w-full ssm:w-[60%] xxm:w-[60%] md:w-[30%] gap-4 items-start">
          <p className="text-white text-[16px] xll:text-[20px] font-Noto font-[500]">
            Legals
          </p>
          <hr className="border-t-2 border-white w-full" />

          <Link
            className="text-white hover:text-secondary duration-500  text-[12px] lg:text-[14px] xll:text-[18px] font-Noto font-[500]"
            href={"/Terms-of-services"}
          >
            Terms of Services
          </Link>
          <Link
            className="text-white hover:text-secondary duration-500  text-[12px] lg:text-[14px] xll:text-[18px] font-Noto font-[500]"
            href={"/privacy-policy"}
          >
            Privacy policy
          </Link>
          <Link
            className="text-white hover:text-secondary duration-500  text-[12px] lg:text-[14px] xll:text-[18px] font-Noto font-[500]"
            href={"/cookie-policy"}
          >
            Cookie policy
          </Link>
        </div>

        <div className="flex flex-col md:mt-0 mt-[30px] w-full ssm:w-[60%] xxm:w-[60%] md:w-[30%] gap-4 items-start">
          <p className="text-white text-[16px] xll:text-[20px] font-Noto font-[500]">
            Support
          </p>
          <hr className="border-t-2 border-white w-full" />

          <Link
            className="text-white hover:text-secondary duration-500  text-[12px] lg:text-[14px] xll:text-[18px] font-Noto font-[500]"
            href={"/faq"}
          >
            Frequently Ask Questions (FAQs)
          </Link>
          <Link
            className="text-white hover:text-secondary duration-500  text-[12px] lg:text-[14px] xll:text-[18px] font-Noto font-[500]"
            href={"/contact"}
          >
            Contact Us
          </Link>
        </div>
      </div>

      <div className="w-full mt-20 py-8 cursor-default flex items-center border-t border-white justify-center text-center">
        <hr className="" />
        <p className="text-white  text-[12px] lg:text-[14px] xll:text-[18px] font-Noto font-[500]">
          Copyright &copy; 2024 Reborn Green. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
