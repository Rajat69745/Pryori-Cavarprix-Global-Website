import type { FC } from "react";
import { Activity } from "lucide-react";

const OperationsHighlight: FC = () => {
  return (
    <section className="bg-white py-10 text-slate-900 sm:py-14">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-stretch lg:px-0">
        <div className="order-2 flex-1 lg:order-1">
          <div className="h-full rounded-3xl bg-slate-950 px-6 py-7 text-slate-50 shadow-[0_24px_60px_rgba(15,23,42,0.75)] sm:px-7">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-400/10 text-amber-300">
                <Activity className="h-4 w-4" />
              </span>
              <span>Treasury Console</span>
            </div>
            <div className="mt-5 space-y-4 text-xs text-slate-200">
              <div className="flex items-center justify-between rounded-2xl bg-slate-900/80 px-4 py-3">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
                    Operating Accounts
                  </div>
                  <div className="mt-1 text-base font-semibold">17</div>
                </div>
                <div className="text-right text-[10px] text-emerald-300">
                  99.982% uptime
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-slate-900/80 p-3">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
                    Reconciled Today
                  </div>
                  <div className="mt-1 text-lg font-semibold">1.2M txns</div>
                </div>
                <div className="rounded-2xl bg-slate-900/80 p-3">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
                    Exceptions
                  </div>
                  <div className="mt-1 text-lg font-semibold text-emerald-300">
                    0.03%
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-dashed border-slate-700/80 bg-slate-900/40 p-3 text-[11px] text-slate-300">
                Designed with controls-first architecture so risk, finance, and
                product teams have a single real-time view of operations.
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 flex-1 self-center text-center lg:order-2 lg:text-left">
          <div className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-amber-500">
            <span className="h-px w-8 bg-amber-400" />
            <span>Partnership Framework</span>
          </div>
          <h2 className="mt-3 text-lg font-extrabold sm:text-xl">
            A framework that aligns technology, risk, and governance.
          </h2>
          <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
            We partner with you across the entire lifecycle, from initial design
            and approvals to live incident response. Our teams work alongside
            product, risk, and operations to meet internal policy and regulatory
            expectations.
          </p>
          <ul className="mt-4 space-y-2 text-left text-xs text-slate-600 sm:text-sm">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400" />
              <span>
                Co-designed runbooks and playbooks for critical flows.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400" />
              <span>Clear SLAs and governance across all counterparties.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400" />
              <span>Dedicated support for change management and audits.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OperationsHighlight;
