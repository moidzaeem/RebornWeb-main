"use client";
import CardCarousel, { ThreeImageCarousel } from "@/components/Coursel";
import Image from "next/image";
import { easeIn, easeInOut, motion } from "framer-motion";
import BussnesCard from "@/components/BussnesCard";
import BussnesCardReversed from "@/components/BussnesCardReversed";
import { FaRecycle } from "react-icons/fa";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import apiImage from "../../../../public/API.webp";
import showcaseImage from "../../../../public/Showcase.webp";
import { Helmet } from "react-helmet";
import { parseCookies } from "nookies";
import { toast } from "react-toastify";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// export const metadata = {
//   title: "Explore Our Comprehensive Services | Joyn Digital",
//   description: "Explore our comprehensive range of digital services designed to help businesses thrive in today's digital landscape. From web development to SEO and digital marketing, we've got you covered.",
// };

const sec3CardData = [
  {
    title: "Calculate Your Carbon Footprint",
    desc: "Receive a comprehensive carbon emissions report for your business, calculated by experts, and obtain a customized plan to reduce and offset your carbon emissions.",
    img: "/ca.png",
    link: "/for-Business#GIT",
    btnText: "Speak to the team",
  },
  {
    title: "Climate Impact for Your Team",
    desc: "Our monthly subscription plan is designed to empower your team to make a positive difference in the fight against climate change. By subscribing, you'll be supporting verified carbon avoidance and tree planting projects every month.",
    img: "/climate_impact.png",
    link: "#simplify-climate",
    btnText: "Subscribe Now",
  },
  {
    title: "APIs for Climate Change Solutions",
    desc: "Automatically plant trees with our API integration for every order, invoice, or other business activity. Use our widget to display the number of trees planted on your website, showcasing your commitment to environmental sustainability.",
    img: apiImage,
    link: "/Register",
    btnText: "Sign Up",
  },
];

const projCardDara = [
  {
    icon: <FaRecycle size={45} className="text-green mb-3" />,
    title: "Get in Touch",
    desc: "If your business plans to make a positive impact but is unsure where to begin, contact us. Our team is here to guide you on your sustainability journey",
    btnLink: "/carbon-offsets",
    img: "/assets/images/cop.jpg",
    reverse: false,
  },
  // {
  //   icon: <FaBalanceScale size={45} className="text-green mb-3" />,
  //   title: "Sustainability Consulting",
  //   desc: "We provide holistic consulting to align businesses with sustainable practices. Collaborating closely, we pinpoint areas for environmental improvement and tailor programs to your needs.",
  //   btnLink: "/carbon-offsets",
  //   img: "/assets/images/soutbuss.jpg",
  //   reverse: true,
  // },
  // {
  //   icon: <FaLeaf size={45} className="text-green mb-3" />,
  //   title: "Green Marketing",
  //   desc: "After establishing your green profile, we assist in community promotion. Green marketing enhances brand image, setting you apart in today's market. Transparently showcasing sustainable practices fosters trust between your company and consumers.",
  //   btnLink: "/carbon-offsets",
  //   img: "/assets/images/grm.jpg",
  //   reverse: false,
  // },
];

const Page = () => {
  const [accessToken, setAccessToken] = useState("");
  useEffect(() => {
    const cookies = parseCookies();

    const accesstoken = cookies?.access_token;
    setAccessToken(accesstoken);
  }, []);

  return (
    <div className="overflow-hidden h-full">
      <Helmet>
        {/* Primary Meta Tags */}
        <title>
          Positive Climate Action - Business Sustainability Services
        </title>
        <meta
          name="title"
          content="Positive Climate Action - Business Sustainability Services"
        />
        <meta
          name="description"
          content="Join us and reach your ESG and net-zero commitments. A partnership that boosts the fight against climate change and drives sustainable growth for your business."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://reborngreen.org" />
        <meta
          property="og:title"
          content="Positive Climate Action - Business Sustainability Services"
        />
        <meta
          property="og:description"
          content="Our mission is to empower businesses and individuals to accelerate climate action."
        />
        <meta property="og:image" content="" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="http://website.com" />
        <meta
          property="twitter:title"
          content="Positive Climate Action - Business Sustainability Services"
        />
        <meta
          property="twitter:description"
          content="Our mission is to empower businesses and individuals to accelerate climate action."
        />
        <meta property="twitter:image" content="" />
      </Helmet>
      <div
        style={{ backgroundImage: "url('/sus.png')" }}
        className=" flex-col h-[80vh] flex items-center justify-center bg-cover w-full  px-[30px] relative lg:px-[60px] xll:px-[120px] py-[6rem] mx-auto"
      >
        <motion.h3
          initial={{ y: 200 }}
          viewport={{ once: true }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className=" z-[1] leading-normal text-center lg:leading-[70px] xll:leading-[80px] text-[30px] sm:text-[50px] lg:text-[60px] xll:text-[65px] text-white font-medium font-worksans"
        >
          Sustainable Solutions for
          <span className="text-[#14a800]"> Your Business</span>
        </motion.h3>
        <motion.p
          initial={{ y: 200 }}
          viewport={{ once: true }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className=" w-full font-worksans mt-6 sm:w-[70%] mdd:w-[60%] text-white z-[1] text-center"
        >
          We help businesses achieve their sustainability goals through climate
          action.
        </motion.p>

        <div className="w-full h-full absolute top-0 left-0 bg-black opacity-50 z-0"></div>
      </div>
      {/* simplify climate */}
      <section
        id="simplify-climate"
        className="w-full flex items-center justify-start flex-col bg-white mt-10 max-w-[1800px] mb-[60px]  px-[30px] lg:px-[60px] xll:px-[120px] py-[4rem] mx-auto"
      >
        <motion.div
          initial={{ y: 200 }}
          viewport={{ once: true }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full flex flex-col items-center justify-center"
        >
          <h1 className="text-center mb-[20px] font-poppins text-[30px] xsm:text-[40px] lg:text-[55px] xll:text-[60px] font-[500] text-[#3d3d3d]">
            <span className="font-bold text-[#14a800]">Simplifying</span>{" "}
            Climate Action in a Few Clicks
          </h1>
          <p className=" mb-12 w-full xsm:w-[90%] leading-5 tracking-normal font-worksans mdd:w-[60%] text-center text-black-text text-sm xsm:text-[16px]">
            Simple actions can have a significant impact. Determine how you
            would like to contribute to climate initiatives and discover the
            best options for both your business and the planet.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 200 }}
          viewport={{ once: true }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center mt-6 justify-center gap-7 sm:gap-16 flex-wrap"
        >
          <Link
            className="w-[340px] sm:w-[500px] hover:scale-110 duration-300 flex items-center justify-center flex-col text-center px-4 py-5 min-h-[300px] bg-green z-10 rounded-xl"
            href={!accessToken ? "/login?is_pricing=true" : "/plant-tree"}
          >
            <Image src="/Box 1.svg" alt="img" height={100} width={100} />
            <h4 className="text-2xl text-white font-semibold mt-8">
              Support Tree-Planting Projects
            </h4>
            <p className="text-[16px] text-white font-worksans pt-2">
              Grow your business sustainably and make the planet greener.
            </p>
          </Link>

          <Link
            style={{ border: "1px solid green" }}
            className=" w-[340px] sm:w-[500px] hover:scale-110 duration-300 flex items-center justify-center flex-col text-center px-4 py-5 min-h-[300px] bg-white  z-10 rounded-xl "
            href={
              !accessToken
                ? "/login?is_pricing=true&isLink=true"
                : "/plant-tree-offset"
            }
          >
            <Image src="/Box 2.svg" alt="img" height={100} width={100} />
            <h4 className="text-2xl text-black font-semibold mt-8">
              Support Verified Carbon Projects
            </h4>
            <p className="text-[16px] text-black font-worksans pt-2">
              Offset your carbon footprint and fight climate change.
            </p>
          </Link>
        </motion.div>
      </section>
      {/* section 1  */}
      {/* section 2  */}
      <section className="bg-[#f6f6f6]">
        <div className="w-full flex items-center justify-start flex-col  mt-10 max-w-[1800px]  px-[30px] lg:px-[60px] xll:px-[120px] py-[4rem] mx-auto">
          <h1 className="text-center my-[80px] font-poppins text-[30px] xsm:text-[40px] lg:text-[55px] xll:text-[60px] font-[500] text-[#3d3d3d]">
            For the Planet, For People, For Your Business Future
          </h1>

          <div className="flex items-center gap-5 xsm:gap-16 justify-center flex-wrap">
            <div className="bg-white w-[120px] xsm:w-[150px] sm:w-[200px] text-center px-3 sm:px-6 h-[160px] xsm:h-[220px] gap-[10px] flex flex-col items-center justify-center shadow-sm hover:shadow-xl duration-300 rounded-lg py-4">
              <Image
                src="/svg/Cleaner air.svg"
                className="h-full w-[80px] xsm:w-[150px] object-cover"
                alt="clean air image"
                width={150}
                height={80}
              />
              <p className="font-bold text-green font-poppins tracking-wide text-sm xsm:text-[16px] sm:text-xl">
                Cleaner Air
              </p>
            </div>
            <div className="bg-white w-[120px] xsm:w-[150px] sm:w-[200px] text-center px-3 sm:px-6 h-[160px] xsm:h-[220px] gap-[10px] flex flex-col items-center justify-center shadow-sm hover:shadow-xl duration-300 rounded-lg py-4">
              <Image
                src="/svg/Biodiversity support.svg"
                className="h-full w-[80px] xsm:w-[150px] object-cover"
                alt="clean air image"
                width={150}
                height={80}
              />
              <p className="font-bold text-green font-poppins tracking-wide text-sm xsm:text-[16px] sm:text-xl">
                Biodiversity Support
              </p>
            </div>
            <div className="bg-white w-[120px] xsm:w-[150px] sm:w-[200px] text-center px-3 sm:px-6 h-[160px] xsm:h-[220px] gap-[10px] flex flex-col items-center justify-center shadow-sm hover:shadow-xl duration-300 rounded-lg py-4">
              <Image
                src="/svg/Carbon sequestration.svg"
                className="h-full w-[80px] xsm:w-[150px] object-cover"
                alt="clean air image"
                width={150}
                height={80}
              />
              <p className="font-bold text-green font-poppins tracking-wide text-sm xsm:text-[16px] sm:text-xl">
                Carbon Sequestration
              </p>
            </div>
            <div className="bg-white w-[120px] xsm:w-[150px] sm:w-[200px] text-center px-3 sm:px-6 h-[160px] xsm:h-[220px] gap-[10px] flex flex-col items-center justify-center shadow-sm hover:shadow-xl duration-300 rounded-lg py-4">
              <Image
                src="/svg/Climate regulation.svg"
                className="h-full w-[80px] xsm:w-[150px] object-cover"
                alt="clean air image"
                width={150}
                height={80}
              />
              <p className="font-bold text-green font-poppins tracking-wide text-sm xsm:text-[16px] sm:text-xl">
                Climate Regulation
              </p>
            </div>
            <div className="bg-white w-[120px] xsm:w-[150px] sm:w-[200px] text-center px-3 sm:px-6 h-[160px] xsm:h-[220px] gap-[10px] flex flex-col items-center justify-center shadow-sm hover:shadow-xl duration-300 rounded-lg py-4">
              <Image
                src="/svg/Community well-being.svg"
                className="h-full w-[80px] xsm:w-[150px] object-cover"
                alt="clean air image"
                width={150}
                height={80}
              />
              <p className="font-bold text-green font-poppins tracking-wide text-sm xsm:text-[16px] sm:text-xl">
                Community Well-being
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* What do we offer */}
      <section className="w-full flex items-center justify-start flex-col bg-white mt-10 max-w-[1800px] mb-[60px]  px-[30px] lg:px-[60px] xll:px-[120px] py-[4rem] mx-auto">
        <motion.div
          initial={{ y: 200 }}
          viewport={{ once: true }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full flex flex-col items-center justify-center"
        >
          <h1 className="text-center  font-poppins text-[30px] xsm:text-[40px] lg:text-[55px] xll:text-[60px] font-[500] text-[#3d3d3d]">
            Committed to a Sustainable
            <span className="font-bold text-[#14a800]"> World?</span>
          </h1>
          <p className="w-full xsm:w-[90%] leading-5 tracking-normal font-worksans mdd:w-[60%] text-center text-black-text text-sm xsm:text-base">
            Discover how our business solutions can help you make a positive
            impact on both the planet and your business.
          </p>
        </motion.div>
      </section>
      {/* Enverment Protection Section 3 */}
      <section className="w-full max-w-[1800px] px-[30px] lg:px-[60px] xll:px-[120px]  mx-auto">
        {sec3CardData.map((item, index) =>
          index % 2 !== 0 ? (
            <BussnesCard
              key={index}
              title={item.title}
              desc={item.desc}
              img={item.img}
              btnText={item.btnText}
              link={item.link}
            />
          ) : (
            <BussnesCardReversed
              key={index}
              link={item.link}
              btnText={item.btnText}
              title={item.title}
              desc={item.desc}
              img={item.img}
            />
          )
        )}
      </section>
      {/* Showcase */}
      <section className="w-full flex items-center justify-start flex-col bg-white mt-10 max-w-[1800px] mb-[60px]  px-[30px] lg:px-[60px] xll:px-[120px] py-[4rem] mx-auto">
        <motion.div
          initial={{ y: 200 }}
          viewport={{ once: true }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full flex flex-col items-center justify-center"
        >
          <h1 className="text-center mb-[20px] font-poppins text-[30px] xsm:text-[40px] lg:text-[55px] xll:text-[60px] font-[500] text-[#3d3d3d]">
            Showcase Your Positive Climate <br />
            <span className="font-bold text-[#14a800]"> Impact</span>{" "}
          </h1>
          <p className="mb-12 w-full xsm:w-[90%] leading-5 tracking-normal font-worksans mdd:w-[60%] text-center text-black-text text-sm xsm:text-base">
            Let the world see your climate impact. Showcase your positive
            climate actions with RebornGreen. Get started today and unlock
            digital tools, certificates, and green rewards.
          </p>
          <Image src={showcaseImage} alt="showcase" className="object-cover" />
        </motion.div>
      </section>
      {/* Climate  */}
      <section className="w-full flex items-center justify-start flex-col bg-white mt-10 max-w-[1800px] mb-[60px]  px-[30px] lg:px-[60px] xll:px-[120px] py-[4rem] mx-auto">
        <motion.div
          initial={{ y: 200 }}
          viewport={{ once: true }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full flex flex-col items-center justify-center"
        >
          <h1 className="text-center mb-[20px] font-poppins text-[30px] xsm:text-[40px] lg:text-[55px] xll:text-[60px] font-[500] text-[#3d3d3d]">
            Climate Impact Globe
          </h1>
          <p className=" mb-12 w-full xsm:w-[90%] leading-5 tracking-normal font-worksans mdd:w-[60%] text-center text-black-text text-sm xsm:text-[16px]">
            A piece of art handmade from recycled paper, created by an artist.
            The perfect showcase tool that can sit on your reception desk,
            waiting room, or any other place that connects people with your
            business. The globe can be customized to suit your business. Contact
            us to find out more.
          </p>
          <ThreeImageCarousel />
        </motion.div>
      </section>
      {/* Carbon  */}
      {/* <section className="w-full flex items-center justify-start flex-col bg-white mt-10 max-w-[1800px] mb-[60px]  px-[30px] lg:px-[60px] xll:px-[120px] py-[4rem] mx-auto">
        <motion.div
          initial={{ y: 200 }}
          viewport={{ once: true }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full flex flex-col items-center justify-center"
        >
          <h1 className="text-center mb-[20px] font-poppins text-[30px] xsm:text-[40px] lg:text-[55px] xll:text-[60px] font-[500] text-[#3d3d3d]">
            Carbon Offset
            <span className="font-bold text-[#14a800]"> Projects</span>{" "}
          </h1>
          <p className=" mb-12 w-full xsm:w-[90%] leading-5 tracking-normal font-worksans mdd:w-[60%] text-center text-black-text text-sm xsm:text-[16px]">
            Support verified carbon offset projects that are carefully selected
            to ensure they deliver real carbon emission reductions and removals
            and life-enhancing social benefits.
          </p>
        </motion.div>
      </section> */}
      {/* Carbon  */}
      {/* <CardCarousel /> */}

      <section className="w-full flex items-center justify-start flex-col bg-white mt-10 max-w-[1800px] mb-[60px]  px-[30px] lg:px-[60px] xll:px-[120px] py-[4rem] mx-auto">
        <motion.div
          initial={{ y: 200 }}
          viewport={{ once: true }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full flex flex-col items-center justify-center"
        >
          <h1 className="text-center mb-[20px] font-poppins text-[30px] xsm:text-[40px] lg:text-[55px] xll:text-[60px] font-[500] text-[#3d3d3d]">
            Climate Change is a
            <span className="font-bold text-[#14a800]"> Global Crisis</span>
          </h1>
          <p className="w-full xsm:w-[90%] leading-5 tracking-normal font-worksans mdd:w-[60%] text-center text-black-text text-sm xsm:text-[16px]">
            Businesses must lead the transition to a sustainable future. Reduce
            your carbon footprint, protect biodiversity, and build resilience.
            Together, we can prevent future disasters
          </p>

          <Image
            src="/Climate change and biodiversity loss require urgent action.png"
            alt="img"
            width={1000}
            height={1000}
            layout="intrinsic"
            className="w-full h-full xl:w-[95%] xl:h-[95%] object-cover"
          />
        </motion.div>
        <div id="GIT" />
      </section>
      {/* Project Card Section 3 */}
      {/* <section id="team" className="bg-[#f6f6f6]">
        <div className="w-full max-w-[1800px] my-[100px] sm:my-[160px]  px-[30px] lg:px-[60px] xll:px-[120px] py-[2rem] mx-auto">
          {projCardDara.map((item, index) => (
            <ProjectsCard
              key={index}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
              btnLink={item.btnLink}
              image={item.img}
              reverse={item.reverse}
            />
          ))}
        </div>
      </section> */}

      <GetInTouch />
      {/* 
      <motion.section
        initial={{ y: 200 }}
        viewport={{ once: true }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[#1b2f47]"
      >
        <div className="w-full max-w-[1800px]  px-[30px] lg:px-[60px] xll:px-[120px] py-[2rem] mx-auto">
          <div className="flex items-center flex-wrap justify-center gap-5 sm:justify-between">
            <div className=" w-full sm:w-[70%] mdd:w-[60%]">
              <h1 className="text-center my-[40px] font-poppins text-[30px] xsm:text-[40px] lg:text-[55px] xll:text-[60px] font-[500] text-sunshine-yellow">
                Green Partnerships Made
              </h1>
              <p className=" text-center text-white tracking-wide font-poppins text-[16px] ">
                Experience the Benefits: Cost savings, Enhanced brand image,
                Increased customer loyalty, Improved employee morale
              </p>
            </div>

            <Link href="/contact" className="btn ">
              Contact Us
            </Link>
          </div>
        </div>
      </motion.section> */}
    </div>
  );
};

export default Page;
const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    assistanceType: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to backend, show success message)
    console.log(formData);

    try {
      // Send data to server
      await axios.post("https://backend.reborngreen.org/send-email", formData);
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

      
    } catch (error) {
      console.log(error);
      toast.error(
        "There was an error sending your message. Please try again later.",
        {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
    }

    setFormData({
      name: "",
      email: "",
      assistanceType: "",
      message: "",
    });
  };

  return (
    <>
      <div className="bg-white shadow-xl rounded-lg p-6 w-full sm:w-[80%] lg:w-[60%] mx-auto mb-12">
        <h2 className="text-2xl font-semibold text-center text-[#3d3d3d] mb-4">
          Get in Touch
        </h2>
        <p className="text-center text-gray-600 mb-6">
          If your business plans to make a positive impact but is unsure where
          to begin, contact us. Our team is here to guide you on your
          sustainability journey.
        </p>

        <form onSubmit={handleSubmit}>
          <div
            style={{ boxShadow: "2px 4px 8px #DCDCDC" }}
            className="mb-4 p-2"
          >
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-green-dark"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div
            style={{ boxShadow: "2px 4px 8px #DCDCDC" }}
            className="mb-4 p-2"
          >
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-green-dark"
              placeholder="Enter your email address"
              required
            />
          </div>

          <div
            style={{ boxShadow: "2px 4px 8px #DCDCDC" }}
            className="mb-4 p-2"
          >
            <label
              htmlFor="assistanceType"
              className="block text-gray-700 font-medium mb-1"
            >
              How can we assist you?
            </label>
            <select
              id="assistanceType"
              name="assistanceType"
              value={formData.assistanceType}
              onChange={handleInputChange}
              className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-green-dark"
              required
            >
              <option value="">Select an option</option>
              <option value="Calculate Your Carbon Footprint">
                Calculate Your Carbon Footprint
              </option>
              <option value="More details about Climate Impact for your team">
                More details about Climate Impact for your team
              </option>
              <option value="Integrate the API for Climate Change Solutions">
                Integrate the API for Climate Change Solutions
              </option>
              <option value="Obtain the Climate Impact Globe for my workplace">
                Obtain the Climate Impact Globe for my workplace
              </option>
              <option value="Other reason">Other reason</option>
            </select>
          </div>

          <div
            style={{ boxShadow: "2px 4px 8px #DCDCDC" }}
            className="mb-4 p-2"
          >
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-green-dark h-32"
              placeholder="Provide any additional details or questions you have"
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-green text-white py-2 px-4 rounded-md hover:bg-green-dark transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>

        <p className="text-center text-gray-600 mt-4">
          We aim to respond to all inquiries within 2-3 business days.
        </p>
      </div>

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
