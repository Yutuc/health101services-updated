import React from "react";
import hero from "../assets/hero/contact-hero.jpg";
import EmailForm from "../components/organisms/EmailForm";
import Footer from "../components/organisms/Footer";
import { Transition } from "@headlessui/react";

export default function Contact() {
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
            We're here to help
          </h1>
        </div>
        <div className="pt-5 px-10 pb-5 text-xl">
          <ul className="list-none list-inside ">
            <li>
              Thank you for your interest in Health 101 Services. If you would
              like to contact us, please feel free to send an email to
              admin@health101services.ca and we will get back to you as soon as
              possible. You can also call us anytime at (204) 880-1009 or fill
              out the form below. We look forward to helping you and your family
              receive the support and care you need.
            </li>
          </ul>
        </div>
        <EmailForm />
        <Footer />
      </div>
    </Transition>
  );
}
