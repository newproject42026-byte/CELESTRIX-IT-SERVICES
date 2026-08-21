import React, { useMemo, useState } from 'react';
import { CheckCircle2, Mail, MessageSquareText, Send, UserRound } from 'lucide-react';

const defaultServices = [
  'Cloud & Infrastructure Solutions',
  'Full-Stack Software Engineering',
  'AI & Data Intelligence',
  'Cybersecurity & Compliance',
  'Mobile App Development',
  'IT Consulting & Digital Strategy',
];

const initialForm = {
  name: '',
  email: '',
  company: '',
  service: defaultServices[0],
  projectBrief: '',
};

function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  const apiBaseUrl = useMemo(() => import.meta.env.VITE_API_URL || 'http://localhost:5000', []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));

    if (status.type !== 'idle') {
      setStatus({ type: 'idle', message: '' });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nextErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = 'Full name is required.';
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Enter a valid work email.';
    }

    if (!formData.projectBrief.trim()) {
      nextErrors.projectBrief = 'Please describe your project or challenge.';
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setStatus({ type: 'loading', message: 'Sending your inquiry...' });

    try {
      const response = await fetch(`${apiBaseUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          service: formData.service,
          projectBrief: formData.projectBrief,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Unable to send your request right now.');
      }

      setStatus({
        type: 'success',
        message: result.message || 'Your inquiry has been received.',
      });
      setFormData(initialForm);
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'Something went wrong while sending your message.',
      });
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-xl shadow-slate-200/50 sm:p-10">
            <span className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-teal-700">
              Consultation
            </span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Start your next strategic transformation.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-slate-600">
              Share your challenge and our specialists will map the right path for engineering, security, cloud modernization, or AI enablement.
            </p>

            <div className="mt-8 space-y-4 text-sm">
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-slate-50 p-4 font-medium text-slate-700">
                <Mail className="h-5 w-5 shrink-0 text-teal-700" />
                <a href="mailto:support@celestrixitservices.in" className="font-semibold text-slate-800 transition hover:text-teal-600">
                  support@celestrixitservices.in
                </a>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-slate-50 p-4 font-medium text-slate-700">
                <MessageSquareText className="h-5 w-5 shrink-0 text-teal-700" />
                Secure, confidential project reviews
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-xl shadow-slate-200/50 sm:p-10">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-slate-700">Name</label>
                <div className="relative">
                  <UserRound className="pointer-events-none absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 pl-11 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-500/20"
                    placeholder="John Morgan"
                  />
                </div>
                {errors.name ? <p className="mt-2 text-xs text-rose-600">{errors.name}</p> : null}
              </div>

              <div>
                <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-slate-700">Work Email</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-500/20"
                  placeholder="john@company.com"
                />
                {errors.email ? <p className="mt-2 text-xs text-rose-600">{errors.email}</p> : null}
              </div>

              <div>
                <label htmlFor="contact-company" className="mb-2 block text-sm font-medium text-slate-700">Company</label>
                <input
                  id="contact-company"
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-500/20"
                  placeholder="Northgate Holdings"
                />
              </div>

              <div>
                <label htmlFor="contact-service" className="mb-2 block text-sm font-medium text-slate-700">Service Area</label>
                <select
                  id="contact-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-500/20"
                >
                  {defaultServices.map((service) => (
                    <option key={service} value={service} className="bg-white text-slate-900">
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="contact-project-brief" className="mb-2 block text-sm font-medium text-slate-700">Project Brief</label>
                <textarea
                  id="contact-project-brief"
                  name="projectBrief"
                  value={formData.projectBrief}
                  onChange={handleChange}
                  rows="5"
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-500/20"
                  placeholder="Tell us about your environment, goals, constraints, and timeline."
                />
                {errors.projectBrief ? (
                  <p className="mt-2 text-xs text-rose-600">{errors.projectBrief}</p>
                ) : null}
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-400 px-8 py-3.5 font-semibold text-slate-950 shadow-md transition-all hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                disabled={status.type === 'loading'}
              >
                {status.type === 'loading' ? 'Sending...' : 'Send Inquiry'}
                <Send className="h-4 w-4" />
              </button>

              {status.type !== 'idle' ? (
                <div
                  className={`flex items-center gap-2 rounded-full px-3 py-2 text-xs font-medium ${
                    status.type === 'success'
                      ? 'border border-emerald-200 bg-emerald-50 text-emerald-700'
                      : status.type === 'error'
                      ? 'border border-rose-200 bg-rose-50 text-rose-700'
                      : 'border border-teal-200 bg-teal-50 text-teal-700'
                  }`}
                >
                  {status.type === 'success' ? <CheckCircle2 className="h-4 w-4" /> : null}
                  {status.message}
                </div>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;