"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Select from "react-select";
import carbonFootPrint from "../../../../public/Background-Calculator.png";
import CalculatorSvg from "../../../../public/svg/CalculatorSvg";
import flightDetermined from "../../../../public/FLIGHT.png";
import unccLogo from "../../../../public/un-cc-logo.webp";
import verraLogo from "../../../../public/verra-logo.webp";
import goldStandardLogo from "../../../../public/gold-standard-logo.webp";

import airportsData from "../../../../public/airports.json";
import Image from "next/image";

const Page = () => {
  const flightEmissionsSources = [
    {
      link: "https://unfccc.int/climate-action/climate-neutral-now",
      image: unccLogo,
    },
    {
      link: "https://verra.org/programs/verified-carbon-standard",
      image: verraLogo,
    },
    { link: "https://www.goldstandard.org", image: goldStandardLogo },
  ];

  const data = [
    {
      title: "What are carbon offsets?",
      des: `Carbon offsets are reductions in greenhouse gas emissions—such as through reforestation or investing in renewable energy—that are used to compensate for emissions produced elsewhere. When you purchase carbon offsets, you fund these projects to balance out your carbon footprint.`,
    },
    {
      title: `How long does it take for the offset to take effect?`,
      des: `Offset projects typically have a timeframe for generating measurable emissions reductions. While the immediate impact of your contribution may not be visible, these projects work toward long-term sustainability goals.`,
    },
    {
      title: `Is my contribution tax-deductible?`,
      des: `The tax-deductibility of your offset contribution depends on your local tax laws and the organization you support. We recommend consulting with a tax advisor to determine if your contribution qualifies for any tax benefits.`,
    },
  ];

  const [departure, setDeparture] = useState(null);
  const [destination, setDestination] = useState(null);
  const [travelClass, setTravelClass] = useState("Economy Class");
  const [tripType, setTripType] = useState("Outbound & return flight");
  const [passengers, setPassengers] = useState(1);
  const [error, setError] = useState(null);

  const [project, setProject] = useState(null);
  const [paymentLink, setPaymentLink] = useState("");
  const [co2, setCO2] = useState(0);
  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(false);

  // Populate options for departure and destination dropdowns
  const departureOptions = airportsData.map((airport) => ({
    value: airport.iata,
    label: airport.name,
  }));

  const destinationOptions = departureOptions; // Assuming you want the same options for both

  const handleTravelClassChange = (e) => {
    setTravelClass(e.target.value);
  };

  const handleTripTypeChange = (e) => {
    setTripType(e.target.value);
  };

  const handleAddEntry = () => {
    // Logic to handle adding the entry
  };

  const handleNext = async () => {
    if (!departure || !destination) {
      setError("Please select both departure and destination airports.");
      return;
    }

    if (departure.value === destination.value) {
      setError("Departure and destination airports cannot be the same.");
      return;
    }

    setError(null);
    setLoading(true); // Set loading to true
    const requestBody = {
      calculation_options: [
        {
          type: "travel-air",
          departure: departure.value,
          destination: destination.value,
          passengers: passengers,
          return_trip: tripType === "Outbound & return flight" ? true : false,
        },
      ],
      success_url: "<string>",
      cancel_url: "<string>",
      change_allowed: false,
      order_count: 1,
      fractional_digits: 2,
    };

    try {
      const response = await fetch(
        "https://api.klimapi.com/v2/orders/link/calculate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-API-KEY":
              "sk_test_vfPTS9Tn2cBa6sXNTHe5O4QG7pyGT7zyO2mTk7B7mBGaO0imoasl7eQgoudhHKFieacR09veVxV2KWFeLrHvs",
            "X-LOCALE": "EN",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        setError(`Error: ${errorData.error || "Network response was not ok"}`);
        return;
      }

      const data = await response.json();
      console.log(data); // Handle the response data

      const checkout = data.checkout_links[0];
      const projectData = checkout.project;

      setCO2(data.results?.[0]?.kgCO2e ?? 0);

      setPrice(checkout.price);

      setProject(projectData);
      setPaymentLink(checkout.payment_link);

      // Optionally redirect or display the result
    } catch (error) {
      setError("An error occurred while fetching data.");
      console.error("Fetch error:", error);
    } finally {
      setLoading(false); // Set loading to false
    }
  };

  return (
    <section>
      <div className="w-full flex gap-x-8 justify-between items-center px-[30px] lg:px-[60px] xll:px-[120px] py-3 border-b-2 shadow-md">
        <h3 className="font-black font-poppins text-[25px] xsm:text-[30px] lg:text-[35px] xll:text-[40px] text-[#223645] border-b-4 border-b-green">
          Calculate and Offset
        </h3>
        <Link href="/" className="relative">
          <Image
            src="/assets/logos/logo.png"
            width={1000}
            height={1000}
            alt="Picture of the author"
            priority
            className="w-[120px] xsm:w-[160px] h-auto object-cover"
          />
        </Link>
      </div>
      <div className="bg-apiIntegrationBg">
        <div className="bg-black/40 px-8 lg:px-16 xll:px-32 py-8 lg:py-14 flex flex-col gap-y-12">
          <div className="flex flex-col items-center">
            <h2 className="text-4xl font-semibold text-white mb-4">
              Calculate and Offset Your Flight's Carbon Footprint
            </h2>
            <p className="text-gray-600 text-white text-lg">
              Taking responsibility for your travel emissions has never been
              easier. With only a few clicks, you can fly greener.
            </p>
          </div>
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Calculator
            </h2>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 flex flex-col gap-y-1">
                <label className="text-white">
                  Departure <small>Airport or IATA Code</small>
                </label>
                <Select
                  value={departure}
                  onChange={(option) => setDeparture(option)}
                  options={departureOptions}
                  placeholder="Select departure airport"
                  className="text-lg border border-gray-300 rounded-md w-full"
                />
              </div>
              <div className="col-span-12 flex flex-col gap-y-1">
                <label className="text-white">
                  Destination <small>Airport or IATA Code</small>
                </label>
                <Select
                  value={destination}
                  onChange={(option) => setDestination(option)}
                  options={destinationOptions}
                  className="text-lg border border-gray-300 rounded-md"
                  placeholder="Select destination airport"
                />
              </div>
              <div className="col-span-12 md:col-span-4 flex flex-col gap-y-1">
                <label className="text-white">Travel Class</label>
                <select
                  value={travelClass}
                  onChange={handleTravelClassChange}
                  className="px-3 py-2 text-lg border border-gray-300 rounded-md bg-white"
                >
                  <option>Economy Class</option>
                  <option>Premium Economy Class</option>
                  <option>Business Class</option>
                  <option>First Class</option>
                </select>
              </div>
              <div className="col-span-12 md:col-span-4 flex flex-col gap-y-1">
                <label className="text-white">Trip Type</label>
                <select
                  value={tripType}
                  onChange={handleTripTypeChange}
                  className="px-3 py-2 text-lg border border-gray-300 rounded-md w-full bg-white"
                >
                  <option>Outbound & Return Flight</option>
                  <option>Single Flight (One Way)</option>
                </select>
              </div>
              <div className="col-span-12 md:col-span-4 flex flex-col gap-y-1">
                <label className="text-white">Passengers</label>
                <input
                  required
                  type="number"
                  min="1"
                  value={passengers}
                  onChange={(e) => setPassengers(Number(e.target.value))}
                  className="px-3 py-1.5 text-lg border border-gray-300 rounded-md"
                />
              </div>
              <div className="col-span-12 flex flex-col items-end">
                {error && (
                  <div className="w-full flex flex-col gap-y-2">
                    <hr />
                    <p className="text-red-500">{error}</p>
                  </div>
                )}
                <button
                  type="button"
                  onClick={handleNext}
                  className="mt-2 bg-green text-white px-4 py-2 rounded"
                >
                  Next
                </button>
              </div>
              {project && (
                <div className="col-span-12 flex flex-col gap-y-6">
                  <div className="flex flex-col gap-y-2">
                    <h3 className="text-xl font-bold text-white">
                      {project.title}
                    </h3>
                    <p className="text-white">{project.summary}</p>
                    <div className="flex flex-wrap gap-4 justify-between">
                      {project.images.map((image) => (
                        <img
                          key={image}
                          src={image}
                          alt={project.title}
                          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 rounded"
                          style={{ maxWidth: "100%", height: "auto" }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center gap-x-8 flex-wrap">
                    <p className="text-2xl font-bold text-center text-white">
                      Your Result is {co2} kg CO2e for € {price}
                    </p>
                    <a
                      href={paymentLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 text-white px-4 py-2 rounded self-end"
                    >
                      Checkout
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-10 px-8 lg:px-16 xll:px-32 py-8 lg:py-16">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-semibold text-[#3d3d3d] mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 text-center">
            Making it effortless for everyone to offset their flight emissions.
            We’re here to simplify the process and make a real impact on climate
            change.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-x-8">
          <div className="col-span-12 md:col-span-7 flex flex-col gap-y-4">
            <h2 className="text-2xl font-semibold text-[#3d3d3d]">
              How is the Emissions Calculation for My Flight Determined?
            </h2>
            <p className="text-gray-600">
              We determine emissions using specific emission factors, usually
              sourced from governmental agencies and NGOs. Each factor is
              meticulously reviewed and cross-referenced with other sources to
              ensure accuracy. Based on your flight details, we categorize your
              journey as short, medium, or long-haul and select the
              corresponding emission factor. This, combined with any additional
              information you provide, allows us to calculate the emissions of
              your flight as precisely as possible.
            </p>
          </div>
          <Image
            src={flightDetermined}
            alt="flight-determined"
            className="col-span-12 md:col-span-5 w-full h-auto rounded-xl"
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-10 items-center px-8 lg:px-16 xll:px-32 py-8 lg:py-16">
        <h2 className="text-4xl font-semibold text-[#3d3d3d] mb-4">
          Reliable Sources for CO2 Flight Emissions Offsets
        </h2>
        <div className="w-full grid grid-cols-3 gap-x-12">
          {flightEmissionsSources.map((i) => (
            <Link key={i.link} href={i.link} target="_blank">
              <Image
                src={i.image}
                alt={i.link}
                className="col-span-1 w-full h-auto rounded-lg"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="px-8 lg:px-16 xll:px-32 py-8 lg:py-16">
        <div className="flex flex-col gap-y-10 items-center rounded-xl border-2 shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-[#3d3d3d] mb-4">
            Frequently Asked Questions (FAQs)
          </h2>
          <div className="flex flex-col">
            {data?.map((item, index) => (
              <div
                key={index}
                className="collapse collapse-arrow bg-white p-0 rounded-none"
              >
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title mb-[0px] font-poppins text-[18px] font-normal text-[#504545]">
                  {item.title}
                </div>
                <div className="collapse-content">
                  <p className="text-[#919191] text-sm">{item.des}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#43b933] flex flex-col gap-y-2 px-8 lg:px-16 xll:px-32 py-4 lg:py-8">
        <h2 className="text-xl font-semibold text-white">
          Join Us on Our Journey
        </h2>
        <p className="text-white">
          Every flight you take can now contribute to a brighter, greener
          future. By choosing to offset your emissions with us, you’re not just
          making a responsible choice—you’re joining a community dedicated to
          positive change. Together, let’s turn every mile into a step toward a
          sustainable world. Thank you for being part of the solution!
        </p>
      </div>
    </section>
  );
};

export default Page;
