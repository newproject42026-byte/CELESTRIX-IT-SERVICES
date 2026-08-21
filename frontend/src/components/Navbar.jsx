import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Impact', href: '#impact' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-30 pt-4">
      <div className="section-shell">
        <div className="nav-shell">
          <a href="#top" className="flex items-center gap-3" aria-label="Celestrix IT Services home">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-200 bg-gradient-to-br from-cyan-50 via-emerald-50 to-violet-50 shadow-[0_10px_30px_rgba(34,211,238,0.18)]">
              <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.85)]" />
              <ShieldCheck className="h-5 w-5 text-cyan-700" />
            </div>
            <div>
              <p className="text-[11px] font-bold tracking-[0.28em] text-slate-900">CELESTRIX</p>
              <p className="text-[9px] uppercase tracking-[0.26em] text-slate-500">IT SERVICES</p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-600 transition duration-200 hover:text-slate-900"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-700">
              <span className="status-dot" />
              System online
            </div>
            <a href="#contact" className="primary-btn text-xs sm:text-sm">
              Book Discovery Call
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;