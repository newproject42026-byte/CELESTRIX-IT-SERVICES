import React, { useState } from 'react';
import {
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  Cloud,
  Code2,
  ShieldCheck,
  Smartphone,
} from 'lucide-react';

const iconMap = {
  Cloud,
  Code2,
  BrainCircuit,
  ShieldCheck,
  Smartphone,
  BriefcaseBusiness,
};

function Services({ services = [], loading = false, error = '' }) {
  const fallbackServices = [
    {
      id: 1,
      title: 'Cloud Architecture & Kubernetes DevOps',
      description:
        'Multi-cloud modernization, resilient platform engineering, and automation that keep critical systems available at scale.',
      icon: 'Cloud',
    },
    {
      id: 2,
      title: 'High-Scale Full-Stack & Microservices',
      description:
        'Custom product engineering for SaaS platforms, distributed APIs, and digital experiences designed for growth.',
      icon: 'Code2',
    },
    {
      id: 3,
      title: 'Enterprise Generative AI & Data Pipelines',
      description:
        'AI strategy, LLM integrations, and data orchestration that convert fragmented information into operational intelligence.',
      icon: 'BrainCircuit',
    },
    {
      id: 4,
      title: 'Zero-Trust Cybersecurity & Penetration Audits',
      description:
        'Risk reduction through security architecture, threat modeling, compliance controls, and continuous monitoring.',
      icon: 'ShieldCheck',
    },
    {
      id: 5,
      title: 'Cross-Platform Mobile Applications',
      description:
        'Customer-centric mobile products across iOS and Android built for usability, performance, and sustained engagement.',
      icon: 'Smartphone',
    },
    {
      id: 6,
      title: 'Strategic IT Advisory & Legacy Overhauls',
      description:
        'Executive technology planning, modernization roadmaps, and transformation initiatives aligned to business outcomes.',
      icon: 'BriefcaseBusiness',
    },
  ];

  const serviceCatalog = services.length ? services : fallbackServices;
  const [activeService, setActiveService] = useState(1);

  const serviceTechMap = {
    1: ['AWS', 'Terraform', 'Kubernetes', 'GitHub Actions', 'Azure Monitor'],
    2: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Docker', 'REST APIs'],
    3: ['Python', 'LLM', 'Data Lakes', 'Spark', 'Kafka', 'Power BI'],
    4: ['Zero Trust', 'WAF', 'IAM', 'SIEM', 'Pen Tests', 'Compliance'],
    5: ['React Native', 'Flutter', 'iOS', 'Android', 'App Store', 'Firebase'],
    6: ['Architecture Review', 'Roadmaps', 'Cloud Strategy', 'Digital Transformation', 'Risk Analysis'],
  };

  return (
    <section id="services" className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="max-w-3xl">
          <span className="section-kicker">Core capabilities</span>
          <h2 className="section-heading">Built for enterprises that need smarter systems, faster execution, and resilient scale.</h2>
          <p className="section-copy">
            From mission-critical infrastructure to AI-driven workflows, we turn technology complexity into operational clarity and measurable business value.
          </p>
        </div>

        {error ? (
          <div className="mt-8 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 text-sm text-amber-200">
            {error}
          </div>
        ) : null}

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {loading
            ? Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="glass-panel animate-pulse rounded-[26px] border border-white/10 p-6">
                  <div className="h-12 w-12 rounded-2xl bg-slate-700/80" />
                  <div className="mt-6 h-5 w-2/3 rounded bg-slate-700/80" />
                  <div className="mt-4 space-y-2">
                    <div className="h-3 w-full rounded bg-slate-700/80" />
                    <div className="h-3 w-5/6 rounded bg-slate-700/80" />
                    <div className="h-3 w-4/6 rounded bg-slate-700/80" />
                  </div>
                </div>
              ))
            : serviceCatalog.map((service) => {
                const Icon = iconMap[service.icon] || Cloud;
                const isOpen = activeService === service.id;

                return (
                  <article
                    key={service.id}
                    className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0d1520]/80 p-6 shadow-[0_25px_70px_rgba(2,6,23,0.52)] transition duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:shadow-[0_0_0_1px_rgba(16,185,129,0.25)]"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.2),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.18),transparent_35%)] opacity-0 transition duration-300 group-hover:opacity-100" />
                    <div className="relative">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/30 bg-gradient-to-br from-emerald-500/15 via-cyan-500/10 to-violet-500/15 text-emerald-200">
                        <Icon className="h-6 w-6" />
                      </div>

                      <h3 className="mt-6 text-xl font-bold text-white">{service.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-300">{service.description}</p>

                      <button
                        type="button"
                        onClick={() => setActiveService(isOpen ? null : service.id)}
                        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-200 transition hover:text-cyan-200"
                      >
                        Strategy overview
                        <ArrowUpRight className="h-4 w-4" />
                      </button>

                      {isOpen ? (
                        <div className="mt-5 rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                            Core stack
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {(serviceTechMap[service.id] || ['Cloud', 'Automation', 'Security']).map((tech) => (
                              <span
                                key={tech}
                                className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/8 px-2.5 py-1.5 text-[11px] font-medium text-emerald-100"
                              >
                                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-300" />
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </article>
                );
              })}
        </div>
      </div>
    </section>
  );
}

export default Services;