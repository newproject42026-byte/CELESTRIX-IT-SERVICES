import React, { useEffect, useState } from 'react';
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

const defaultServices = [
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

function Services() {
  const [servicesList, setServicesList] = useState(defaultServices);

  useEffect(() => {
    const apiBaseUrl =
      import.meta.env.VITE_API_URL || 'https://celestrix-backend.onrender.com';

    fetch(`${apiBaseUrl}/api/services`)
      .then((res) => {
        if (!res.ok) throw new Error('Network error');
        return res.json();
      })
      .then((resData) => {
        if (resData?.data && Array.isArray(resData.data) && resData.data.length > 0) {
          setServicesList(resData.data);
        }
      })
      .catch(() => {
        // Silently use the default list without breaking UI
        setServicesList(defaultServices);
      });
  }, []);

  return (
    <section id="services" className="py-24 bg-[#FAFAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-200 text-xs font-bold uppercase tracking-wider">
            Core Capabilities
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
            Built for enterprises that need smarter systems, faster execution, and resilient scale.
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-600">
            From mission-critical infrastructure to AI-driven workflows, we turn technology
            complexity into operational clarity and measurable business value.
          </p>
        </div>

        {/* 3-Column Services Bento Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicesList.map((service) => {
            const IconComponent = iconMap[service.icon] || Cloud;
            return (
              <div
                key={service.id}
                className="group flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm transition duration-300 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50"
              >
                <div>
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-600 border border-teal-100 transition group-hover:bg-teal-500 group-hover:text-white">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-slate-900 leading-snug">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-600 group-hover:text-teal-700 transition"
                  >
                    Strategy overview
                    <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Services;