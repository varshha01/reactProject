import React from "react";
import slack from "../assets/slack.png";
import amazon from "../assets/amazon.png";
import woocommerce from "../assets/woocommerce.png";
import meundies from "../assets/meundies.png";
import sitepoint from "../assets/sitepoint.png";

const Logo_animate = () => {
  const logos = [slack, amazon, woocommerce, meundies, sitepoint];
  return (
    <div className="container overflow-hidden w-full mx-auto py-20 gap-8 flex flex-col md:flex-row sm:items-center items-start">
      <div className="w-[300px] shrink-0 text-gray-700 border-l-4 border-blue-500 bg-white py-2 px-5  z-10 text-xl sm:text-base font-semibold text-left">
        Proud partner at <br /> Hubspot & Segment
      </div>

      <div className="flex animate-marquee  whitespace-nowrap ">
        {/* Logo animation section */}
        {logos.map((logo, index) => (
          <img
            src={logo}
            key={index}
            alt="company logo"
            className="mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all "
          />
        ))}
        {/* duplicate logos */}
        {logos.map((logo, index) => (
          <img
            src={logo}
            key={`duplicate=${index}`}
            alt="company logo"
            className="mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all "
          />
        ))}
      </div>
    </div>
  );
};

export default Logo_animate;
