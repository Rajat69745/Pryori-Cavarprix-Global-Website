import type { FC } from "react";
import { Mail, Phone } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

const Contact: FC = () => {
  return (
    <section className="bg-white py-14 text-slate-900 sm:py-16">
      <div className="lg:mx-15  md:mx-12 sm:mx-8 mx-4 px-4 sm:px-6 lg:px-0">
        <SectionTitle
          batchTitle="Contact"
          title="Get in Touch"
          description="Ready to partner with us? Contact our team today."
        />

        <div className="mt-10 rounded-3xl border-2 border-[#E2E8F0] bg-white px-4 py-6  sm:px-8 sm:py-8">
          <div className="grid gap-8 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
            {/* Left: contacts */}
            <div className="space-y-6 text-sm text-slate-700">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-[0_12px_30px_rgba(15,23,42,0.35)]">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm md:text-lg  text-textBlack font-normal">
                    Email
                  </div>
                  <div className="text-sm text-text-grey font-normal">
                    cavarprixgroup@gmail.com
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-[0_12px_30px_rgba(15,23,42,0.35)]">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm md:text-lg  text-textBlack font-normal">
                    Ghana Office
                  </div>

                  <div className="text-sm text-text-grey font-normal">
                    +233 50 297 8000
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-[0_12px_30px_rgba(15,23,42,0.35)]">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm md:text-lg  text-textBlack font-normal">
                    Benin Office
                  </div>

                  <div className="text-sm text-text-grey font-normal">
                    +229 01 577 47574
                  </div>
                </div>
              </div>
            </div>

            {/* Right: hours + buttons */}
            <div className="flex flex-col justify-between  text-sm text-slate-600">
              <div>
                <h3 className="text-lg  font-normal text-slate-900">
                  Business Hours
                </h3>
                <div className="mt-4 md:mt-9 space-y-3 text-sm md:text-base text-text-grey font-normal">
                  <div className="flex items-center justify-between gap-4 border-b border-borderColor  pb-3 md:mt-6 mt-4">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>

                  <div className="flex items-center justify-between gap-4 border-b border-borderColor  pb-3 md:mt-6 mt-4">
                    <span>Saturday</span>
                    <span>9:00 AM - 3:00 PM</span>
                  </div>

                  <div className="flex items-center justify-between gap-4 border-b border-borderColor pb-3 md:mt-6 mt-4">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>

              <div className="md:mt-6 mt-4 flex flex-col gap-4">
                <button
                  style={{
                    backgroundImage:
                      "linear-gradient(to bottom, #FFFBBA, #EAC661, #FCE99A, #FFEFA6, #C99341)",
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded-xl p-5 cursor-pointer text-xs font-semibold tracking-[0.22em] text-slate-900  transition hover:bg-amber-200"
                >
                  <Mail className="h-4 w-4" />
                  <span className="uppercase">Email Partnership Inquiry</span>
                </button>
                <button className=" cursor-pointer flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 p-5 text-xs font-semibold tracking-[0.22em] text-white  transition hover:bg-slate-800 active:scale-98">
                  <Phone className="h-4 w-4" />
                  <span className="uppercase text-sm">Call Ghana Office</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
