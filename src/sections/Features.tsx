import { TrendingUp, Users, Award } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <TrendingUp className="w-7 h-7 text-black" />,
      title: "Multiple",
      subtitle: "Countries Served",
    },
    {
      icon: <Users className="w-7 h-7 text-black" />,
      title: "Trusted",
      subtitle: "By Thousands",
    },
    {
      icon: <Award className="w-7 h-7 text-black" />,
      title: "Excellence",
      subtitle: "In Service Delivery",
    },
  ];

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-16">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col items-center space-y-4">
              {/* Icon Box */}
              <div className="w-16 h-16 bg-[#FFF4E6] rounded-2xl flex items-center justify-center ">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-3xl md:text-4xl font-semibold text-gray-900">
                {item.title}
              </h3>

              {/* Subtitle */}
              <p className="text-gray-500 text-lg md:text-base">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
