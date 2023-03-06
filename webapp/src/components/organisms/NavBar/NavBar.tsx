import React from "react";
import Logo from "../../../assets/logos/logo.png";
import WhiteSymbol from "../../../assets/logos/h101symbol-white.svg";
import ContrastSymbol from "../../../assets/logos/h101symbol-contrast.svg";
import { Link } from "react-router-dom";

export interface AppHeaderProps {
  navAction?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

interface Focus {
  focus: number;
}

export default function NavBar({ focus }: Focus, {}: AppHeaderProps) {
  return (
    <div>
      <div className="hidden md:flex">
        <header className="flex justify-center md:py-3">
          <Link to="/" className="w-1/6">
            <img src={Logo} alt="Health101 Services Logo" />
          </Link>
        </header>
      </div>
      <div className="flex justify-evenly bg-secondaryBlue">
        <Link className="flex w-8 h-full md:hidden py-1" to="/">
          <img
            src={focus == 0 ? ContrastSymbol : WhiteSymbol}
            alt="Health101 Services Symbol"
          />
        </Link>
        <div className="hidden md:flex md:py-3 sm:py-1">
          <Link
            className={
              focus == 0
                ? "text-lightGreen font-bold md:text-xl sm:text-lg"
                : "text-white hover:text-lightGreen font-bold md:text-xl sm:text-lg"
            }
            to="/"
          >
            Home
          </Link>
        </div>
        <div className="md:py-3 sm:py-1 py-1.5">
          <Link
            className={
              focus == 1
                ? "text-lightGreen font-bold md:text-xl sm:text-lg"
                : "text-white hover:text-lightGreen font-bold md:text-xl sm:text-lg"
            }
            to="/about"
          >
            About
          </Link>
        </div>
        <div className="md:py-3 sm:py-1 py-1.5">
          <Link
            className={
              focus == 2
                ? "text-lightGreen font-bold md:text-xl sm:text-lg"
                : "text-white hover:text-lightGreen font-bold md:text-xl sm:text-lg"
            }
            to="/contact"
          >
            Contact
          </Link>
        </div>
        <div className="md:py-3 sm:py-1 py-1.5">
          <Link
            className={
              focus == 3
                ? "text-lightGreen font-bold md:text-xl sm:text-lg"
                : "text-white hover:text-lightGreen font-bold md:text-xl sm:text-lg"
            }
            to="/services"
          >
            Services
          </Link>
        </div>
        <div className="md:py-3 sm:py-1 py-1.5">
          <Link
            className={
              focus == 4
                ? "text-lightGreen font-bold md:text-xl sm:text-lg"
                : "text-white hover:text-lightGreen font-bold md:text-xl sm:text-lg"
            }
            to="/careers"
          >
            Careers
          </Link>
        </div>
      </div>
    </div>
  );
}
