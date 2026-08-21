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
          <div className="glass-panel p-6 sm:p-8">
            <span className="section-kicker">Consultation</span>
            <h2 className="section-heading text-3xl sm:text-4xl">Start your next strategic transformation.</h2>
            <p className="section-copy mt-4 max-w-md text-slate-600">
              Share your challenge and our specialists will map the right path for engineering, security, cloud modernization, or AI enablement.
            </p>

            <div className="mt-8 space-y-4 text-sm text-slate-600">
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3.5">
                <Mail className="h-4 w-4 text-cyan-700" />
                <a href="mailto:support@celestrixitservices.in" className="transition-colors hover:text-cyan-700">
                  support@celestrixitservices.in
                </a>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3.5">
                <MessageSquareText className="h-4 w-4 text-cyan-700" />
                Secure, confidential project reviews
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="glass-panel p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">Name</label>
                <div className="relative">
                  <UserRound className="pointer-events-none absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input-shell pl-11"
                    placeholder="John Morgan"
                  />
                </div>
                {errors.name ? <p className="mt-2 text-xs text-rose-300">{errors.name}</p> : null}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">Work Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input-shell"
                  placeholder="john@company.com"
                />
                {errors.email ? <p className="mt-2 text-xs text-rose-300">{errors.email}</p> : null}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="input-shell"
                  placeholder="Northgate Holdings"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">Service Area</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="input-shell"
                >
                  {defaultServices.map((service) => (
                    <option key={service} value={service} className="bg-slate-900 text-white">
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-medium text-slate-200">Project Brief</label>
                <textarea
                  name="projectBrief"
                  value={formData.projectBrief}
                  onChange={handleChange}
                  rows="5"
                  className="input-shell resize-none"
                  placeholder="Tell us about your environment, goals, constraints, and timeline."
                />
                {errors.projectBrief ? (
                  <p className="mt-2 text-xs text-rose-300">{errors.projectBrief}</p>
                ) : null}
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                className="primary-btn w-full sm:w-auto rounded-2xl px-6 py-3.5"
                disabled={status.type === 'loading'}
              >
                {status.type === 'loading' ? 'Sending...' : 'Send Inquiry'}
                <Send className="h-4 w-4" />
              </button>

              {status.type !== 'idle' ? (
                <div
                  className={`flex items-center gap-2 rounded-full px-3 py-2 text-xs font-medium ${
                    status.type === 'success'
                      ? 'border border-emerald-500/30 bg-emerald-500/10 text-emerald-200'
                      : status.type === 'error'
                      ? 'border border-rose-500/30 bg-rose-500/10 text-rose-200'
                      : 'border border-cyan-500/30 bg-cyan-500/10 text-cyan-200'
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