import React from "react";
import hero from "../assets/hero/services-hero.jpg";
import Footer from "../components/organisms/Footer";

export default function Services() {
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
          We're here for your healthcare needs
        </h1>
      </div>
      <div className="flex justify-center">
        <h2 className="font-mono text-3xl pl-20 pr-20 pt-5">
          Health 101 Services is here to assist you in planning your health care
          needs and help you or your loved ones adjust to new surroundings.
        </h2>
      </div>
      <div className="pt-5 pl-20 pr-20 pb-10 text-xl">
        <ul className="list-disc list-inside font-mono">
          <div className="flex pb-5">
            <h2 className="font-mono text-3xl pt-5">
              Our healthcare staff includes:
            </h2>
          </div>
          <li>Certified Health Care Aids</li>
          <li>Home Support workers</li>
          <li>Homemakers</li>
          <li>Companions</li>
          <li>Registered Nurses (RN)</li>
          <li>License Practical Nurses (LPN)</li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}
