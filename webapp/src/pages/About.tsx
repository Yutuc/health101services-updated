import React from "react";
import hero from "../assets/hero/about-hero.jpg";
import Footer from "../components/organisms/Footer";

export default function About() {
  return (
    <div className="w-full h-screen">
      <div
        className="w-full h-4/6 bg-no-repeat bg-cover bg-fixed"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      ></div>
      <div className="flex justify-center">
        <h1 className="font-mono text-4xl pt-10">
          Redefining healthcare workforce solutions
        </h1>
      </div>
      <div className="pt-10 pl-20 pr-20 pb-10 text-xl">
        <ul className="list-disc font-mono">
          <li>
            We are a group of professionals from healthcare, business, banking,
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
