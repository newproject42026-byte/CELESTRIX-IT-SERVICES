import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'NexaCore Cloud Platform',
    category: 'Cloud Transformation',
    summary:
      'A distributed enterprise cloud modernization program that unified infrastructure, observability, and release automation across five business units.',
    impact: 'Reduced deployment time by 61% while improving platform uptime to 99.99%.',
    technologies: ['AWS', 'Terraform', 'Kubernetes', 'GitHub Actions', 'Prometheus', 'React'],
  },
  {
    id: 2,
    title: 'VertexGuard Security Suite',
    category: 'Cybersecurity',
    summary:
      'A zero-trust security orchestration platform built for regulated environments that require rapid policy enforcement and incident response.',
    impact: 'Cut incident response time by 74% and delivered full audit visibility across the estate.',
    technologies: ['Azure', 'Zero Trust', 'SIEM', 'Python', 'Power BI', 'Docker'],
  },
  {
    id: 3,
    title: 'PulseOne Analytics Engine',
    category: 'AI & Data Intelligence',
    summary:
      'An AI-powered forecasting and operational intelligence platform that translated fragmented business data into executive dashboards and predictive alerts.',
    impact: 'Enabled 3x faster decision cycles with stronger demand planning and forecasting accuracy.',
    technologies: ['Python', 'Kafka', 'Spark', 'PostgreSQL', 'TensorFlow', 'Node.js'],
  },
];

function Projects() {
  const [activeProject, setActiveProject] = useState(1);

  return (
    <section id="projects" className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="max-w-3xl">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-200/80 bg-teal-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-teal-700">
            Our Projects
          </span>
          <h2 className="text-3xl font-extrabold tracking-[-0.05em] text-slate-900 sm:text-4xl lg:text-5xl">
            Case studies that move organizations from complexity to control.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            We deliver digital programs that combine engineering depth, strategic alignment, and secure execution across cloud, data, and product transformation.
          </p>
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-3">
          {projects.map((project) => {
            const isOpen = activeProject === project.id;

            return (
              <article
                key={project.id}
                className="group overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-5 shadow-lg shadow-slate-200/40 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-teal-700">
                    {project.category}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-teal-700" />
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-900 sm:text-[1.35rem]">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{project.summary}</p>

                <div className="mt-5 rounded-2xl border border-emerald-200/70 bg-emerald-50/60 p-4 text-xs font-medium text-emerald-900 sm:text-sm">
                  {project.impact}
                </div>

                <button
                  type="button"
                  onClick={() => setActiveProject(isOpen ? null : project.id)}
                  aria-expanded={isOpen}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 transition-colors hover:text-teal-700"
                >
                  Strategy overview
                  <ArrowUpRight className="h-4 w-4" />
                </button>

                {isOpen ? (
                  <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Technologies used
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                          {technology}
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

export default Projects;
