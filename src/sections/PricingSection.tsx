import check_mark_icon from "../assets/png/check_mark_golden.png";
import SectionTitle from "../components/SectionTitle";

const plans = [
  {
    type: "INDIVIDUAL",
    title: "Pay-per-use",
    subtitle: "Perfect for individuals",
    popular: false,
    price: "",
    items: [
      "Money transfer services",
      "Online shopping access",
      "Mobile wallet",
      "Basic customer support",
      "Transaction limits apply",
    ],
    buttonColor: "bg-[#0E1A2A] text-white",
  },
  {
    type: "BUSINESS",
    title: "$50-200/mo",
    subtitle: "Ideal for small to medium businesses",
    popular: true,
    price: "",
    items: [
      "Business account",
      "Higher transaction limits",
      "Payment gateway integration",
      "Priority support",
      "Analytics dashboard",
      "Multi-user access",
    ],
    buttonColor: "bg-yellow-400 text-[#0E1A2A]",
  },
  {
    type: "ENTERPRISE/GOVERNMENT",
    title: "Custom",
    subtitle: "Tailored for large organizations",
    popular: false,
    price: "",
    items: [
      "Full platform access",
      "Custom integrations",
      "Dedicated account manager",
      "White-label solutions",
      "Training programs",
      "SLA guarantees",
    ],
    buttonColor: "bg-[#0E1A2A] text-white",
  },
];

const PricingSection = () => {
  return (
    <section className="w-full py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Badge */}

        <SectionTitle
          batchTitle="Pricing"
          title=" Choose Your Plan"
          description="Flexible pricing plans designed to meet your specific needs"
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
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`
                relative
                rounded-3xl
                border 
                ${plan.popular ? "border-yellow-400" : "border-gray-200"}
                bg-white 
                shadow-[0_4px_10px_rgba(0,0,0,0.05)]  
                p-8 
                pt-12
                flex
                flex-col
                justify-between
                transition-all
              `}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span
                    style={{
                      backgroundImage:
                        "linear-gradient(to bottom, #FFFBBA, #EAC661, #FCE99A, #FFEFA6, #C99341)",
                    }}
                    className="px-5 py-2 rounded-2xl  text-[#0E1A2A] text-xs font-normal shadow"
                  >
                    Popular
                  </span>
                </div>
              )}

              {/* Type */}
              <h4 className="text-sm tracking-wide text-gray-500 text-center">
                {plan.type}
              </h4>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-center text-[#0E1A2A] mt-2">
                {plan.title}
              </h3>

              {/* Subtitle */}
              <p className="text-center text-gray-500 mt-2">{plan.subtitle}</p>

              {/* Features */}
              <ul className="lg:mt-14 md:mt-12 mt-7 space-y-4 text-gray-700">
                {plan.items.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <div className="bg-[#fef6e7] rounded-full w-6 h-6 p-1">
                      <img src={check_mark_icon} className="" alt="" />
                    </div>
                    <span className="text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}

              <button
                style={{
                  ...(plan.popular && {
                    backgroundImage:
                      "linear-gradient(to bottom, #FFFBBA, #EAC661, #FCE99A, #FFEFA6, #C99341)",
                  }),
                }}
                className={`mt-8 w-full py-3 cursor-pointer rounded-xl font-medium ${plan.buttonColor}`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
