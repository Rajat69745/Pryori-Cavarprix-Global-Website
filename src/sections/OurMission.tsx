import { Target } from "lucide-react";

export default function OurMission() {
  return (
    <section className="w-full py-24 bg-white mx-4">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Icon */}
        <div className="flex justify-center">
          <div
            style={{
              backgroundImage:
                "linear-gradient(to bottom, #FFFBBA, #EAC661, #FCE99A, #FFEFA6, #C99341)",
            }}
            className="w-20 h-20   rounded-2xl
                          shadow-md flex items-center justify-center"
          >
            <Target className="w-10 h-10 text-black" />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mt-8 font-krona">
          Our Mission
        </h2>

        {/* Paragraph */}
        <p className="text-gray-500 mt-6 font-normal leading-relaxed md:text-lg  text-sm">
          To bridge traditional financial systems with modern digital commerce,
          empowering individuals and businesses across Africa and beyond with
          innovative, accessible, and comprehensive solutions. We are committed
          to fostering economic growth through technology-driven platforms that
          make financial services and e-commerce seamless, secure, and inclusive
          for all.
        </p>
      </div>
    </section>
  );
}
