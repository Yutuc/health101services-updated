import React from "react";
import Logo from "../../../assets/logos/logo.png";
import { Link } from "react-router-dom";
export interface AppHeaderProps {
  navAction?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function NavBar({}: AppHeaderProps) {
  return (
    <div>
      <header className="flex justify-center mt-3 mb-3">
        <Link to="/" className="w-1/6">
          <img src={Logo} alt="Health101 Services Logo" />
        </Link>
      </header>
      <div className="flex justify-evenly bg-secondaryBlue p-5">
        <Link
          className="text-white font-bold sm:xl md:text-2xl align-middle hover:underline"
          to="/"
        >
          Home
        </Link>
        <Link
          className="text-white font-bold sm:xl md:text-2xl align-middle hover:underline"
          to="/about"
        >
          About
        </Link>
        <Link
          className="text-white font-bold sm:xl md:text-2xl align-middle hover:underline"
          to="/contact"
        >
          Contact
        </Link>
        <Link
          className="text-white font-bold sm:xl md:text-2xl align-middle hover:underline"
          to="/services"
        >
          Services
        </Link>
        <Link
          className="text-white font-bold sm:xl md:text-2xl align-middle hover:underline"
          to="/careers"
        >
          Careers
        </Link>
      </div>
    </div>
  );
}
