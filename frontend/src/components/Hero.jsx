import React from 'react';
import { ArrowRight, BadgeCheck, Cloud, ShieldCheck, Sparkles } from 'lucide-react';

const featurePillars = [
  { label: 'Multi-Cloud', icon: Cloud },
  { label: 'Zero-Trust', icon: ShieldCheck },
  { label: 'Agile', icon: Sparkles },
];

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-10 sm:pt-16">
      <div className="section-shell">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="max-w-2xl">
            <div className="section-kicker">
              <BadgeCheck className="h-3.5 w-3.5" />
              Trusted by enterprise operators and digital leaders
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-7xl">
              Pioneering IT Solutions for the{' '}
              <span className="bg-gradient-to-r from-sky-300 via-indigo-300 to-indigo-500 bg-clip-text text-transparent">
                Autonomous Enterprise
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              We design resilient cloud architectures, secure intelligent platforms, and strategic software systems that help organizations move faster, stay compliant, and scale with confidence.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#contact" className="primary-btn">
                Request an Audit
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#services" className="secondary-btn">
                Explore Services
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {featurePillars.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 shadow-lg shadow-slate-950/40"
                >
                  <Icon className="h-4 w-4 text-sky-300" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="glass-panel relative overflow-hidden rounded-[28px] p-6 sm:p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/15 via-sky-400/10 to-transparent" />
              <div className="relative">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-300">
                      Live Operations
                    </p>
                    <h2 className="mt-2 text-2xl font-bold text-white">Global Delivery Grid</h2>
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    Active
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { label: 'Infrastructure health', value: '99.99%', accent: 'sky' },
                    { label: 'Deploy cadence', value: '2.4x faster', accent: 'indigo' },
                    { label: 'Threat containment', value: '100%', accent: 'emerald' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3"
                    >
                      <span className="text-sm text-slate-300">{item.label}</span>
                      <span className="text-lg font-bold text-white">{item.value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                  {[
                    ['120+', 'Projects'],
                    ['24/7', 'Monitoring'],
                    ['18', 'Regions'],
                  ].map(([value, label]) => (
                    <div key={label} className="rounded-2xl border border-white/10 bg-slate-950/40 p-3">
                      <div className="text-xl font-bold text-white">{value}</div>
                      <div className="mt-1 text-[11px] uppercase tracking-[0.14em] text-slate-400">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;