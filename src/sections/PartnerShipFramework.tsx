import React from "react";

import icon1 from "../assets/png/pf1.png";
import icon2 from "../assets/png/pf2.png";
import icon3 from "../assets/png/pf3.png";
import icon4 from "../assets/png/pf4.png";
import icon5 from "../assets/png/pf5.png";
import icon6 from "../assets/png/pf6.png";
import icon7 from "../assets/png/pf7.png";
import SectionTitle from "../components/SectionTitle";

const FeatureItem: React.FC<{
  title: string;
  subtitle: string;
  icon: string;
  bgColor: string;
}> = ({ title, subtitle, icon, bgColor }) => {
  return (
    <div className="flex gap-4 items-start py-4">
      <div
        className={`rounded-xl w-12 h-12 p-3 bg-[${bgColor}] grid place-items-center shadow-sm`}
      >
        <img src={icon} alt={title} w-6 h-6 />
      </div>
      <div>
        <div className="text-textBlack font-semibold">{title}</div>
        <div className="text-sm text-gray-500">{subtitle}</div>
      </div>
    </div>
  );
};

export default function ParterShipFramework() {
  return (
    <section className="px-4 md:px-8 py-20 bg-linear-to-b from-[#fbfcfd] to-white lg:mt-65 md:mt-60 mt-50">
      {/* badge */}

      <SectionTitle
        batchTitle="Collaboration Model"
        title="Partnership Framework"
        description="A collaborative approach for successful implementation"
      />

      {/* cards */}
      <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2">
        {/* Left card - dark header */}
        <div className="rounded-2xl overflow-hidden  border-2 border-[#E2E8F0]">
          <div className="bg-linear-to-b from-slate-900 to-slate-800 text-white px-8 py-10 rounded-t-2xl text-center">
            <h3 className="text-2xl font-semibold tracking-wide">
              PRYORY-CAVARPRIX GLOBAL
            </h3>
            <p className="mt-2 md:mt-4 text-sm text-slate-300">
              Our Responsibilities
            </p>
          </div>

          <div className="bg-white p-8 rounded-b-2xl">
            <FeatureItem
              bgColor="#fef6e7"
              icon={icon1}
              title="Platform Development"
              subtitle="Complete platform development and deployment"
            />

            <FeatureItem
              bgColor="#fef6e7"
              icon={icon2}
              title="Logistics Infrastructure"
              subtitle="End-to-end logistics and management"
            />

            <FeatureItem
              bgColor="#fef6e7"
              icon={icon3}
              title="Financial Services"
              subtitle="Payment systems and financial solutions"
            />

            <FeatureItem
              bgColor="#fef6e7"
              icon={icon4}
              title="Training Programs"
              subtitle="Comprehensive capacity building"
            />
          </div>
        </div>

        {/* Right card - gold header */}
        <div className="rounded-2xl border-2 border-[#E2E8F0] ">
          <div
            className=" px-8 py-10 rounded-t-2xl text-center "
            style={{
              backgroundImage:
                "linear-gradient(to bottom, #FFFBBA, #EAC661, #FCE99A, #FFEFA6, #C99341)",
            }}
          >
            <h3 className="md:text-2xl text-xl font-semibold text-textBlack">
              Ministry
            </h3>
            <p className="mt-2 md:mt-3 lg:mt-4 text-sm text-gray-600">
              Government Responsibilities
            </p>
          </div>

          <div className="bg-white p-8 rounded-b-2xl">
            <FeatureItem
              bgColor="#e2e8f0"
              icon={icon5}
              title="Training Programs"
              subtitle="Comprehensive capacity building"
            />

            <FeatureItem
              bgColor="#e7e8ea"
              icon={icon6}
              title="Regulatory Framework"
              subtitle="Policy support and compliance"
            />

            <FeatureItem
              bgColor="#e7e8ea"
              icon={icon4}
              title="Human Resources"
              subtitle="Stakeholder coordination"
            />

            <FeatureItem
              bgColor="#e2e8f0"
              icon={icon7}
              title="Partnership Facilitation"
              subtitle="Government backing and support"
            />
          </div>
        </div>
      </div>

      {/* polishing spacing for very large screens */}
      <div className="h-6" />
    </section>
  );
}
