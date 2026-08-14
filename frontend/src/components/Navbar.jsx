import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'About Us', href: '#about' },
  { label: 'Impact', href: '#impact' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/45 backdrop-blur-xl">
      <div className="section-shell flex items-center justify-between py-4">
        <a href="#top" className="flex items-center gap-3" aria-label="Celestrix IT Services home">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-400/30 bg-gradient-to-br from-indigo-500/20 to-sky-400/20 shadow-lg shadow-indigo-900/40">
            <ShieldCheck className="h-5 w-5 text-sky-300" />
          </div>
          <div>
            <p className="text-sm font-bold tracking-[0.22em] text-white">CELESTRIX</p>
            <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">IT SERVICES</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="primary-btn text-xs sm:text-sm">
          Consult Now
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

export default Navbar;