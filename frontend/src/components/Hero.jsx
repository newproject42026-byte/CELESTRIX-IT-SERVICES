import React from 'react';
import { ArrowRight, BadgeCheck, Cloud, ShieldCheck, Sparkles } from 'lucide-react';

const featurePillars = [
  { label: 'Multi-Cloud', icon: Cloud },
  { label: 'Zero-Trust', icon: ShieldCheck },
  { label: 'Agile', icon: Sparkles },
];

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-18 pt-10 sm:pt-16">
      <div className="section-shell">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="max-w-2xl">
            <div className="section-kicker">
              <BadgeCheck className="h-3.5 w-3.5" />
              Trusted by enterprise operators and digital leaders
            </div>

            <h1 className="text-4xl font-black leading-[0.96] tracking-[-0.06em] text-white sm:text-5xl lg:text-[5rem]">
              Cloud, data, and{' '}
              <span className="gradient-text">AI systems</span>{' '}
              engineered for the next era of growth.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              We design resilient cloud architectures, secure software platforms, and intelligent automation systems that help organizations move faster, stay compliant, and scale without friction.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#contact" className="primary-btn">
                Book a Strategy Call
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
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-sm text-slate-200 shadow-[0_10px_30px_rgba(15,23,42,0.4)]"
                >
                  <Icon className="h-4 w-4 text-emerald-300" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="glass-panel relative p-5 sm:p-7">
              <div className="absolute inset-0 border-mesh opacity-60" />
              <div className="relative">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-300">
                      System Status
                    </p>
                    <h2 className="mt-2 text-2xl font-bold text-white">Command Center</h2>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
                    <span className="status-dot" />
                    Live
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    { label: 'Infrastructure health', value: '99.99%', tone: 'cyan' },
                    { label: 'Deploy cadence', value: '2.4x faster', tone: 'violet' },
                    { label: 'Threat containment', value: '100%', tone: 'emerald' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-3.5"
                    >
                      <span className="text-sm text-slate-300">{item.label}</span>
                      <span className="text-lg font-bold text-white">{item.value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                  {[
                    ['120+', 'Delivery'],
                    ['24/7', 'Monitoring'],
                    ['18', 'Regions'],
                  ].map(([value, label]) => (
                    <div key={label} className="rounded-2xl border border-white/10 bg-slate-950/55 p-3">
                      <div className="text-xl font-bold text-white">{value}</div>
                      <div className="mt-1 text-[10px] uppercase tracking-[0.16em] text-slate-400">{label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-emerald-400/20 bg-emerald-500/5 p-4 text-sm text-slate-200">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-medium text-emerald-200">Runtime checks</span>
                    <span className="text-emerald-300">Nominal</span>
                  </div>
                  <div className="grid gap-2 text-xs text-slate-300 sm:grid-cols-2">
                    <div className="rounded-xl border border-white/10 bg-slate-950/45 px-2.5 py-2">Latency: 18ms</div>
                    <div className="rounded-xl border border-white/10 bg-slate-950/45 px-2.5 py-2">Uptime: 99.99%</div>
                  </div>
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