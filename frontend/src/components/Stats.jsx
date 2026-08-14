import React from 'react';
import { BarChart3, CheckCircle2, Globe2, Shield } from 'lucide-react';

const impactStats = [
  { value: '99.99%', label: 'Uptime', detail: 'Mission-critical availability' },
  { value: '120+', label: 'Projects Delivered', detail: 'Across cloud, data, and software' },
  { value: '100%', label: 'Threat Mitigation', detail: 'Across monitored environments' },
];

const differentiators = [
  'Enterprise-grade architecture with measurable ROI frameworks',
  'Cross-functional delivery teams across cloud, software, and security',
  'Executive-ready reporting and governance aligned to business outcomes',
];

function Stats() {
  return (
    <section id="about" className="py-8 sm:py-12">
      <div className="section-shell">
        <div className="glass-panel overflow-hidden rounded-[32px] p-6 sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <span className="section-kicker">About us</span>
              <h2 className="section-heading text-3xl">You need systems that perform under pressure.</h2>
              <p className="section-copy mt-4 max-w-xl">
                CELESTRIX IT SERVICES partners with organizations navigating digital complexity, modernization, and operational risk. We blend engineering rigor, strategic consulting, and security-first execution to deliver transformation that lasts.
              </p>

              <div className="mt-8 space-y-4">
                {differentiators.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/30 p-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-sky-300" />
                    <span className="text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div id="impact" className="grid gap-4 sm:grid-cols-3">
              {impactStats.map(({ value, label, detail }, index) => {
                const Icon = [BarChart3, Globe2, Shield][index];

                return (
                  <div key={label} className="rounded-[24px] border border-white/10 bg-slate-950/40 p-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-indigo-400/30 bg-indigo-500/10 text-sky-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="mt-6 text-3xl font-extrabold text-white">{value}</div>
                    <div className="mt-2 text-sm font-semibold text-slate-200">{label}</div>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{detail}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;