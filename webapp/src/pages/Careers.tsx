import React from "react";
import hero from "../assets/hero/careers-hero.jpg";
import Footer from "../components/organisms/Footer";

export default function Careers() {
  return (
    <div className="w-full h-screen">
      <div
        className="w-full h-4/6 bg-no-repeat bg-cover bg-fixed"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      ></div>
      <div className="flex justify-center">
        <h1 className="font-mono text-4xl pt-10">Driving careers forward</h1>
      </div>
      <div className="flex">
        <h1 className="font-mono text-3xl pl-20 pt-10">
          Serving Businesses & Job Seekers
        </h1>
      </div>
      <div className="flex">
        <h1 className="font-mono text-2xl pl-20 pt-10">Work for us</h1>
      </div>
      <div className="flex">
        <p className="font-mono text-2xl pl-20 pt-5">
          Health 101 Services continuously searches for talented and skilled
          healthcare professionals. We are looking for experienced and licensed
          healthcare and homecare staff. If you are interested in pursuing a
          career of caring as part of a high quality, teamwork-oriented
          atmosphere. Please contact us.
        </p>
      </div>
      <div>
        <p className="font-mono text-2xl pl-20 p-5">
          We are hiring for positions in Manitoba, Canada. For more information,
          or to apply for a position, please email your resume and diploma or
          certificate to admin@health101services.ca ​
        </p>
      </div>
      <div className="pt-5 pl-20 pr-20 pb-10 text-xl">
        <ul className="list-disc list-inside font-mono">
          <div className="flex pb-5">
            <h2 className="font-mono text-3xl pt-5">
              Health 101 Services staff are:
            </h2>
          </div>
          <li>Selected for their knowledge and for their people skills.</li>
          <li>
            High level of professionalism and expertise in their respective
            fields.
          </li>
          <li>Screened and background references checked thoroughly.</li>
          <li>
            Undergo police criminal record check, child abuse registry check,
            and adult abuse registry check.
          </li>
        </ul>
      </div>
      <div className="pt-5 pl-20 pr-20 pb-10 text-xl">
        <ul className="list-disc list-inside font-mono">
          <div className="flex pb-5">
            <h2 className="font-mono text-3xl pt-5">
              Some of the positions we're hiring include:
            </h2>
          </div>
          <li>Registered Nurse (RN)</li>
          <li>Licensed Practical Nurse (LPN)</li>
          <li>Health Care Aide</li>
          <li>Home Support Worker</li>
          <li>Homemaker</li>
          <li>Companion</li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}
