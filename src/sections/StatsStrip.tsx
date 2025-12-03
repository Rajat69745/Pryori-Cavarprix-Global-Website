import type { FC } from "react";

const items = [
  {
    label: "Multiple Markets",
    description: "Coverage across key financial hubs and trade corridors.",
  },
  {
    label: "Trusted Network",
    description:
      "Preferred infrastructure for banks, corporates, and fintechs.",
  },
  {
    label: "Scalable",
    description: "Enterprise-grade controls for global transaction volumes.",
  },
];

const StatsStrip: FC = () => {
  return (
    <section className="border-b border-slate-800/70 bg-slate-900/40">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-0">
        {items.map((item) => (
          <div key={item.label} className="space-y-1 text-center sm:text-left">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-text-soft)]">
              {item.label}
            </div>
            <p className="text-[11px] text-[color:var(--color-text-muted)] sm:text-xs">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsStrip;
