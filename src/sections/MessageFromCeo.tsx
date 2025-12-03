import { Users } from "lucide-react";

const MessageFromCEO = () => {
  return (
    <section
      className="

lg:mx-15 md:mx-12 sm:mx-8 mx-4 

        bg-white
        rounded-3xl
        overflow-hidden

        border-2 border-borderColor
      "
    >
      <div
        className="
flex

xl:flex-row    
flex-col
        "
      >
        {/* LEFT SIDE */}
        <div
          className="
            bg-[#0E1A2A]
            text-white
            flex
            flex-col
            items-center
            justify-center
            p-10
            xl:w-[70%]
            lg:p-14
            xl:p-20
          "
        >
          {/* Icon */}
          <div className="w-32 h-32 rounded-full  border-[#596170] flex items-center border-4 justify-center bg-[#313c4d]">
            <Users className="w-20 h-20 text-gray-300" />
          </div>

          {/* Name */}
          <h2 className="text-sm lg:text-base xl:text-lg font-normal mt-6 text-center">
            Pascal Patrick AICHEDJI
          </h2>

          {/* Role */}
          <p className="text-sm  text-text-grey mt-2">
            Chief Executive Officer
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="p-8 md:p-12 lg:p-14 xl:p-20 w-full ">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-normal text-[#0E1A2A] mb-6">
            Message from Our CEO
          </h1>

          <div className="text-text-grey space-y-6 leading-relaxed text-base md:text-lg border-b border-gray-200 pb-6">
            <p>
              "At PRYORY-CAVARPRIX GLOBAL, we believe in the power of innovation
              and partnership to transform lives and businesses. Our commitment
              is to deliver world-class financial services and e-commerce
              solutions that are accessible, reliable, and tailored to the
              unique needs of our clients."
            </p>

            <p>
              "Through strategic collaborations and cutting-edge technology, we
              are building a future where financial inclusion and digital
              commerce are not just aspirations, but realities for everyone we
              serve."
            </p>
          </div>

          {/* Bottom yellow underline */}
          <div className="mt-10">
            <div className="w-20 h-1 bg-yellow-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageFromCEO;
