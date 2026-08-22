import React from 'react';
import { ArrowUpRight, GraduationCap, Clock, Building2, Code2 } from 'lucide-react';

const projects = [
  {
    id: 'srisai-model-school',
    title: 'Srisai Model School',
    subtitle: 'School Website & Web Application',
    description:
      'Developing a modern, high-performance website and web application for Srisai Model School to establish a professional digital presence, streamline communications, and make academic updates easily accessible.',
    status: 'In Progress',
    industry: 'Education',
    type: 'Web Development',
    developer: 'Celestrix IT Services',
    icon: GraduationCap,
    highlights: [
      'Responsive school portal & news updates',
      'Curriculum & admissions digital showcase',
      'Optimized for fast mobile loading & accessibility',
    ],
  },
];

function Projects() {
  return (
    <section id="projects" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-200 text-xs font-bold uppercase tracking-wider">
            Featured Engagements
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
            Engineering digital solutions that deliver real-world impact.
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-600">
            A look into our ongoing software engineering, web application development, and platform modernization initiatives.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-[#FAFAFC] p-8 sm:p-10 shadow-sm transition duration-300 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50"
              >
                <div>
                  {/* Status & Industry Badges */}
                  <div className="flex flex-wrap items-center gap-2 mb-6">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold">
                      <Clock className="h-3.5 w-3.5" />
                      {project.status}
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 text-xs font-medium">
                      <Building2 className="h-3.5 w-3.5" />
                      {project.industry}
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 text-xs font-medium">
                      <Code2 className="h-3.5 w-3.5" />
                      {project.type}
                    </span>
                  </div>

                  {/* Project Title & Subtitle */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-teal-50 rounded-2xl border border-teal-100 text-teal-600 group-hover:bg-teal-500 group-hover:text-white transition">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-sm font-semibold text-teal-600 mt-0.5">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-5 text-slate-600 text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="mt-6 space-y-2.5">
                    {project.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                        <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Metadata */}
                <div className="mt-8 pt-6 border-t border-slate-200/80 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">
                    Built by <strong className="text-slate-800">{project.developer}</strong>
                  </span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-teal-600 group-hover:text-teal-700 transition"
                  >
                    Discuss similar project
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

export default Projects;