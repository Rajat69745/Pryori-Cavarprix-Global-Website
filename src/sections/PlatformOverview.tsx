import type { FC } from "react";

const cards = [
  {
    title: "Payments",
    body: "Unified rails for domestic and cross-border transactions with smart routing.",
  },
  {
    title: "Treasury",
    body: "Cash visibility, liquidity management, and automated reconciliation.",
  },
  {
    title: "Commerce",
    body: "Embedded checkout, invoicing, and settlement for global merchants.",
  },
];

const PlatformOverview: FC = () => {
  return (
    <section className="bg-white py-12 text-slate-900 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-0">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-amber-500">
            <span className="h-px w-8 bg-amber-400" />
            <span>Platform</span>
          </div>
          <h2 className="mt-3 text-xl font-extrabold sm:text-2xl">
            PRYORI™ CAVARPRIX GLOBAL
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-xs text-slate-500 sm:text-sm">
            A modular stack designed to power mission-critical financial
            workflows, from high-volume payments to embedded commerce
            experiences.
          </p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-slate-100 bg-white px-4 py-5 text-left shadow-[0_16px_40px_rgba(15,23,42,0.06)]"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                {card.title}
              </div>
              <p className="mt-2 text-xs text-slate-600 sm:text-[13px]">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformOverview;
