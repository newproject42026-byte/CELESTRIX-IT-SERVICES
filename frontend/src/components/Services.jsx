
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
      title: 'Cloud & Infrastructure Solutions',
      description:
        'Multi-cloud architecture, DevOps automation, cloud migration, and secure 24/7 infrastructure management.',
      icon: 'Cloud',
    },
    {
      id: 2,
      title: 'Full-Stack Software Engineering',
      description:
        'Bespoke web applications, high-throughput microservices, API architecture, and scalable SaaS solutions.',
      icon: 'Code2',
    },
    {
      id: 3,
      title: 'AI & Data Intelligence',
      description:
        'Enterprise machine learning models, predictive data analytics, and autonomous process pipelines.',
      icon: 'BrainCircuit',
    },
    {
      id: 4,
      title: 'Cybersecurity & Compliance',
      description:
        'Zero-trust network architecture, penetration testing, endpoint threat monitoring, and regulatory compliance.',
      icon: 'ShieldCheck',
    },
    {
      id: 5,
      title: 'Mobile App Development',
      description:
        'High-performance native and cross-platform mobile apps for iOS and Android built with modern frameworks.',
      icon: 'Smartphone',
    },
    {
      id: 6,
      title: 'IT Consulting & Digital Strategy',
      description:
        'Strategic roadmapping, legacy modernization, IT audit, and technology transformation consulting.',
      icon: 'BriefcaseBusiness',
    },
  ];

  const serviceCatalog = services.length ? services : fallbackServices;
  const [activeService, setActiveService] = useState(1);

  const serviceTechMap = {
    1: ['AWS', 'Terraform', 'Kubernetes', 'GitHub Actions', 'Azure Monitor'],
    2: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Docker', 'REST APIs'],
    3: ['Python', 'TensorFlow', 'Power BI', 'Spark', 'Kafka', 'MLflow'],
    4: ['Zero Trust', 'Sentinel', 'WAF', 'IAM', 'SIEM', 'Compliance Audits'],
    5: ['React Native', 'Flutter', 'iOS', 'Android', 'Firebase', 'App Store'],
    6: ['Architecture Review', 'Roadmaps', 'Cloud Strategy', 'Digital Transformation', 'Risk Analysis'],
  };

  return (
    <section id="services" className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="max-w-3xl">
          <span className="section-kicker">Core services</span>
          <h2 className="section-heading">Technology platforms built for durable business growth.</h2>
          <p className="section-copy">
            From infrastructure transformation to AI acceleration, we help enterprise teams modernize architecture, reduce operational risk, and deliver measurable digital outcomes.
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
                <div
                  key={index}
                  className="glass-panel animate-pulse rounded-[24px] border border-white/10 p-6"
                >
                  <div className="h-12 w-12 rounded-xl bg-slate-700/80" />
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
                    className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-slate-900/40 p-6 shadow-[0_25px_60px_rgba(15,23,42,0.45)] transition duration-300 hover:-translate-y-1 hover:border-indigo-400/40 hover:bg-slate-900/60"
                  >
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/80 to-transparent" />
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-sky-400/30 bg-gradient-to-br from-sky-500/15 to-indigo-500/20 text-sky-300">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="mt-6 text-xl font-bold text-white">{service.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{service.description}</p>

                    <button
                      type="button"
                      onClick={() => setActiveService(isOpen ? null : service.id)}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-300 transition hover:text-indigo-200"
                    >
                      Strategy overview
                      <ArrowUpRight className="h-4 w-4" />
                    </button>

                    {isOpen ? (
                      <div className="mt-5 rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                          Technologies used
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {(serviceTechMap[service.id] || ['Cloud', 'Automation', 'Security']).map((tech) => (
                            <span
                              key={tech}
                              className="inline-flex items-center gap-2 rounded-full border border-sky-400/25 bg-sky-500/10 px-2.5 py-1.5 text-xs font-medium text-sky-100"
                            >
                              <CheckCircle2 className="h-3.5 w-3.5 text-sky-300" />
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </article>
                );
              })}
        </div>
      </div>
    </section>
  );
}

export default Services;