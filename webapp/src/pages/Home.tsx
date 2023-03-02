import React from "react";
import hero from "../assets/hero/home-hero.jpg";
import Footer from "../components/organisms/Footer";

export default function Home() {
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
          Welcome to Health 101 Services
        </h1>
      </div>
      <div className="pt-10 pl-20 pr-20 pb-10 text-xl">
        <ul className="list-disc font-mono">
          <li>
            Health 101 Services has earned its reputation by building solid
            relationships with clients, staff and their families. Health 101
            provides basic healthcare for home and institutions in Winnipeg and
            nearby regional areas. We provide quality care by providing
            healthcare aides, registered nurses, licensed practical nurses, and
            home care support workers.
          </li>
          <li>
            Health 101 Services is established with the objective of providing
            home care with dignity, comfort, compassion, integrity and trust. At
            Health 101 Services, our aim is to provide the very best in health
            care service.
          </li>
          <li>
            We work closely with clients, their families, government and health
            care professionals.
          </li>
          <li>
            To learn more about our services, contact us so we can find
            specialized ways to provide care for your loved ones.
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}
