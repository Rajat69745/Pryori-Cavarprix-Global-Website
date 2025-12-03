import icon from "../assets/png/st_partner.png";
import check_mark_icon from "../assets/png/check_mark.png";
import SectionTitle from "../components/SectionTitle";

const partners = [
  {
    title: "WALTERGATES GH LTD",
    items: [
      "E-commerce platform development",
      "Payment system integration",
      "Technology infrastructure",
      "Digital solutions",
    ],
  },
  {
    title: "IYAP GLOBAL",
    items: [
      "International network",
      "Cross-border operations",
      "Market expansion support",
      "Global partnerships",
    ],
  },
  {
    title: "IYAP LIQUID CASH SERVICES",
    items: [
      "Cash management solutions",
      "Financial services",
      "Liquidity management",
      "Transaction processing",
    ],
  },
];

const StrategicPartners = () => {
  return (
    <section className="w-full py-16 md:py-20 lg:py-24 bg-linear-to-b from-[#fbfcfd] to-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Small Label */}

        <SectionTitle
          batchTitle="Partnerships"
          title="Partnership Framework"
          description="A collaborative approach for successful implementation"
        />

        {/* Cards Grid */}
        <div
          className="
            grid 
            grid-cols-1 
            md:grid-cols-2 
            lg:grid-cols-3 
            gap-8

            lg:mt-20
            md:mt-15
            mt-10
          "
        >
          {partners.map((p, idx) => (
            <div
              key={idx}
              className="
                bg-white 
                rounded-2xl 
                p-8 

                border-2 border-borderColor
                hover:shadow-lg
                transition-all
              "
            >
              {/* Top Icon */}
              <div className="flex justify-center mb-5">
                <div
                  className=" w-16 h-16 rounded-xl p-5 flex items-center justify-center shadow-md"
                  style={{
                    backgroundImage:
                      "linear-gradient(to bottom, #FFFBBA, #EAC661, #FCE99A, #FFEFA6, #C99341)",
                  }}
                >
                  <img src={icon} w-10 h-10 alt="" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-normal text-center text-[#0E1A2A] mb-6 lg:mt-7 md:mt-6 mt-5">
                {p.title}
              </h3>

              {/* List */}
              <ul className="space-y-3 lg:mt-12 md:mt-10 mt-8">
                {p.items.map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className="bg-[#fef6e7] rounded-full w-6 h-6 p-2">
                      <img src={check_mark_icon} className="" alt="" />
                    </div>
                    <span className="text-gray-700 text-sm md:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategicPartners;
