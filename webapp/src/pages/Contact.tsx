import React from "react";
import hero from "../assets/hero/contact-hero.jpg";
import Footer from "../components/organisms/Footer";

export default function Contact() {
  return (
    <div className="w-full h-screen">
      <div
        className="w-full h-4/6 bg-no-repeat bg-cover bg-fixed"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      ></div>
      <div className="flex justify-center">
        <h1 className="font-mono text-4xl pt-10">We're here to help</h1>
      </div>
      <div className="pt-10 pl-20 pr-20 pb-10 text-xl">
        <ul className="list-none font-mono">
          <li>
            Thank you for your interest in Health 101 Services. If you would
            like to contact us, please feel free to send an email to
            admin@health101services.ca and we will get back to you as soon as
            possible. You can also call us anytime at (204) 880-1009 or fill out
            the form below. We look forward to helping you and your family
            receive the support and care you need.
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}
