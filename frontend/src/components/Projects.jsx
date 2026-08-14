import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'NexaCore Cloud Platform',
    category: 'Cloud Transformation',
    summary:
      'A distributed enterprise cloud modernization program that unified infrastructure, observability, and release automation across five business units.',
    impact: 'Reduced deployment time by 61% and improved uptime to 99.99%.',
    technologies: ['AWS', 'Terraform', 'Kubernetes', 'GitHub Actions', 'Prometheus', 'React'],
  },
  {
    id: 2,
    title: 'VertexGuard Security Suite',
    category: 'Cybersecurity',
    summary:
      'A zero-trust security orchestration platform designed for regulated environments requiring policy automation and rapid incident response.',
    impact: 'Cut incident response time by 74% while achieving full audit visibility.',
    technologies: ['Azure', 'Zero Trust', 'SIEM', 'Python', 'Power BI', 'Docker'],
  },
  {
    id: 3,
    title: 'PulseOne Analytics Engine',
    category: 'AI & Data Intelligence',
    summary:
      'An AI-powered forecasting and operational intelligence platform that transformed fragmented business data into executive dashboards and predictive alerts.',
    impact: 'Enabled 3x faster decision cycles and better demand planning accuracy.',
    technologies: ['Python', 'Kafka', 'Spark', 'PostgreSQL', 'TensorFlow', 'Node.js'],
  },
];

function Projects() {
  const [activeProject, setActiveProject] = useState(1);

  return (
    <section id="projects" className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="max-w-3xl">
          <span className="section-kicker">Our projects</span>
          <h2 className="section-heading">Case studies that move organizations from complexity to control.</h2>
          <p className="section-copy">
            We deliver digital programs that combine engineering depth, strategic alignment, and secure execution across cloud, data, and product transformation.
          </p>
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-3">
          {projects.map((project) => {
            const isOpen = activeProject === project.id;

            return (
              <article
                key={project.id}
                className="glass-panel overflow-hidden rounded-[28px] p-5 transition duration-300 hover:-translate-y-1 hover:border-indigo-400/40"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full border border-indigo-400/30 bg-indigo-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-indigo-200">
                    {project.category}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-sky-300" />
                </div>

                <h3 className="mt-5 text-2xl font-bold text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{project.summary}</p>

                <div className="mt-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-3 text-sm text-emerald-200">
                  {project.impact}
                </div>

                <button
                  type="button"
                  onClick={() => setActiveProject(isOpen ? null : project.id)}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-300 transition hover:text-indigo-200"
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
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="inline-flex items-center gap-2 rounded-full border border-sky-400/25 bg-sky-500/10 px-2.5 py-1.5 text-xs font-medium text-sky-100"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-sky-300" />
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
