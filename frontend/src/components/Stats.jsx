import React from 'react';
import { Activity, Layers, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

const stats = [
  {
    icon: Activity,
    value: '99.99%',
    label: 'Uptime',
    description: 'Mission-critical availability',
    iconColor: 'text-sky-600',
    iconBg: 'bg-sky-50',
  },
  {
    icon: Layers,
    value: '120+',
    label: 'Deployments',
    description: 'Across cloud, data, and product systems',
    iconColor: 'text-teal-600',
    iconBg: 'bg-teal-50',
  },
  {
    icon: ShieldCheck,
    value: '100%',
    label: 'Threat Isolation',
    description: 'Zero-trust containment and remediation',
    iconColor: 'text-emerald-600',
    iconBg: 'bg-emerald-50',
  },
  {
    icon: Clock,
    value: '24/7',
    label: 'SRE Monitoring',
    description: 'Operational coverage and rapid incident response',
    iconColor: 'text-indigo-600',
    iconBg: 'bg-indigo-50',
  },
];

const highlights = [
  'Architecture programs designed for measurable ROI, compliance, and delivery velocity.',
  'Cross-functional delivery teams combining cloud engineering, software development, and security.',
  'Executive-ready analytics and governance for resilient, future-proof operations.',
];

function Stats() {
  return (
    <section id="impact" className="py-20 bg-[#FAFAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200/80 bg-white p-8 sm:p-12 shadow-xl shadow-slate-200/50">
          <div className="grid gap-12 lg:grid-cols-2">
            
            {/* Left Column: Heading & Highlights */}
            <div className="flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-600">
                  Why Celestrix
                </span>
                <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Systems built to hold under pressure and keep moving.
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  CELESTRIX IT SERVICES partners with organizations navigating digital complexity,
                  modernization, and operational risk. We blend engineering rigor, strategic
                  consulting, and security-first execution to convert technical change into sustainable
                  business advantage.
                </p>
              </div>

              {/* High-Contrast Highlights List */}
              <div className="mt-8 space-y-3">
                {highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 transition hover:bg-slate-100/80"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-teal-600 mt-0.5" />
                    <p className="text-sm font-medium leading-normal text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: 2x2 Metric Bento Grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:border-slate-300 hover:shadow-md"
                  >
                    <div className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl ${stat.iconBg} ${stat.iconColor}`}>
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-3xl font-extrabold tracking-tight text-slate-900">
                        {stat.value}
                      </div>
                      <div className="mt-1 text-sm font-semibold text-slate-800">
                        {stat.label}
                      </div>
                      <div className="mt-1 text-xs text-slate-500">
                        {stat.description}
                      </div>
                    </div>
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