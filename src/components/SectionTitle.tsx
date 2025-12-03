import React from "react";

interface SectionTitleProps {
  title: string;
  description: string;
  batchTitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  batchTitle,
  title,
  description,
}) => {
  return (
    <div className="text-center flex flex-col justify-center items-center">
      <div
        className="
      
      
      inline-block p-0.5 rounded-full
    
          bg-[linear-gradient(to_right,#DDB255,#DDB255,#DDB255,#6A4B26,#DDB255,#C99341)]

      
      "
      >
        <button className="px-6 py-1 bg-[#fef6e6] rounded-full text-black font-medium">
          {batchTitle}
        </button>
      </div>

      <h2 className="text-4xl xl:text-5xl font-bold md:mt-5  mt-4 font-krona">
        {title}
      </h2>

      <p className="text-gray-500 mt-5 max-w-2xl mx-auto">{description}</p>
    </div>
  );
};

export default SectionTitle;
