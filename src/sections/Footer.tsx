import type { FC } from "react";

import applogo from "../assets/png/applogo.png";

const Footer: FC = () => {
  return (
    <footer className="border-t border-slate-800/70 bg-[radial-gradient(circle_at_top_left,#0f172a,#020617_55%,#020617)] py-10 text-xs text-slate-200 sm:py-12">
      <div className="  px-4 sm:px-6 lg:px-8 ">
        <div className="grid gap-10  md:grid-cols-2 lg:grid-cols-4  ">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 ">
                <img src={applogo} alt="App Logo" />
              </div>
              <div className="text-sm  leading-tight text-white font-base font-normal">
                <div>PRVORI</div>
                <div>CAVARPRIX</div>
                <div>GLOBAL</div>
              </div>
            </div>
            <p className="max-w-xs text-[11px] text-[#9fa2aa]">
              Leading financial services and e-commerce platform operating
              internationally.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white">Quick Links</h3>
            <ul className="space-y-1 text-[11px] text-[#9fa2aa]">
              <li>About Us</li>
              <li>Financial Services</li>
              <li>E-Commerce</li>
              <li>Partnerships</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white">Contact</h3>
            <ul className="space-y-1 text-[11px] text-[#9fa2aa]">
              <li>cavarprixgroup@gmail.com</li>
              <li>Ghana: +233 50 297 8000</li>
              <li>Benin: +229 01 577 47574</li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white font-roboto">
              Business Hours
            </h3>
            <ul className="space-y-1 text-[11px] text-[#9fa2aa]">
              <li>Mon-Fri: 8:00 AM - 6:00 PM</li>
              <li>Saturday: 9:00 AM - 3:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 h-px w-full bg-slate-800" />

        <div className="mt-8 text-center text-sm font-normal leading-relaxed text-[#898d98]">
          <div>Old Road // Monrovia</div>
          <div>Tél.: +231 774221232 / +231 774212333</div>
          <div>Email: pryoricavarprixgloballtd@gmail.com</div>
          <div>secretariatcommercial@pryoricavarprixglobal.com</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
