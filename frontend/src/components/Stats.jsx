import React from 'react';
import { Activity, BarChart3, CheckCircle2, Globe2, Shield } from 'lucide-react';

const impactStats = [
  { value: '99.99%', label: 'Uptime', detail: 'Mission-critical availability', icon: Activity },
  { value: '120+', label: 'Deployments', detail: 'Across cloud, data, and product systems', icon: BarChart3 },
  { value: '100%', label: 'Threat Isolation', detail: 'Zero-trust containment and remediation', icon: Shield },
  { value: '24/7', label: 'SRE Monitoring', detail: 'Operational coverage and rapid incident response', icon: Globe2 },
];

const differentiators = [
  'Architecture programs designed for measurable ROI, compliance, and delivery velocity.',
  'Cross-functional delivery teams combining cloud engineering, software development, and security.',
  'Executive-ready analytics and governance for resilient, future-proof operations.',
];

function Stats() {
  return (
    <section id="about" className="py-8 sm:py-12">
      <div className="section-shell">
        <div className="glass-panel overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <span className="section-kicker">Why Celestrix</span>
              <h2 className="section-heading text-3xl sm:text-4xl">Systems built to hold under pressure and keep moving.</h2>
              <p className="section-copy mt-4 max-w-xl">
                CELESTRIX IT SERVICES partners with organizations navigating digital complexity, modernization, and operational risk. We blend engineering rigor, strategic consulting, and security-first execution to convert technical change into sustainable business advantage.
              </p>

              <div className="mt-8 space-y-4">
                {differentiators.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/40 p-3.5">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-300" />
                    <span className="text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div id="impact" className="grid gap-4 sm:grid-cols-2">
              {impactStats.map(({ value, label, detail, icon: Icon }) => (
                <div key={label} className="group relative rounded-[26px] border border-slate-200 bg-white p-5 shadow-[0_18px_40px_rgba(148,163,184,0.12)] transition duration-300 hover:-translate-y-1 hover:border-cyan-200">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.08),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(52,211,153,0.08),transparent_30%)] opacity-0 transition group-hover:opacity-100" />
                  <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-200 bg-cyan-50 text-cyan-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="mt-6 text-3xl font-extrabold text-slate-900">{value}</div>
                    <div className="mt-2 text-sm font-semibold text-slate-700">{label}</div>
                    <p className="mt-2 text-sm leading-6 text-slate-500">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;