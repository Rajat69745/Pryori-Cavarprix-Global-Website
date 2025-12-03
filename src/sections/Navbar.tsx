import { useState } from "react";
import { Menu, X } from "lucide-react";

import applogo from "../assets/png/applogo.png";
export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Logo + Company Name */}
        <div className="flex items-center gap-2">
          <div className="w-14 h-14 ">
            <img src={applogo} alt="App Logo" />
          </div>
          <span className="font-semibold md:text-lg text-base font-krona">
            PRYORI CAVARPRIX GLOBAL
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8 text-gray-600">
          <a href="#" className="hover:text-black">
            About
          </a>
          <a href="#" className="hover:text-black">
            Services
          </a>
          <a href="#" className="hover:text-black">
            Pricing
          </a>
          <a href="#" className="hover:text-black">
            Partnerships
          </a>
          <button className="px-4 py-2 rounded-full bg-[#0d1321] text-white cursor-pointer">
            Contact
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button className="lg:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="lg:hidden flex flex-col gap-4 px-6 pb-6 text-gray-700 bg-white ">
          <a href="#" className="hover:text-black">
            About
          </a>
          <a href="#" className="hover:text-black">
            Services
          </a>
          <a href="#" className="hover:text-black">
            Pricing
          </a>
          <a href="#" className="hover:text-black">
            Partnerships
          </a>
          <button className="px-4 py-2 rounded-full bg-[#0d1321] text-white w-max">
            Contact
          </button>
        </div>
      )}
    </nav>
  );
}
