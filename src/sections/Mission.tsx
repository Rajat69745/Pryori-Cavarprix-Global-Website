import type { FC } from "react";

const Mission: FC = () => {
  return (
    <section className="bg-white py-10 text-slate-900 sm:py-14">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-0">
        <div className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-amber-500">
          <span className="h-px w-8 bg-amber-400" />
          <span>Our Mission</span>
        </div>
        <h2 className="mt-3 text-lg font-extrabold sm:text-xl">
          Re-architecting global financial services infrastructure.
        </h2>
        <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
          We believe modern financial institutions need a single orchestration
          layer across payments, treasury, and commerce. Our mission is to
          abstract the complexity of rails, regulations, and reconciliation so
          teams can focus on building products that move markets forward.
        </p>
      </div>
    </section>
  );
};

export default Mission;
