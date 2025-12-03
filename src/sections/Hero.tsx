import type { FC } from "react";

const Hero: FC = () => {
  return (
    <section className="w-full bg-linear-to-r from-[#1b2335] to-[#20293c] text-white   lg:px-8 md:px-6">
      {/* TODO: implement exact hero layout matching design */}
      <div className=" flex lg:px-8 md:px-6  flex-col gap-10 px-4 pb-16 pt-10 sm:px-6 lg:flex-row lg:items-center lg:pb-24 lg:pt-16 xl:px-0">
        <div className="flex-1 space-y-6">
          <div className=" flex  lg:px-8 md:px-6 items-center gap-2 rounded-full bg-[#414757] px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] border-2px border-[#5b616e] w-fit ring-1 ring-slate-700/80">
            <span className="h-1.5 w-1.5 rounded-full bg-accent " />
            <span className="md:text-[12px] font-medium text-[6px]">
              Trusted by businesses across multiple countries
            </span>
          </div>
          <h1 className="text-3xl font-extrabold leading-tight sm:text-5xl md:text-6xl md:leading-[1.1] font-krona">
            Leading Financial
            <br />
            Services &amp; E-Commerce <br /> Platform
          </h1>
          <p className="max-w-xl text-sm text-[#d2d3d7] sm:text-base">
            Providing comprehensive financial services and e-commerce solutions
            through innovative technology and strategic partnerships.
          </p>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <button className=" rounded-xl md:rounded-2xl cursor-pointer bg-accent md:py-4  py-3 md:w-36 w-30  text-sm font-medium text-slate-900 shadow-md  transition hover:bg-amber-300 sm:px-6 sm:text-base">
              Get In Touch
            </button>
            <button className="rounded-xl md:rounded-2xl cursor-pointer bg-[#33394a] md:py-4  py-3 md:w-36 w-30 text-sm font-medium sm:px-6 sm:text-base">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
