import icon1 from "../assets/png/offer_icon_1.png";
import icon2 from "../assets/png/offer_icon_2.png";
import icon3 from "../assets/png/offer_icon_3.png";
import SectionTitle from "../components/SectionTitle";

export default function PrayoryGlobalSection() {
  const financialServicesData = [
    {
      icon: icon1,
      title: "Proven Track Record",
      desc: "Years of experience delivering reliable financial services and e-commerce solutions to clients worldwide.",
    },
    {
      icon: icon2,
      title: "Comprehensive Platform",
      desc: "Integrated solutions combining financial services, e-commerce, logistics, and training in one platform.",
    },
    {
      icon: icon3,
      title: "Strategic Partnerships",
      desc: "Collaboration with leading organizations to deliver exceptional value and expand our global reach.",
    },
  ];

  const renderContent = () => {
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
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="w-full py-20 bg-linear-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}

        <SectionTitle
          batchTitle="Services"
          title="PRYORY-CAVARPRIX GLOBAL"
          description="Comprehensive solutions tailored to meet the needs of individuals, businesses, and governments."
        />

        {/* Tabs */}

        {/* Content */}
        {renderContent()}
      </div>
    </section>
  );
}
