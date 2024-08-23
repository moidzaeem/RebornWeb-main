"use client";
import BenefitsList from "@/components/BenefitsList";
import PlantingPartner from "@/components/PlantingPartner";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaRegCheckCircle } from "react-icons/fa";

const riftValleyBenefitsList = [
  `Provides employment to those living in extreme poverty`,
  `Restores key habitats supporting livelihoods and cultural heritage.`,
];
const kijabeForestBenefitsList = [
  `Provides habitat for wildlife.`,
  `Offers sustainable economic opportunities for local families.`,
  `Ensures a reliable water supply.`,
  `Provides landslide protection.`,
];

const textcardData = [
  {
    image:
      "/assets/treeplanting-images/Kenya/pexels-twilightkenya-12925484.jpg",
    title: "A Lifeline for Wildlife",
    text: "Kenya diverse wildlife depends on healthy forests for their survival. Restoration efforts create corridors for animal movement and ensure the continuation of Kenyas incredible biodiversity.",
    btnText: "Explore Our Work",
    btnLink: "/",
  },
  {
    image: "/imagetwoos.jpg",
    title: "Combating Droughts and Floods",
    text: `Forests act like sponges, soaking up rainwater and releasing it slowly. Reforestation efforts help regulate water flow, mitigating these extreme weather events and ensuring a more stable climate. `,
    btnText: "Learn More",
    btnLink: "/",
  },
  {
    image: "/assets/treeplanting-images/Kenya/kenya_wm.jpg",
    title: "Empowering Communities",
    text: `Healthy forests are essential for the well-being of Kenyan communities. By restoring forests, we're helping to alleviate poverty and create a more sustainable future for local people.`,
    btnText: "About Us",
    btnLink: "/About US",
  },
];

const sec3TimelineData = [
  {
    id: 1,
    icon: (
      <img
        src="/assets/treeplanting-images/Madadascar/location-2955.svg"
        alt=""
      />
    ),
    title: "Location",
    desc: "Northern coast, Lamu County",
  },
  {
    icon: (
      <img
        src="/assets/treeplanting-images/Madadascar/globe-search-12180.svg"
        alt=""
      />
    ),
    title: "Focus",
    desc: "Mangrove and coastal forest habitats",
  },
  {
    icon: (
      <img
        src="/assets/treeplanting-images/Madadascar/donation-7850.svg"
        alt=""
      />
    ),
    title: "Benefits",
    desc: <BenefitsList benefitList={riftValleyBenefitsList} />,
  },
];
const sec3TimelineData2 = [
  {
    id: 1,
    icon: (
      <img
        src="/assets/treeplanting-images/Madadascar/location-2955.svg"
        alt=""
      />
    ),
    title: "Location",
    desc: "In the Great Rift Valley, Kenya",
  },
  {
    icon: (
      <img
        src="/assets/treeplanting-images/Madadascar/globe-search-12180.svg"
        alt=""
      />
    ),
    title: "Focus",
    desc: "Afromontane reforestation and Kenya restoration projects",
  },
  {
    icon: (
      <img
        src="/assets/treeplanting-images/Madadascar/donation-7850.svg"
        alt=""
      />
    ),
    title: "Benefits",
    desc: <BenefitsList benefitList={kijabeForestBenefitsList} />,
  },
];

const page = () => {
  return (
    <div className="overflow-hidden h-full">
      <div
        style={{
          backgroundImage: "url('/assets/treeplanting-images/Kenya/12.png')",
        }}
        className=" flex-col   h-[95vh] flex items-center justify-center bg-cover w-full  px-[30px] relative lg:px-[60px] xll:px-[120px] py-[6rem] mx-auto"
      >
        <motion.h3
          initial={{ y: 200 }}
          viewport={{ once: true }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className=" z-[1] leading-normal text-center lg:leading-[70px] xll:leading-[80px] text-[30px] sm:text-[50px] lg:text-[60px] xll:text-[65px] text-white font-medium font-worksans"
        >
          <span className="text-white">Kenya</span>
        </motion.h3>
        <div className="w-full h-full absolute top-0 left-0 bg-black opacity-50 z-0"></div>
      </div>

      {/* sec 1  */}
      <section className="bg-white">
        <div className="w-full max-w-[1800px] my-[40px]   px-[30px] lg:px-[60px] xll:px-[120px] py-[2rem] mx-auto">
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 0.5 }}
            className={`flex gap-15 flex-col lg:flex-row my-20 items-center justify-center`}
          >
            <div className="  w-full mt-8 lg:mt-0 xsm:w-10/12 lg:flex-1  flex items-center justify-center flex-col">
              <div className="w-full xsm:w-10/12 lg:flex-1 flex items-center text-center lg:text-start lg:items-start  justify-center flex-col">
                <h3 className=" text-center lg:text-left mb-[20px] font-poppins text-[25px] xsm:text-[30px] lg:text-[35px] xll:text-[40px] font-[500] text-black">
                  Trees for Kenya&#39;s Future
                </h3>
                <p className="leading-[30px] text-sm sm:text-[16px]  font-worksans tracking-wide text-black-text">
                  Kenya’s vast landscapes are home to diverse ecosystems, from
                  wildlife-rich savannas to fertile agricultural lands. However,
                  deforestation has threatened this beauty, leading to land
                  degradation and decreased water security. Through
                  reforestation efforts in Kenya, we’re supporting the planting
                  of trees that restore vital ecosystems, improve soil health,
                  and provide local communities with a sustainable source of
                  income through responsible forestry practices.
                </p>
              </div>
            </div>
            <Image
              src="/assets/treeplanting-images/Kenya/DJI_0823wm.jpg"
              width={700}
              height={600}
              alt="bussnessec2"
              loading="lazy"
              className=" rounded-lg w-full sm:w-[80%] mdd:w-[50%] h-auto"
            />
          </motion.div>
        </div>
      </section>
      {/* Section 2 */}
      <section className="w-full bg-white mt-10 max-w-[1800px] mb-[60px]  px-[30px] lg:px-[60px] xll:px-[120px] py-[4rem] mx-auto">
        <h1 className="text-center mb-[20px] font-poppins text-[30px] xsm:text-[40px] lg:text-[50px] xll:text-[55px] font-[500] text-[#3d3d3d]">
          <span className="font-semibold text-black">
            Why Restore in Kenya?
          </span>
        </h1>
        <div className="flex gap-6 flex-wrap items-center justify-center">
          {textcardData?.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(${item.image})`,
                filter: "brightness(0.8)",
              }}
              className="ima w-full xsm:w-[90%  ] flex items-end relative bg-cover bg-no-repeat justify-between  duration-500 hover:scale-110 md:w-[48%] xlg:w-[30%] xll:w-[30%] h-full rounded-xl shadow-lg border min-h-[520px]"
            >
              <div className="gap-y-5 mb-20  relative z-20 text-center w-full h-full rounded-xl flex items-center justify-center flex-col  p-4">
                <div>
                  <h2 className=" text-[#ffffff] text-[18px] xsm:text-[24px] font-worksans font-semibold">
                    {item.title}
                  </h2>
                  <p className=" text-[14px] tracking-wide text-[#ffffff] font-poppins mt-3">
                    {item.text}
                  </p>
                </div>
              </div>
              <div className="w-full h-full absolute top-0 left-0 bg-black opacity-40 z-0"></div>
            </div>
          ))}
        </div>
      </section>

      {/* sec 23 */}
      <section className="bg-[#f6f6f6]">
        <section className="w-full flex items-center justify-start flex-col   max-w-[1800px]  px-[30px] lg:px-[60px] xll:px-[120px] py-[4rem] mx-auto">
          <motion.div
            initial={{ y: 200 }}
            viewport={{ once: true }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full flex flex-col items-center justify-center"
          >
            <h1 className="text-center mb-[20px] font-poppins text-[30px] xsm:text-[35px] lg:text-[50x] xll:text-[55px] font-[500] text-black">
              The Great Rift Valley
            </h1>
          </motion.div>
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 0.5 }}
            className="flex gap-28 flex-col  my-20 items-start justify-start w-full lg:p-32 xs:p:0"
          >
            <ul className="timeline timeline-snap-icon timeline-compact timeline-vertical">
              {sec3TimelineData?.map((item, index) => {
                return (
                  <li key={item.id}>
                    <hr />
                    <div className="timeline-middle w-[80px] text-white text-2xl h-[80px] flex items-center justify-center font-semibold  rounded-full mx-3">
                      {item.icon}
                    </div>
                    <div className="timeline-end  px-4 py-6 mb-10">
                      <h5 className="text-black-text text-[20px] font-semibold mb-1 font-poppins">
                        {item.title}
                      </h5>
                      <p className="text-[#6E6B6B] font-medium text-[14px] font-worksans">
                        {item.desc}
                      </p>
                    </div>
                    <hr />
                  </li>
                );
              })}
            </ul>
            <Image
              src="/assets/treeplanting-images/Kenya/rr.jpg"
              width={800}
              height={600}
              alt="bussnessec2"
              loading="lazy"
              className=" rounded-lg w-full  h-auto"
            />
          </motion.div>
        </section>
      </section>

      <section className="bg-[#f6f6f6]">
        <section className="w-full flex items-center justify-start flex-col   max-w-[1800px]  px-[30px] lg:px-[60px] xll:px-[120px] py-[4rem] mx-auto">
          <motion.div
            initial={{ y: 200 }}
            viewport={{ once: true }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full flex flex-col items-center justify-center"
          >
            <h1 className="text-center mb-[20px] font-poppins text-[30px] xsm:text-[35px] lg:text-[50x] xll:text-[55px] font-[500] text-black">
              Kijabe Forest
            </h1>
          </motion.div>
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 0.5 }}
            className="flex gap-28 flex-col  my-20 items-start justify-start w-full lg:p-32 xs:p:0"
          >
            <ul className="timeline timeline-snap-icon timeline-compact timeline-vertical">
              {sec3TimelineData2?.map((item, index) => {
                return (
                  <li key={item.id}>
                    <hr />
                    <div className="timeline-middle w-[80px] text-white text-2xl h-[80px] flex items-center justify-center font-semibold  rounded-full mx-3">
                      {item.icon}
                    </div>
                    <div className="timeline-end  px-4 py-6 mb-10">
                      <h5 className="text-black-text text-[20px] font-semibold mb-1 font-poppins">
                        {item.title}
                      </h5>
                      <p className="text-[#6E6B6B] font-medium text-[14px] font-worksans">
                        {item.desc}
                      </p>
                    </div>
                    <hr />
                  </li>
                );
              })}
            </ul>
            <img
              src="https://reborngreen.co.uk/wp-content/uploads/2024/05/Kenya-2022-copy-1536x1152.jpg"
              width={800}
              height={600}
              alt="bussnessec2"
              loading="lazy"
              className=" rounded-lg w-full  h-auto"
            />
            <PlantingPartner />
          </motion.div>
        </section>
      </section>
    </div>
  );
};

export default page;
