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
    <footer className="border-t border-white/10 bg-slate-950/70 py-8">
      <div className="section-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-emerald-400/30 bg-gradient-to-br from-emerald-500/15 via-cyan-500/10 to-violet-500/15">
              <ShieldCheck className="h-5 w-5 text-emerald-200" />
            </div>
            <div>
              <p className="text-sm font-bold tracking-[0.24em] text-white">CELESTRIX</p>
              <p className="text-[9px] uppercase tracking-[0.22em] text-slate-400">IT SERVICES</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-400">© 2026 CELESTRIX IT SERVICES. All rights reserved.</p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
          <nav className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-emerald-200">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/8 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-200">
            <LockKeyhole className="h-3.5 w-3.5" />
            NDA Assurance
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;