"use client";
import PlantingPartner from "@/components/PlantingPartner";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaRegCheckCircle } from "react-icons/fa";

const benefitsList = (
  <div className="flex gap-2 flex-col">
    <div className="flex items-center gap-x-1 text-xs ssm:text-sm xlg:text-base font-medium">
      <FaRegCheckCircle size={14} />
      <p>Provide stability against erosion</p>
    </div>
    <div className="flex items-center gap-x-1 text-xs ssm:text-sm xlg:text-base font-medium">
      <FaRegCheckCircle size={14} />
      <p>Improve ocean and coral reef health</p>
    </div>
  </div>
);
const textcardData = [
  {
    image:
      "/assets/treeplanting-images/Mozambique/20190822_Mozambique_0333.jpg",
    title: "A Lifeline for Ecosystems",
    text: `Mozambique's vast forests are vital for its ecological health. They provide habitat for countless species, protect soil from erosion, and regulate water flow. Restoration combats deforestation and safeguards these irreplaceable ecosystems.`,
    btnText: "Explore Our Work",
    btnLink: "/",
  },
  {
    image:
      "/assets/treeplanting-images/Mozambique/20190822_Mozambique_0423wm.jpg",
    title: "Protecting Livelihoods",
    text: `Forests are intricately linked to the well-being of Mozambican communities. They provide resources like maintain fertile land for agriculture, and support fisheries. Restoration efforts help sustain these livelihoods.`,
    btnText: "Learn More",
    btnLink: "/",
  },
  {
    image:
      "https://reborngreen.co.uk/wp-content/uploads/2024/05/Untitled-design-2024-05-02T135031.066.png",
    title: "Building Resilience",
    text: `Cyclones and floods are a constant threat in Mozambique. Healthy forests act as natural buffers, reducing the impact of these disasters on communities and infrastructure. Restoration strengthens Mozambique's resilience in the face of climate change.`,
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
    desc: "Southern tip of Mozambique, in close proximity to Maputo",
  },
  {
    icon: (
      <img
        src="/assets/treeplanting-images/Madadascar/globe-search-12180.svg"
        alt=""
      />
    ),
    title: "Focus",
    desc: "Mangrove restoration and reforestation",
  },
  {
    icon: (
      <img
        src="/assets/treeplanting-images/Madadascar/donation-7850.svg"
        alt=""
      />
    ),
    title: "Benefits",
    desc: benefitsList,
  },
];

const page = () => {
  return (
    <div className="overflow-hidden h-full">
      <div
        style={{
          backgroundImage:
            "url('/assets/treeplanting-images/Mozambique/green123.png')",
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
          <span className="text-white">Mozambique </span>
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
                <h3 className=" text-center lg:text-left mb-[20px] font-poppins text-[25px] xsm:text-[30px] lg:text-[35px] xll:text-[40px] font-[700] text-black">
                  Trees for Coastal Defenses
                </h3>
                <p className="leading-[30px] text-sm sm:text-[16px]  font-worksans tracking-wide text-black-text">
                  Mozambique’s long coastline is vital to its economy and
                  culture. However, deforestation has led to increased soil
                  erosion and weakened coastal defenses, making communities more
                  vulnerable to cyclones and floods. The tree planting projects
                  in Mozambique focus on restoring coastal mangrove forests,
                  which act as natural barriers against storms and provide vital
                  nursery grounds for marine life.
                </p>
              </div>
            </div>
            <Image
              src="/assets/treeplanting-images/Mozambique/20190822_Mozambique_0347wm.jpg"
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
          <span className="font-bold text-black">
            Why Planting Trees in Mozambique?
          </span>
        </h1>
        <div className="flex gap-6 flex-wrap items-center justify-center">
          {textcardData?.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(${item.image})`,
                filter: "brightness(0.80)",
              }}
              className={`${
                index === 4 ? "ima " : ""
              } w-full xsm:w-[90%] flex items-end relative bg-cover bg-no-repeat justify-between duration-500 hover:scale-110 md:w-[48%] xlg:w-[30%] xll:w-[30%] h-full rounded-xl shadow-lg border min-h-[520px]`}
            >
              <div className="gap-y-5 mb-20 relative z-20 text-center w-full h-full rounded-xl flex items-center justify-center flex-col p-4">
                <div>
                  <h2 className="text-[#ffffff] text-[18px] xsm:text-[24px] font-worksans font-semibold">
                    {item.title}
                  </h2>
                  <p className="text-[14px] tracking-wide text-[#ffffff] font-poppins mt-3">
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
              Coastal Restoration
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
                      <div className="text-[#6E6B6B] font-medium text-[14px] font-worksans">
                        {item.desc}
                      </div>
                    </div>
                    <hr />
                  </li>
                );
              })}
            </ul>
            <Image
              src="/assets/treeplanting-images/Mozambique/Mozambiquemangroves.jpg"
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
