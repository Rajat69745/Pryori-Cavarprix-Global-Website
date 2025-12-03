import type { FC } from "react";

const plans = [
  {
    name: "Launch",
    price: "$2,000/mo",
    description: "For early-stage teams piloting new financial products.",
    highlighted: false,
  },
  {
    name: "Scale",
    price: "$6,500/mo",
    description: "For institutions running multi-market operations at volume.",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Talk to us",
    description: "For regulated entities with bespoke risk and control needs.",
    highlighted: false,
  },
];

const Plans: FC = () => {
  return (
    <section className="bg-white py-10 text-slate-900 sm:py-14">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-0">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-amber-500">
            <span className="h-px w-8 bg-amber-400" />
            <span>Choose Your Plan</span>
          </div>
          <h2 className="mt-3 text-lg font-extrabold sm:text-xl">
            Pricing aligned with how you scale.
          </h2>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-2xl border px-4 py-6 text-left shadow-[0_16px_40px_rgba(15,23,42,0.06)] ${
                plan.highlighted
                  ? "border-amber-300 bg-amber-50"
                  : "border-slate-100 bg-white"
              }`}
            >
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                {plan.name}
              </div>
              <div className="mt-3 text-lg font-extrabold text-slate-900">
                {plan.price}
              </div>
              <p className="mt-2 flex-1 text-xs text-slate-600 sm:text-[13px]">
                {plan.description}
              </p>
              <button
                className={`mt-4 w-full rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] transition ${
                  plan.highlighted
                    ? "bg-slate-900 text-amber-300 hover:bg-slate-800"
                    : "border border-slate-200 text-slate-800 hover:border-slate-300"
                }`}
              >
                {plan.highlighted ? "Get Started" : "Talk to Sales"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
