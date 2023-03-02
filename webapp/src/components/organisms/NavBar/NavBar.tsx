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
        <Link to="/" className="w-1/6 md:w-1/6">
          <img src={Logo} alt="Thermonalysis Logo" />
        </Link>
      </header>
      <div className="flex justify-evenly">
        <Link className="font-mono text-2xl hover:underline" to="/">
          Home
        </Link>
        <Link className="font-mono text-2xl hover:underline" to="/about">
          About
        </Link>
        <Link className="font-mono text-2xl hover:underline" to="/contact">
          Contact
        </Link>
        <Link className="font-mono text-2xl hover:underline" to="/services">
          Services
        </Link>
        <Link className="font-mono text-2xl hover:underline" to="/careers">
          Careers
        </Link>
      </div>
    </div>
  );
}
