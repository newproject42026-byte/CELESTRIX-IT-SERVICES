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
            <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-400/30 bg-gradient-to-br from-emerald-500/20 via-cyan-500/15 to-violet-500/20 shadow-[0_0_35px_rgba(16,185,129,0.2)]">
              <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.9)]" />
              <ShieldCheck className="h-5 w-5 text-emerald-200" />
            </div>
            <div>
              <p className="text-[11px] font-bold tracking-[0.28em] text-white">CELESTRIX</p>
              <p className="text-[9px] uppercase tracking-[0.26em] text-slate-400">IT SERVICES</p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-300 transition duration-200 hover:text-emerald-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-200">
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