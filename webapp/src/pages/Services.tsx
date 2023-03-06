import React from "react";
import hero from "../assets/hero/services-hero.jpg";
import Footer from "../components/organisms/Footer";
import { Transition } from "@headlessui/react";

export default function Services() {
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
          className="w-full h-4/6 bg-cover bg-center"
          style={{
            backgroundImage: `url(${hero})`,
          }}
        ></div>
        <div className="flex justify-center md:text-3xl sm: text-xl">
          <h1 className="text-secondaryBlue font-bold pt-5">
            We're here for your healthcare needs
          </h1>
        </div>
        <div className="flex">
          <h2 className="py-5 md:px-10 sm: px-5 text-xl">
            Health 101 Services is here to assist you in planning your health
            care needs and help you or your loved ones adjust to new
            surroundings.
          </h2>
        </div>
        <div className="md:px-10 sm: px-5 pb-10 text-xl">
          <div className="flex md:text-3xl sm: text-xl">
            <h1 className="text-secondaryBlue font-bold">
              Our healthcare staff includes
            </h1>
          </div>
          <ul className="list-disc list-inside">
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
    </Transition>
  );
}
