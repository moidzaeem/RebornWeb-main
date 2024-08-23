"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Helmet } from "react-helmet";

const workse2cData = [
  {
    icon: "/Tree Protection.svg",
    title: "Tree Protection",
    des: "The tree planting sites we endorse are under protective agreements with local governments and communities. These agreements guarantee the preservation of the land, safeguarding it from being acquired or repurposed for other activities.",
  },
  {
    icon: "/Landscape Restoration.svg",
    title: "Landscape Restoration",
    des: "Our strategy goes beyond conventional tree planting methods by adopting sa comprehensive Landscape Restoration approach. This approach brings real advantages to local communities, enhances biodiversity and ecosystem services, and plays a part in creating lasting positive effects to fight against climate change.",
  },
  {
    icon: "/Ensuring Global Standards.svg",
    title: "Ensuring Global Standards",
    des: "Each project meticulously follows industry best practices and global standards, ensuring seamless integration with national policies. We exceed evolving carbon and biodiversity benchmarks, adapting as standards progress.",
  },
];

const sec3TimelineData = [
  {
    id: 1,
    desc: "By strategically planting tree species known for high CO2 absorption rates.",
  },
  {
    id: 2,
    desc: "Prioritizing regions where new forests can create diverse habitats for threatened species.",
  },
  {
    id: 3,
    desc: "Integrating tree-planting initiatives with programs that empower local communities through job creation and sustainable practices.",
  },
  {
    id: 4,
    desc: "Focus on promoting gender equality in regions where employment opportunities for women are limited.",
  },
];

const page = () => {
  return (
    <div className="overflow-hidden h-full">
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Tree Planting | Verified Projects Worldwide</title>
        <meta
          name="title"
          content="Tree Planting | Verified Projects Worldwide"
        />
        <meta
          name="description"
          content="Join us in supporting verified tree planting projects worldwide, delivering the highest social and climate impact. Make a difference with every tree planted."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://reborngreen.org" />
        <meta
          property="og:title"
          content="Tree Planting | Verified Projects Worldwide"
        />
        <meta
          property="og:description"
          content="Join us in supporting verified tree planting projects worldwide, delivering the highest social and climate impact. Make a difference with every tree planted."
        />
        <meta property="og:image" content="" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="http://website.com" />
        <meta
          property="twitter:title"
          content="Tree Planting | Verified Projects Worldwide"
        />
        <meta
          property="twitter:description"
          content="Join us in supporting verified tree planting projects worldwide, delivering the highest social and climate impact. Make a difference with every tree planted."
        />
        <meta property="twitter:image" content="" />
      </Helmet>
      <div
        style={{
          backgroundImage:
            "url('/tree-plating/Untitled design - 2024-06-22T091341.388.png')",
        }}
        className=" flex-col h-[80vh] flex items-center justify-center bg-cover w-full  px-[30px] relative lg:px-[60px] xll:px-[120px] py-[6rem] mx-auto"
      >
        <motion.h3
          initial={{ y: 200 }}
          viewport={{ once: true }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className=" z-[1] leading-normal text-center lg:leading-[70px] xll:leading-[80px] text-[30px] sm:text-[50px] lg:text-[60px] xll:text-[65px] text-white font-medium font-worksans"
        >
          <span className="text-green">Trees </span> for Our Future
        </motion.h3>
        <motion.p
          initial={{ y: 200 }}
          viewport={{ once: true }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className=" w-full font-worksans mt-6 sm:w-[70%] mdd:w-[60%] text-white z-[1] text-center"
        >
          Trees are powerful allies in the fight against climate change, and by
          planting together, we can create a lasting impact.
        </motion.p>

        <div className="w-full h-full absolute top-0 left-0 bg-black opacity-50 z-0"></div>
      </div>

      {/* our work section 1 */}
      <section className="w-full flex items-center justify-start flex-col bg-white mt-10 max-w-[1800px] mb-[60px]  px-[30px] lg:px-[60px] xll:px-[120px] py-[4rem] mx-auto">
        <motion.div
          initial={{ y: 200 }}
          viewport={{ once: true }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full flex flex-col items-center justify-center"
        >
          <h1 className="text-center mb-[20px] font-poppins text-[30px] xsm:text-[35px] lg:text-[50x] xll:text-[55px] font-[500] text-[#3d3d3d]">
            <span className="text-[#14a800]">We Use Best Practices for </span>{" "}
            Optimal Tree Planting
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 mdd:grid-cols-3 items-center justify-center gap-10 flex-wrap">
          {workse2cData?.map((item, index) => (
            <div
              key={index}
              className={` ${
                index === 1 ? "shadow-lg " : "shadow-sm"
              } transition-all duration-300 hover:shadow-2xl px-4 mdd:px-9 h-[400px] gap-8 text-left py-10  bg-white flex items-start flex-col justify-start`}
            >
              <div className="flex items-center gap-5">
                <Image
                  src={item.icon}
                  alt="img"
                  height={1000}
                  width={1000}
                  className="w-[80px] h-[80px]"
                />
                <h5 className="font-poppins font-semibold text-[18px]">
                  {item.title}
                </h5>
              </div>
              <p className="font-worksans font-normal leading-[23px] text-black-text text-[15px]">
                {item.des}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* our work section 1 */}
      <section className="w-full flex items-center justify-start flex-col bg-white mt-10 max-w-[1800px]  px-[30px] lg:px-[60px] xll:px-[120px] mx-auto">
        <motion.div
          initial={{ y: 200 }}
          viewport={{ once: true }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full flex flex-col items-center justify-center"
        >
          <h1 className="text-center mb-[20px] font-poppins text-[30px] xsm:text-[35px] lg:text-[50x] xll:text-[55px] font-[500] text-[#3d3d3d]">
            Why Plant Trees with RebornGreen?
          </h1>
          <p className="text-[16px] font-worksans text-green font-semibold sm:text-[18px]">
            We focus on strategic reforestation projects in areas that need it
            most, ensuring the long-term survival and impact of your
            contribution.
          </p>
        </motion.div>

        <div className="w-full my-[200px] ">
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <li>
              <div className="timeline-middle mx-3">
                <Image
                  src="/svgnew/Improving Survival Rate.svg"
                  alt="Images"
                  width={120}
                  height={120}
                  className=""
                />
              </div>
              <div className="timeline-start md:text-end mb-10">
                <div className="text-[30px] font-poppins font-semibold">
                  Improving Survival Rate
                </div>
                Despite employing best practices, planting the right tree at the
                right time does not guarantee a 100% survival rate. Therefore,
                we annually plant an additional 5% to ensure impactful results.
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle mx-3">
                <Image
                  src="/svgnew/Plantation Site Verification.svg"
                  alt="Images"
                  width={120}
                  height={120}
                  className=""
                />
              </div>
              <div className="timeline-end mb-10">
                <div className="text-[30px] font-poppins font-semibold">
                  Plantation Site Verification
                </div>
                The monitoring process includes pre-intervention, planting, and
                post-intervention phases. During these stages, the planting
                activities are documented. The monitoring team verifies photo
                coordinates to ensure they align with the correct planting site
                boundaries
              </div>
              <hr />
            </li>

            <li>
              <div className="timeline-middle mx-3">
                <Image
                  src="/svgnew/Innovative project (2).svg"
                  alt="Images"
                  width={120}
                  height={120}
                  className=""
                />
              </div>
              <div className="timeline-start md:text-end mb-10">
                <div className="text-[30px] font-poppins font-semibold">
                  Amplifying Impact
                </div>
                With each sponsored tree, a portion of the proceeds is
                reinvested into innovative projects that maximize environmental
                impact and educate more people on environmental practices. This
                approach accelerates our fight against climate change.
              </div>
              <hr />
            </li>
          </ul>
        </div>
      </section>

      {/* sec 2  */}
      <section className="bg-[#f6f6f6]">
        <div className="w-full max-w-[1800px] my-[40px]   px-[30px] lg:px-[60px] xll:px-[120px] py-[2rem] mx-auto">
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 0.5 }}
            className={`flex gap-15 flex-col lg:flex-row my-20 items-center justify-center`}
          >
            <Image
              src="/svgnew/55.jpg"
              width={700}
              height={500}
              alt="bussnessec2"
              loading="lazy"
              className=" rounded-lg w-full sm:w-[80%] mdd:w-[50%] h-auto"
            />
            <div className="  w-full mt-8 lg:mt-0 xsm:w-10/12 lg:flex-1  flex items-center justify-center flex-col">
              <div className="w-full xsm:w-10/12 lg:flex-1 flex items-center text-center lg:text-start lg:items-start  justify-center flex-col">
                <h3 className=" text-center lg:text-left mb-[20px] font-poppins text-[25px] xsm:text-[30px] lg:text-[35px] xll:text-[40px] font-[500] text-green">
                  Trees Act as Nature's Air Filters!
                </h3>
                <p className="leading-[30px] text-sm sm:text-[16px]  font-worksans tracking-wide text-black-text">
                  They absorb carbon dioxide (CO2), a gas that traps heat and
                  contributes to global warming. With rising CO2 levels,
                  planting trees is more important than ever. Trees capture this
                  excess carbon, storing it as they grow. This helps fight
                  climate change and create a cleaner, healthier planet for
                  everyone.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* sec 3  */}
      <section className="w-full flex items-center justify-start flex-col bg-white  max-w-[1800px]  px-[30px] lg:px-[60px] xll:px-[120px] py-[4rem] mx-auto">
        <motion.div
          initial={{ y: 200 }}
          viewport={{ once: true }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full flex flex-col items-center justify-center"
        >
          <h1 className="text-center mb-[20px] font-poppins text-[30px] xsm:text-[35px] lg:text-[50x] xll:text-[55px] font-[500] text-[#3d3d3d]">
            Strategic Tree Planting for Maximum Impact
          </h1>
          <p className="text-[16px] font-worksans text-green font-semibold sm:text-[18px]">
            With a long-term vision for a healthier planet, RebornGreen focuses
            on areas where trees can maximize their impact by:
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 0.5 }}
          className="flex gap-28 flex-col lg:flex-row my-20 items-center justify-center"
        >
          <div className="  w-full mt-8 lg:mt-0 xsm:w-10/12 lg:flex-1  flex items-center justify-center flex-col">
            <ul className="timeline timeline-snap-icon timeline-compact timeline-vertical">
              {sec3TimelineData?.map((item, index) => {
                return (
                  <li key={item.id}>
                    <hr />
                    <div className="timeline-middle w-[80px] text-white text-2xl h-[80px] flex items-center justify-center font-semibold bg-green rounded-full mx-3">
                      {item.id}
                    </div>
                    <div className="timeline-end bg-white shadow-md px-4 py-6 mb-10">
                      <p className="text-black-text text-[16px] font-worksans">
                        {item.desc}
                      </p>
                    </div>
                    <hr />
                  </li>
                );
              })}
            </ul>
          </div>
          <Image
            src="/svgnew/BP 3.jpg"
            width={1000}
            height={1000}
            alt="bussnessec2"
            loading="lazy"
            className=" rounded-lg w-full sm:w-[80%] mdd:w-[50%] h-auto"
          />
        </motion.div>
      </section>

      {/* sec 4  */}
      <section className="bg-[#f6f6f6]">
        <div className="w-full max-w-[1800px] my-[40px]   px-[30px] lg:px-[60px] xll:px-[120px] py-[2rem] mx-auto">
          <div className="flex flex-col items-center gap-y-4">
            <h1 className="mt-4 text-center mb-[20px] font-poppins text-[30px] xsm:text-[35px] lg:text-[50x] xll:text-[55px] font-[500] text-[#3d3d3d]">
              Read to Join Our Mission?
            </h1>
            <p className="w-full md:max-w-screen-lg leading-5 tracking-normal font-worksans text-center text-black-text text-sm xsm:text-base">
              Simple actions can have a significant impact. Determine how you
              would like to contribute to climate initiatives and discover the
              best options for both your business and the planet.
            </p>
          </div>
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 0.5 }}
            className={`flex gap-15 flex-col lg:flex-row my-20 items-center justify-center`}
          >
            <Image
              src="/svgnew/Madagascar (2).png"
              width={1000}
              height={1000}
              alt="bussnessec2"
              loading="lazy"
              className=" rounded-lg w-full sm:w-[80%] mdd:w-[50%] h-auto"
            />
            <div className="  w-full mt-8 lg:mt-0 xsm:w-10/12 lg:flex-1  flex items-center justify-center flex-col">
              <div className="w-full xsm:w-10/12 lg:flex-1 flex items-center text-center lg:text-start lg:items-start  justify-center flex-col">
                <h3 className=" text-center lg:text-left mb-[20px] font-poppins text-[25px] xsm:text-[30px] lg:text-[35px] xll:text-[40px] font-[500] text-green">
                  Madagascar{" "}
                </h3>
                <p className="leading-[30px] text-sm sm:text-[16px]  font-worksans tracking-wide text-black-text">
                  Madagascar, an island nation off the coast of Africa, is a
                  global biodiversity hotspot teeming with unique plant and
                  animal life found nowhere else on Earth. However,
                  deforestation threatens this irreplaceable ecosystem. By
                  planting trees in Madagascar, we're helping to restore lost
                  habitats, protect endangered species like lemurs, and ensure
                  the island's natural beauty thrives for generations to come{" "}
                </p>
              </div>
              <Link href={"/madagascar"}>
                <button className="bg-green text-white py-2 px-4 rounded-md hover:bg-green-dark transition duration-300 mt-4">
                  Read More
                </button>
              </Link>
            </div>
          </motion.div>
          {/* 2 */}
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 0.5 }}
            className={`flex gap-15 flex-col lg:flex-row my-20 items-center justify-center`}
          >
            <div className="  w-full mt-8 lg:mt-0 xsm:w-10/12 lg:flex-1  flex items-center justify-center flex-col">
              <div className="w-full xsm:w-10/12 lg:flex-1 flex items-center text-center lg:text-start lg:items-start  justify-center flex-col">
                <h3 className=" text-center lg:text-left mb-[20px] font-poppins text-[25px] xsm:text-[30px] lg:text-[35px] xll:text-[40px] font-[500] text-green">
                  Mozambique
                </h3>
                <p className="leading-[30px] text-sm sm:text-[16px]  font-worksans tracking-wide text-black-text">
                  Mozambique's long coastline is vital to its economy and
                  culture. However, deforestation has led to increased soil
                  erosion and weakened coastal defenses, making communities more
                  vulnerable to cyclones and floods. Our tree planting
                  initiatives in Mozambique focus on restoring coastal mangrove
                  forests, which act as natural barriers against storms and
                  provide vital nursery grounds for marine life.
                </p>
              </div>
              <Link href={"/mozambique"}>
                <button className="bg-green text-white py-2 px-4 rounded-md hover:bg-green-dark transition duration-300 mt-4">
                  Read More
                </button>
              </Link>
            </div>
            <Image
              src="/svgnew/Mozambique.png"
              width={1000}
              height={1000}
              alt="bussnessec2"
              loading="lazy"
              className=" rounded-lg w-full sm:w-[80%] mdd:w-[50%] h-auto"
            />
          </motion.div>
          {/* 3 */}
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 0.5 }}
            className={`flex gap-15 flex-col lg:flex-row my-20 items-center justify-center`}
          >
            <Image
              src="/svgnew/Kenya (1).png"
              width={1000}
              height={1000}
              alt="bussnessec2"
              loading="lazy"
              className=" rounded-lg w-full sm:w-[80%] mdd:w-[50%] h-auto"
            />
            <div className="  w-full mt-8 lg:mt-0 xsm:w-10/12 lg:flex-1  flex items-center justify-center flex-col">
              <div className="w-full xsm:w-10/12 lg:flex-1 flex items-center text-center lg:text-start lg:items-start  justify-center flex-col">
                <h3 className=" text-center lg:text-left mb-[20px] font-poppins text-[25px] xsm:text-[30px] lg:text-[35px] xll:text-[40px] font-[500] text-green">
                  Kenya
                </h3>
                <p className="leading-[30px] text-sm sm:text-[16px]  font-worksans tracking-wide text-black-text">
                  Kenya's vast landscapes are home to diverse ecosystems, from
                  savannas teeming with wildlife to fertile agricultural lands.
                  However, deforestation has led to land degradation and
                  decreased water security. Through reforestation efforts in
                  Kenya, we're planting trees that restore vital ecosystems,
                  improve soil health, and provide local communities with a
                  sustainable source of income through responsible forestry
                  practices.
                </p>
              </div>
              <Link href={"/kenya"}>
                <button className="bg-green text-white py-2 px-4 rounded-md hover:bg-green-dark transition duration-300 mt-4">
                  Read More
                </button>
              </Link>
            </div>
          </motion.div>
          {/* 4 */}
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 0.5 }}
            className={`flex gap-15 flex-col lg:flex-row my-20 items-center justify-center`}
          >
            <div className="  w-full mt-8 lg:mt-0 xsm:w-10/12 lg:flex-1  flex items-center justify-center flex-col">
              <div className="w-full xsm:w-10/12 lg:flex-1 flex items-center text-center lg:text-start lg:items-start  justify-center flex-col">
                <h3 className=" text-center lg:text-left mb-[20px] font-poppins text-[25px] xsm:text-[30px] lg:text-[35px] xll:text-[40px] font-[500] text-green">
                  Honduras
                </h3>
                <p className="leading-[30px] text-sm sm:text-[16px]  font-worksans tracking-wide text-black-text">
                  Honduras plays a critical role in Central America's ecological
                  balance. Lush rainforests act as a natural filter for the
                  region's water supply, but deforestation threatens this vital
                  resource. Our reforestation projects in Honduras focus on
                  restoring these rainforests, helping to ensure clean water for
                  millions of people, and promoting biodiversity in the region.
                </p>
              </div>
              <Link href={"/honduras"}>
                <button className="bg-green text-white py-2 px-4 rounded-md hover:bg-green-dark transition duration-300 mt-4">
                  Read More
                </button>
              </Link>
            </div>
            <Image
              src="/svgnew/Honduras (2).png"
              width={1000}
              height={1000}
              alt="bussnessec2"
              loading="lazy"
              className=" rounded-lg w-full sm:w-[80%] mdd:w-[50%] h-auto"
            />
          </motion.div>
          {/* 5 */}
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 0.5 }}
            className={`flex gap-15 flex-col lg:flex-row my-20 items-center justify-center`}
          >
            <Image
              src="/svgnew/Brazil (1).png"
              width={1000}
              height={1000}
              alt="bussnessec2"
              loading="lazy"
              className=" rounded-lg w-full sm:w-[80%] mdd:w-[50%] h-auto"
            />
            <div className="  w-full mt-8 lg:mt-0 xsm:w-10/12 lg:flex-1  flex items-center justify-center flex-col">
              <div className="w-full xsm:w-10/12 lg:flex-1 flex items-center text-center lg:text-start lg:items-start  justify-center flex-col">
                <h3 className=" text-center lg:text-left mb-[20px] font-poppins text-[25px] xsm:text-[30px] lg:text-[35px] xll:text-[40px] font-[500] text-green">
                  Brazil{" "}
                </h3>
                <p className="leading-[30px] text-sm sm:text-[16px]  font-worksans tracking-wide text-black-text">
                  The Amazon rainforest is crucial for global climate
                  regulation. However, deforestation poses a significant threat
                  to its health. By planting trees in Brazil, we're contributing
                  to reforestation efforts in the Amazon, helping to mitigate
                  climate change, preserve vital habitats for countless species,
                  and ensure the rainforest remains the "lungs of the planet"
                  for generations to come.
                </p>
              </div>
              <Link href={"/ethiopia"}>
                <button className="bg-green text-white py-2 px-4 rounded-md hover:bg-green-dark transition duration-300 mt-4">
                  Read More
                </button>
              </Link>
            </div>
          </motion.div>
          {/* 6 */}
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 0.5 }}
            className={`flex gap-15 flex-col lg:flex-row my-20 items-center justify-center`}
          >
            <div className="  w-full mt-8 lg:mt-0 xsm:w-10/12 lg:flex-1  flex items-center justify-center flex-col">
              <div className="w-full xsm:w-10/12 lg:flex-1 flex items-center text-center lg:text-start lg:items-start  justify-center flex-col">
                <h3 className=" text-center lg:text-left mb-[20px] font-poppins text-[25px] xsm:text-[30px] lg:text-[35px] xll:text-[40px] font-[500] text-green">
                  Ethiopia
                </h3>
                <p className="leading-[30px] text-sm sm:text-[16px]  font-worksans tracking-wide text-black-text">
                  Ethiopia, once known as the "Green Gold of Africa," has faced
                  significant challenges with deforestation. This has led to
                  soil erosion, decreased agricultural productivity, and reduced
                  water availability. Our tree planting initiatives in Ethiopia
                  focus on restoring native forests, improving soil health, and
                  promoting sustainable land management practices for a more
                  resilient future.
                </p>
              </div>
              <Link href={"/ethiopia"}>
                <button className="bg-green text-white py-2 px-4 rounded-md hover:bg-green-dark transition duration-300 mt-4">
                  Read More
                </button>
              </Link>
            </div>
            <Image
              src="/svgnew/Ethiopia (1).png"
              width={1000}
              height={1000}
              alt="bussnessec2"
              loading="lazy"
              className=" rounded-lg w-full sm:w-[80%] mdd:w-[50%] h-auto"
            />
          </motion.div>
          <div className="bg-[#43b933]/80 flex flex-col gap-y-4 px-8 lg:px-16 xll:px-32 py-4 lg:py-8 py-2 flex justify-center">
            <h2 className="text-3xl font-semibold text-white">
              Ready to Join Our Mission?
            </h2>
            <p className="text-white">
              Make a lasting impact. Choose your planting frequency: monthly,
              occasional, or automated. Every tree planted brings us closer to a
              healthier planet
            </p>
            <Link href="/user-profile" className="btn w-fit">
              Let's grow together
            </Link>
          </div>

          {/* <div className="flex items-center gap-10 justify-center flex-col">
            <h1 className=" text-center mb-[20px] font-poppins text-[25px] xsm:text-[30px] lg:text-[35px] xll:text-[40px] font-[500] text-green">
              Offset the carbon footprint of your business
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-x-10 w-full">
              <Image
                src="/assets/images/vcs.svg"
                alt="Vsc Logo"
                width={300}
                height={200}
                className=" w-[150px] xsm:w-[200px] md:w-[250px] h-auto"
              />
              <Image
                src="/assets/images/gold-standard.svg"
                alt="gold-standard Logo"
                width={300}
                height={200}
                className=" w-[150px] xsm:w-[200px] md:w-[250px] h-auto"
              />
            </div>
            <p className="text-[14px] font-poppins">
              Treeapp retires carbon credits on behalf of yourself or your
              organization. Receive your carbon credit certificate and share
              your impact.
            </p>
            <Link href="/contact" className="btn">
              Contact Us
            </Link>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default page;
