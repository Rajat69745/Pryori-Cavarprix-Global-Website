import { useState } from "react";

import icon1 from "../assets/png/offer_icon_1.png";
import icon2 from "../assets/png/offer_icon_2.png";
import icon3 from "../assets/png/offer_icon_3.png";
import cart_icon from "../assets/png/cart_icon.png";

import e2 from "../assets/png/e2.png";
import e3 from "../assets/png/e3.png";

import f1 from "../assets/png/f1.png";

import f2 from "../assets/png/f2.png";
import SectionTitle from "../components/SectionTitle";

export default function ServicesSection() {
  const tabs = ["Financial Services", "E-Commerce", "Full Solution"];
  const [activeTab, setActiveTab] = useState("Financial Services");

  const financialServicesData = [
    {
      icon: icon1,
      title: "Money Transfers",
      desc: "Fast and secure international money transfers",

      items: [
        "Cross-border payments",
        "Multi-currency support",
        "Competitive exchange rates",
        "Real-time tracking",
      ],
    },
    {
      icon: icon2,
      title: "Payment Solutions",
      desc: "Flexible payment processing systems",
      items: [
        "Mobile payments",
        "Point of sale systems",
        "Online payment gateway",
        "Bill payment services",
      ],
    },
    {
      icon: icon3,
      title: "Savings & Loans",
      desc: "Secure savings and lending services",
      items: [
        "Personal savings accounts",
        "Business loans",
        "Microfinance solutions",
        "Financial planning tools",
      ],
    },
  ];

  const eCommerceServicesData = [
    {
      icon: cart_icon,
      title: "Online Shopping",
      desc: "Complete e-commerce marketplace",

      items: [
        "Wide product selection",
        "Secure checkout",
        "Multiple vendors",
        "Customer reviews",
      ],
    },
    {
      icon: e2,
      title: "Delivery Services",
      desc: "Reliable nationwide delivery",
      items: [
        "Same-day delivery options",
        "Package tracking",
        "Scheduled deliveries",
        "International shipping",
      ],
    },
    {
      icon: e3,
      title: "Logistics Support",
      desc: "End-to-end logistics management",
      items: [
        "Warehouse solutions",

        "Inventory management",
        "Supply chain optimization",
        "Last-mile delivery",
      ],
    },
  ];

  const fullSolutionsServicesData = [
    {
      icon: f1,
      title: "Platform Development",
      desc: "Custom platform solutions",

      items: [
        "E-commerce platform setup",
        "Payment integration",
        "Mobile app development",
        "Technical support",
        "Custom features",
      ],
    },
    {
      icon: f2,
      title: "Training & Support",
      desc: "Comprehensive training programs",
      items: [
        "Staff training",
        "Digital literacy programs",
        "Business consulting",
        "Ongoing support",
        "Knowledge transfer",
      ],
    },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "Financial Services":
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {/* Money Transfers */}

            {financialServicesData.map((service, idx) => (
              <div
                key={idx}
                className="rounded-2xl  p-8 bg-white border-2 border-borderColor"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 p-4 bg-gray-900 rounded-xl flex items-center justify-center text-white text-xl">
                    <img src={service.icon} alt={service.title} />
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-center mb-3">
                  {service.title}
                </h3>

                <p className="text-text-grey font-normal text-center text-sm md:mb-12 mb-5">
                  {service.desc}
                </p>

                <ul className="text-gray-500 space-y-2 text-sm">
                  {service.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-text-grey font-normal  text-sm md:mb-5 mb-3 "
                    >
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        );

      case "E-Commerce":
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {/* Money Transfers */}

            {eCommerceServicesData.map((service, idx) => (
              <div
                key={idx}
                className="rounded-2xl  p-8 bg-white border-2 border-borderColor"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 p-4 bg-gray-900 rounded-xl flex items-center justify-center text-white text-xl">
                    <img src={service.icon} alt={service.title} />
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-center mb-3">
                  {service.title}
                </h3>

                <p className="text-text-grey font-normal text-center text-sm md:mb-12 mb-5">
                  {service.desc}
                </p>

                <ul className="text-gray-500 space-y-2 text-sm">
                  {service.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-text-grey font-normal  text-sm md:mb-5 mb-3 "
                    >
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        );

      case "Full Solution":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {/* Money Transfers */}

            {fullSolutionsServicesData.map((service, idx) => (
              <div
                key={idx}
                className="rounded-2xl  p-8 bg-white border-2 border-borderColor"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 p-4 bg-gray-900 rounded-xl flex items-center justify-center text-white text-xl">
                    <img src={service.icon} alt={service.title} />
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-center mb-3">
                  {service.title}
                </h3>

                <p className="text-text-grey font-normal text-center text-sm md:mb-12 mb-5">
                  {service.desc}
                </p>

                <ul className="text-gray-500 space-y-2 text-sm">
                  {service.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-text-grey font-normal  text-sm md:mb-5 mb-3 "
                    >
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="w-full py-20 bg-linear-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}

        <SectionTitle
          batchTitle=" Services"
          title="What We Offer"
          description=" Comprehensive solutions tailored to meet the needs of individuals,
            businesses, and governments."
        />

        {/* Tabs */}
        <div className="flex justify-center mt-10">
          <div className="flex   rounded-full p-1 bg-[#f5f8fb] w-full justify-between">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`px-6 py-2 text-sm rounded-full transition-all w-full cursor-pointer
                ${
                  activeTab === tab
                    ? "bg-white text-black font-medium "
                    : "text-gray-600 hover:bg-gray-200"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        {renderContent()}
      </div>
    </section>
  );
}
