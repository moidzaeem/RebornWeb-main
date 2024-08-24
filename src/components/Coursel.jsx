"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; // Import arrow icons

export default function CardCarousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768, // Adjust breakpoint as needed for tablet screens
        settings: {
          slidesToShow: 2, // Change slidesToShow to 2 on tablet screens
        },
      },
      {
        breakpoint: 468, // Adjust breakpoint as needed for mobile screens
        settings: {
          slidesToShow: 1, // Change slidesToShow to 1 on mobile screens
        },
      },
    ],
    centerMode: true, // Enable center mode
    centerPadding: "60px", // Adjust center padding as needed
  };

  return (
    <section className="w-full border-t-2 bg-white mt-10 max-w-[1800px] mb-[60px] px-[30px] lg:px-[60px] xll:px-[120px] py-[4rem] mx-auto">
      <h1 className="text-center mb-[60px] font-poppins text-[30px] xsm:text-[40px] lg:text-[55px] xll:text-[60px] font-[500] text-[#3d3d3d]">
        Our Partners
      </h1>
      <Slider {...settings}>
        <div>
          <Image
            src="/assets/images/partner1.svg"
            width={150}
            height={50}
            alt="partner image"
          />
        </div>
        <div>
          <Image
            src="/assets/images/partner2.png"
            width={150}
            height={50}
            alt="partner image"
          />
        </div>
        <div>
          <Image
            src="/assets/images/partner3.svg"
            width={150}
            height={50}
            alt="partner image"
          />
        </div>
        <div>
          <Image
            src="/assets/images/partner2.png"
            width={150}
            height={50}
            alt="partner image"
          />
        </div>
        <div>
          <Image
            src="/assets/images/partner3.svg"
            width={150}
            height={50}
            alt="partner image"
          />
        </div>
      </Slider>
    </section>
  );
}

export function ThreeImageCarousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768, // Adjust breakpoint as needed for tablet screens
        settings: {
          slidesToShow: 2, // Change slidesToShow to 2 on tablet screens
        },
      },
      {
        breakpoint: 468, // Adjust breakpoint as needed for mobile screens
        settings: {
          slidesToShow: 1, // Change slidesToShow to 1 on mobile screens
        },
      },
    ],
    centerMode: true, // Enable center mode
    centerPadding: "0px", // Adjust center padding as needed
  };

  return (
    <section className="w-full border-t-2 bg-white mt-10 max-w-[1800px] mb-[60px] px-[30px] lg:px-[60px] xll:px-[120px] py-[4rem] mx-auto">
      {/* <h1 className="text-center mb-[60px] font-poppins text-[30px] xsm:text-[40px] lg:text-[55px] xll:text-[60px] font-[500] text-[#3d3d3d]">
        Our Partners
      </h1> */}
      <Slider {...settings}>
        <div>
          <Image
            src="/Globe/Globe.png"
            alt="img"
            width={500}
            height={500}
            layout="responsive"
            className="max-w-xs md:max-w-md lg:max-w-full"
          />
        </div>
        <div>
          <Image
            src="/Globe/Photo 2.jpeg"
            alt="img"
            width={500}
            height={500}
            layout="responsive"
            className="max-w-xs md:max-w-md lg:max-w-full"
          />
        </div>
        <div>
          <Image
            src="/Globe/Photo 3.jpeg"
            alt="img"
            width={500}
            height={500}
            layout="responsive"
            className="max-w-xs md:max-w-md lg:max-w-full"
          />


        </div>

        <div>
        <Image
            src="/Globe/Photo 4.jpeg"
            alt="img"
            width={500}
            height={500}
            layout="responsive"
            className="max-w-xs md:max-w-md lg:max-w-full"
          />
        </div>
      </Slider>
    </section>
  );
}
