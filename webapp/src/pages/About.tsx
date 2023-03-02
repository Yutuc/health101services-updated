import React from "react";
import hero from "../assets/hero/about-hero.jpg";
import Footer from "../components/organisms/Footer";

export default function About() {
  return (
    <div className="w-full h-screen">
      <div
        className="w-full h-4/6 bg-no-repeat bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      ></div>
      <div className="flex justify-center">
        <h1 className="text-secondaryBlue font-bold md:text-4xl sm:text-3xl xs: text-2xl pl-20 pr-20 pt-10">
          Redefining healthcare workforce solutions
        </h1>
      </div>
      <div className="flex">
        <h1 className="text-secondaryBlue font-bold md:text-2xl sm:xl pl-20 pt-5">
          About Us
        </h1>
      </div>
      <div className="md:pt-5 pl-20 pr-20 pb-10 text-xl">
        <ul className="list-disc list-inside">
          <li>
            We're a group of professionals from healthcare, business, banking,
            engineering and software industries.
          </li>
          <li>
            We believe that the future of healthcare not only depends on
            disciplines related to health but a collection of knowledge and
            skills from different industries.
          </li>
          <li>
            We combined our years of experience to provide quality healthcare
            services in Winnipeg and regional areas.
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}
