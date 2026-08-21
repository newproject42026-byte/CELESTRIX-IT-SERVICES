import React from 'react';
import { ArrowRight, LockKeyhole, ShieldCheck } from 'lucide-react';

const footerLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Impact', href: '#impact' },
  { label: 'Contact', href: '#contact' },
];

function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white py-10">
      <div className="section-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-200 bg-gradient-to-br from-cyan-50 via-emerald-50 to-violet-50">
              <ShieldCheck className="h-5 w-5 text-cyan-700" />
            </div>
            <div>
              <p className="text-sm font-bold tracking-[0.24em] text-slate-900">CELESTRIX</p>
              <p className="text-[9px] uppercase tracking-[0.22em] text-slate-500">IT SERVICES</p>
            </div>
          </div>
          <p className="mt-4 text-sm font-medium text-slate-500">© 2026 CELESTRIX IT SERVICES. All rights reserved.</p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
          <nav className="flex flex-wrap items-center gap-4">
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold text-emerald-700">
            <LockKeyhole className="h-3.5 w-3.5" />
            NDA Assurance
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;