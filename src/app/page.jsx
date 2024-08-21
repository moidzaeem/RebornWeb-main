import BigCard from "@/components/BigCard";
import ContactCom from "@/components/ContactCom";
import CardCoursel from "@/components/Coursel";
import FlipCard from "@/components/FlipCard";
import GoalTimeLine from "@/components/GoalTimeLine";
import Navbar from "@/components/Navbar";
import TextCard from "@/components/TextCard";
import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { FaRegCheckCircle } from "react-icons/fa";

const Hero = dynamic(() => import("@/components/Hero.jsx"), { ssr: false });

const flatcardData = [
  {
    image: "/svg/Restore Nature.svg",
    title: "Restore Nature",
    intro: "We plant your tree where it's most needed",
    text: "We are dedicated to strategic reforestation efforts that combat climate change, restore ecosystems, and empower communities",
    link: "/tree-planting",
  },
  {
    image: "/svg/Reduce Emissions.svg",
    title: "Reduce Emissions",
    intro: "A Simple Act That Can Change the World",
    text: "We help reduce carbon emissions through customized solutions.",
    link: "/carbon-offsets",
  },
  {
    image: "/svg/Make an Impact.svg",
    title: "Make an Impact",
    intro: "For a healthy planet for future generations",
    text: "Utilize our flexible climate store for reforestation, carbon mitigation, and removal initiatives through e-commerce tools or monthly subscriptions.",
    link: "/user-profile",
  },
  {
    image: "/svg/Share Your Progress.svg",
    title: "Share Your Progress",
    intro: "Inspire others and showcase your commitment",
    text: "You can use your profile dashboard to track progress on climate-related initiatives and engage with clients, customers, employees, and stakeholders",
    link: "/user-profile",
  },
];
const textcardData = [
  {
    image: "/svg/Untitled design (36).svg",
    title: "Tree Planting",
    text: "Contribute to vital tree planting projects worldwide. Benefit wildlife habitat, combat climate change, and promote a healthier planet.",
    btnText: "Explore Our Work",
    btnLink: "/tree-planting",
  },
  {
    image: "/assets/images/hsec3img2.png",
    title: "Carbon Offset",
    text: "We create new methods that help individuals and businesses calculate, reduce, and offset their emissions.",
    btnText: "Learn More",
    btnLink: "/carbon-offsets",
  },
  {
    image: "/assets/images/hsec3img3.png",
    title: "Our Mission",
    text: "Climate change demands immediate action. Our mission is to create, innovate, and make climate projects easily accessible for everyone.",
    btnText: "About Us",
    btnLink: "/about",
  },
];
const bigCardData = [
  {
    image: "/assets/images/hsec7img1.png",
    title: "Coffee Shop Loyalty Program",
    text: "With over 3 billion cups of coffee consumed daily worldwide, we can plant thousands of trees every day through our program.",
    btnLink: "/",
    span: "200K Trees planted",
  },
  {
    image: "/assets/images/hsec7img2.png",
    title: "Reforstation",
    text: " Revitalizing the land through our reforestation project, planting trees to nourish soil, communities, and the planet.",
    btnLink: "/",
    span: "Restoring 1,00,000 square meters of land.",
  },
  {
    image: "/assets/images/hsec7img3.png",
    title: "Animal Rescue",
    text: "Redirecting funds towards animal welfare, our organization aims to save lives, provide shelter, and find loving homes for animals in need, ensuring their well-being and contributing to their overall welfare.",
    btnLink: "/About US",
    span: "Finding loving homes for over 1000 animals in need.",
  },
];

// const sec4pData = [
//   { id: 1, text: 'Reforestation & Tree Planting' },
//   { id: 2, text: 'Animal Welfare Support' },
//   { id: 3, text: 'Biodiversity Conservation' },
//   { id: 4, text: 'Protecting Wildlife Habitats' }
// ];
const sec4pData = [
  { id: 1, text: "We support only trusted and verified projects." },
  {
    id: 2,
    text: "We aim to create yearly projects promoting environmental initiatives for individuals and businesses, leading to a positive impact.",
  },
  {
    id: 3,
    text: "We dedicate most subscriptions to education & green initiatives",
  },
];
const GoalTimeLineData = [
  {
    id: 1,
    title: "Instant Carbon Footprint Offset Luggage Tag",
    description:
      "A luggage tag that enables users to swiftly scan, calculate carbon emissions, and offset their flight footprint in 30 seconds or less!",
    rgt: true,
    img: "/assets/images/aboutmain.jpg",
    links: "/flight",
  },
  {
    id: 2,
    title: "Coffee Shop Loyalty Program",
    description:
      "An initiative for coffee enthusiasts that advocates for environmental conservation. Earn stamps on a loyalty card to redeem a complimentary coffee and contribute to tree-planting efforts.",
    rgt: false,
    img: "/assets/images/airplaneimg.jpg",
    links: "/coffee",
  },
  {
    id: 3,
    title: "Upcoming Project 2025",
    description: "",
    rgt: true,
    links: "",
  },
  {
    id: 4,
    title: "Upcoming Project 2026",
    description: "",
    rgt: false,
    links: "",
  },
];

export const metadata = {
  title: 'Global Climate Projects | RebornGreen',
  description:'Join the fight against climate change. Discover our programs and learn how you can contribute to global climate projects.',
}


export default function Home() {
  // <Head>
  //    <Script
  //     type="text/javascript"
  //     src="https://app.getterms.io/cookie-consent/embed/a7d1d92c-95c2-4a78-a59a-3eca424ee3a5"
  //   async />
  // </Head>

  return (
    <div className="overflow-hidden h-full">
      {/* Hero Section */}
      <Head>
        {/* Primary Meta Tags */}
         

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://website.com" />
        <meta
          property="og:title"
          content="Global Climate Projects | RebornGreen"
        />
        <meta
          property="og:description"
          content="Join the fight against climate change. Discover our programs and learn how you can contribute to global climate projects."
        />
        <meta property="og:image" content="" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="http://website.com" />
        <meta
          property="twitter:title"
          content="Global Climate Projects | RebornGreen"
        />
        <meta
          property="twitter:description"
          content="Join the fight against climate change. Discover our programs and learn how you can contribute to global climate projects."
        />
        <meta property="twitter:image" content="" />
      </Head>
      <section className="w-full h-[60vh] lg:h-[calc(100vh-75px)] mx-auto">
        <Hero videoSrc="/assets/videos/hvideo.mp4" />
      </section>

      {/* Plat Card Section */}
      <section className="w-full mt-10 max-w-[1800px] mb-[60px]  px-[30px] lg:px-[60px] xll:px-[120px] py-[2rem] mx-auto">
        <h1 className=" text-center mb-[20px] font-poppins text-[30px] xsm:text-[40px] lg:text-[55px] xll:text-[60px] font-[500] text-[#3d3d3d]">
          <span className="font-bold text-[#14a800]">Easy Access to</span>{" "}
          Climate Action Solutions{" "}
        </h1>
        <div className="flex gap-6 flex-wrap items-center justify-center">
          {flatcardData?.map((item, index) => (
            <FlipCard
              key={index}
              img={item.image}
              title={item.title}
              intro={item.intro}
              text={item.text}
              link={item.link}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="w-full max-w-[1800px] mb-[160px]  px-[30px] lg:px-[60px] xll:px-[120px] py-[2rem] mx-auto">
        <div className="flex gap-4 flex-col lg:flex-row items-center justify-center">
          <div className="w-full xsm:w-10/12 lg:flex-1 flex items-center text-center lg:text-start lg:items-start justify-center flex-col">
            <h3 className="  leading-normal lg:leading-[60px] mb-4  text-[30px] sm:text-[50px] lg:text-[60px] xll:text-[55px] text-black-text font-medium font-worksans">
              Sustainability for{" "}
              <span className="text-green font-semibold">Businesses</span>
            </h3>
            <p className="leading-normal font-poppins text-[14px] xll:text-[16px] tracking-normal text-black-text">
              Achieve CSR & Net-Zero goals and boost your brand with a tailored
              sustainability solution!
            </p>
            <Link className="btn mt-10" href={"/for-Business"}>
              Read More
            </Link>
          </div>
          <div className=" w-full mt-8 lg:mt-0 xsm:w-10/12 lg:flex-1 relative flex items-center justify-center flex-col">
            <Image
              src="/images/Sustainability for Businesses.png"
              width={500}
              height={500}
              alt="bussnessec2"
              loading="lazy"
              className="w-full h-full rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="w-full bg-[#f6f6f6] mt-10 max-w-[1800px] mb-[60px]  px-[30px] lg:px-[60px] xll:px-[120px] py-[4rem] mx-auto">
        <h1 className="text-center mb-[20px] font-poppins text-[30px] xsm:text-[40px] lg:text-[55px] xll:text-[60px] font-[500] text-[#3d3d3d]">
          <span className="font-bold text-[#14a800]">Building a Better </span>
          Tomorrow
        </h1>
        <div className="flex gap-6 flex-wrap items-center justify-center">
          {textcardData?.map((item, index) => (
            <TextCard
              key={index}
              img={item.image}
              title={item.title}
              text={item.text}
              btnText={item.btnText}
              btnLink={item.btnLink}
            />
          ))}
        </div>
      </section>

      {/*  Section 5 */}
      <section className="w-full max-w-[1800px] mb-[160px]  px-[30px] lg:px-[60px] xll:px-[120px] py-[2rem] mx-auto">
        <div className="flex gap-20 flex-col lg:flex-row items-center justify-center">
          <div className=" w-full mt-8 lg:mt-0 xsm:w-10/12 lg:flex-1  flex items-center lg:items-end justify-center flex-col">
            <div className="relative xsm:w-[350px] h-auto">
              <Image
                src="/assets/images/sec4img1.jpg"
                width={350}
                height={350}
                alt="bussnessec2"
                loading="lazy"
                className=" rounded-lg w-full sm:w-5/6 md:w-[350px] h-auto md:h-[500px]"
              />
              <Image
                src="/WHY RGB.png"
                width={250}
                height={200}
                alt="bussnessec2"
                loading="lazy"
                className="absolute top-3 left-[-200px] hidden md:inline-block z-10 rounded-full"
              />
              <Image
                src="/assets/images/sec4img3.jpg"
                width={350}
                height={250}
                alt="bussnessec2"
                loading="lazy"
                className="absolute bottom-[-10px] h-[220px] left-[-200px]  hidden md:inline-block z-0 rounded-lg"
              />
            </div>
          </div>

          <div className="w-full xsm:w-10/12 lg:flex-1 flex items-center text-center lg:text-start lg:items-start  justify-center flex-col">
            <h3 className="  leading-normal lg:leading-[70px] xll:leading-[80px] text-[30px] sm:text-[50px] lg:text-[60px] xll:text-[65px] text-black-text font-medium font-worksans">
              <span className="text-green font-semibold">Why RebornGreen?</span>
            </h3>
            <p className="leading-[24px] text-[16px]  font-poppins tracking-wide text-black-text">
              We break down barriers, making it easy for everyone to join the
              fight against climate change.
            </p>
            {/* <Link className='btn mt-10' href={'/'}>Read more</Link> */}
            <div className="w-full flex flex-col mt-14 sm:flex-row items-center justify-between">
              <div className="flex gap-2 flex-col">
                {sec4pData.map((item) => (
                  <div
                    key={item.id}
                    className="flex mb-3 items-start gap-x-2  text-[12px] ssm:text-[14px] xlg:text-[16px] text-green font-semibold"
                  >
                    <span>
                      <FaRegCheckCircle size={20} />
                    </span>
                    <p style={{ textAlign: "start" }}>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Goal Time Line Section 6 */}
      <section className="w-full bg-[#f6f6f6] mt-10 max-w-[1800px] mb-[60px]  px-[30px] lg:px-[60px] xll:px-[120px] py-[4rem] mx-auto">
        <h1 className="text-center mb-[20px] font-poppins text-[30px] xsm:text-[40px] lg:text-[55px] xll:text-[60px] font-[500] text-[#3d3d3d]">
          <span className="font-bold text-[#14a800]">
            Projects Created by Us, Supported by You,{" "}
          </span>
          For our Planet
        </h1>

        <div className="timeLine  relative w-full mx-auto bg-[#F3F4F9] py-[5rem] rounded-xl my-[100px]">
          {GoalTimeLineData?.map((item) => (
            <GoalTimeLine
              key={item.id}
              title={item.title}
              description={item.description}
              id={item.id}
              rgt={item.rgt}
              img={item.img}
              link={item.links}
            />
          ))}
        </div>
      </section>

      {/* Section big card 7 */}
      <section className="w-full flex items-center justify-start flex-col bg-white mt-10 max-w-[1800px] mb-[60px]  px-[30px] lg:px-[60px] xll:px-[120px] py-[4rem] mx-auto">
        <div className="w-full flex flex-col items-center justify-center">
          <h1 className="text-center mb-[20px] font-poppins text-[30px] xsm:text-[40px] lg:text-[55px] xll:text-[60px] font-[500] text-[#3d3d3d]">
            {" "}
            Climate
            <span className="font-bold text-[#14a800]"> Projects</span>
          </h1>
          <p className=" mb-12 w-full xsm:w-[90%] leading-5 tracking-normal font-worksans mdd:w-[60%] text-center text-black-text text-sm xsm:text-[16px]">
            Support climate projects around the world and help us fight climate
            change, reduce air pollution, and create jobs for local communities.
          </p>
        </div>
        <div className="flex gap-6 flex-wrap items-center justify-center">
          {/* {bigCardData?.map((item, index) => (<BigCard key={index} img={item.image} title={item.title} text={item.text} btnLink={item.btnLink} span={item.span} />))} */}
          <video
            className="w-full"
            autoPlay
            muted
            loop
            playsInline
            width="320"
            height="240"
          >
            <source src="/Brazil.mp4" type="video/mp4" />
            <track
              src="/Brazil.mp4"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <Link className="btn inline-block mt-10" href={"/tree-planting"}>
          Find out more
        </Link>
      </section>

      {/* <CardCoursel /> */}

      {/* Contac Us section 8 */}
      <section className="w-full bg-[#f6f6f6] mt-0 max-w-[1800px] px-[30px] lg:px-[60px] xll:px-[120px] py-[4rem] mx-auto">
        <div className="w-full flex flex-col items-center justify-center">
          <h1 className="text-center mb-[20px] font-poppins text-[30px] xsm:text-[40px] lg:text-[55px] xll:text-[60px] font-[500] text-[#3d3d3d]">
            <span className="font-bold text-[#14a800]">Contact Us</span>
          </h1>
          <p className=" mb-12 w-full xsm:w-[90%] leading-5 tracking-normal font-worksans mdd:w-[60%] text-center text-black-text text-sm xsm:text-[16px] ">
            Get in touch with us today to discuss how we can help you or your
            company achieve green goals. Together, we can create a better future
            for our planet and our communities.
          </p>
        </div>

        <ContactCom />
      </section>
    </div>
  );
}
