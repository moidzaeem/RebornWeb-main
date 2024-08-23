"use client";
import PlantingPartner from "@/components/PlantingPartner";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaRegCheckCircle } from "react-icons/fa";
import { Helmet } from "react-helmet";

const benefitsList = (
  <div className="flex gap-2 flex-col">
    <div className="flex items-center gap-x-1 text-xs ssm:text-sm xlg:text-base font-medium">
      <FaRegCheckCircle size={14} />
      <p>Stabilizes the coast against erosion</p>
    </div>
    <div className="flex items-center gap-x-1 text-xs ssm:text-sm xlg:text-base font-medium">
      <FaRegCheckCircle size={14} />
      <p>
        Improves ocean health by filtering pollutants and providing nursery
        grounds for fish.
      </p>
    </div>
  </div>
);

const textcardData = [
  {
    image:
      "https://reborngreen.co.uk/wp-content/uploads/2024/04/Untitled-design-2024-04-24T193421.241.png",
    title: "Unique and Vulnerable",
    text: "Madagascar boasts exceptional biodiversity, with many species found nowhere else on Earth. Habitat loss is a major threat to this irreplaceable wildlife.",
    btnText: "Explore Our Work",
    btnLink: "/",
  },
  {
    image: "/assets/mdc/mdc2.jpg",
    title: "Coastal Communities at Risk",
    text: `Mangrove destruction exposes coastlines, leading to erosion and diminished fisheries. This weakens communities ${"'"} defenses against natural disasters like hurricanes and floods. `,
    btnText: "Learn More",
    btnLink: "/",
  },
  {
    image: "/imagethrees.png",
    title: "Protecting Rare Forests",
    text: `Madagascar${"'"}s inland forests are irreplaceable for biodiversity. Restoration combats deforestation, safeguarding these unique ecosystems.`,
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
    desc: "Northwest Madagascar's coastline",
  },
  {
    icon: (
      <img
        src="/assets/treeplanting-images/Madadascar/globe-search-12180.svg"
        alt=""
      />
    ),
    title: "Focus",
    desc: "Mangrove restoration",
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
    desc: "Protected area in northwest Madagascar",
  },
  {
    icon: (
      <img
        src="/assets/treeplanting-images/Madadascar/globe-search-12180.svg"
        alt=""
      />
    ),
    title: "Focus",
    desc: "Protecting and restoring Ankarafantsika National Park, the largest dry deciduous forest",
  },
  {
    icon: (
      <img
        src="/assets/treeplanting-images/Madadascar/donation-7850.svg"
        alt=""
      />
    ),
    title: "Benefits",
    desc: "Habitat for eight endangered lemur species 70% of the park's 820 plant species are endemic to Madagascar (found nowhere else!)",
  },
];

const page = () => {
  return (
    <div className="overflow-hidden h-full">
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Restore Madagascar's Biodiversity | Coastal & Restoration Projects</title>
        <meta
          name="title"
          content="Restore Madagascar's Biodiversity | Coastal & Restoration Projects"
        />
        <meta
          name="description"
          content="Support mangrove restoration at the northwest coastline and protect rare inland forests to safeguard wildlife and coastal communities."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://reborngreen.org" />
        <meta
          property="og:title"
          content="Restore Madagascar's Biodiversity | Coastal & Restoration Projects"
        />
        <meta
          property="og:description"
          content="Support mangrove restoration at the northwest coastline and protect rare inland forests to safeguard wildlife and coastal communities."
        />
        <meta property="og:image" content="" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="http://website.com" />
        <meta
          property="twitter:title"
          content="Restore Madagascar's Biodiversity | Coastal & Restoration Projects"
        />
        <meta
          property="twitter:description"
          content="Support mangrove restoration at the northwest coastline and protect rare inland forests to safeguard wildlife and coastal communities."
        />
        <meta property="twitter:image" content="" />
      </Helmet>
      <div
        style={{
          backgroundImage:
            "url('https://reborngreen.co.uk/wp-content/uploads/2024/04/Untitled-design-2024-04-23T203141.122.png')",
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
          <span className="text-white">Madagascar</span>
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
                  Restore Madagascar&#39;s Beauty
                </h3>
                <p className="leading-[30px] text-sm sm:text-[16px]  font-worksans tracking-wide text-black-text">
                  Madagascar&apos; an island nation off the coast of
                  Africa&apos; is a global biodiversity hotspot . It is
                  estimated to be home to around 5% of the world&#39;s
                  biodiversity&apos; with an incredible number of plant and
                  animal species found nowhere else on Earth. This high level of
                  endemism&apos; or species confined to a particular location
                  &apos; makes Madagascar a truly unique and irreplaceable
                  place.
                </p>
              </div>
            </div>
            <Image
              src="/assets/treeplanting-images/Madadascar/IMG_7142.jpg"
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
            Why Restore in Madagascar?
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
              className={`${
                index !== 1 ? "ima " : ""
              }w-full xsm:w-[90%] flex items-end relative bg-cover bg-no-repeat justify-between duration-500 hover:scale-110 md:w-[48%] xlg:w-[30%] xll:w-[30%] h-full rounded-xl shadow-lg border min-h-[520px]`}
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
                      <ddiv className="text-[#6E6B6B] font-medium text-[14px] font-worksans">
                        {item.desc}
                      </ddiv>
                    </div>
                    <hr />
                  </li>
                );
              })}
            </ul>
            <Image
              src="/assets/mdc/plnt.jpg"
              width={800}
              height={600}
              alt="bussnessec2"
              loading="lazy"
              className=" rounded-lg w-full  h-auto"
            />
          </motion.div>
        </section>
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
              Ankarafantsika National Park
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
            <Image
              src="/assets/mdc/kesan.jpg"
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
