import React from "react";
import hero from "../assets/hero/about-hero.jpg";
import Footer from "../components/organisms/Footer";
import { Transition } from "@headlessui/react";

export default function About() {
  return (
    <Transition
      as="div"
      appear={true}
      show={true}
      enter="transition-opacity duration-2000"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-2000"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      className="flex w-full-h-screen"
    >
      <div className="w-full h-screen">
        <div
          className="w-full h-2/6 md:h-4/6 bg-cover bg-center"
          style={{
            backgroundImage: `url(${hero})`,
          }}
        ></div>
        <div className="flex justify-center md:text-3xl sm: text-xl">
          <h1 className="text-secondaryBlue font-bold pt-5">
            Redefining healthcare workforce solutions
          </h1>
        </div>
        <div className="flex md:px-10 sm: px-10">
          <h1 className="text-secondaryBlue font-bold md:text-2xl sm:xl pt-5">
            About Us
          </h1>
        </div>
        <div className=" px-10 pb-5 text-xl">
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
    </Transition>
  );
}
