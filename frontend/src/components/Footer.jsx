import React from 'react';
import { LockKeyhole, ShieldCheck } from 'lucide-react';

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/60 py-8">
      <div className="section-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-400/30 bg-gradient-to-br from-indigo-500/20 to-sky-400/20">
              <ShieldCheck className="h-5 w-5 text-sky-300" />
            </div>
            <div>
              <p className="text-sm font-bold tracking-[0.22em] text-white">CELESTRIX</p>
              <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">IT SERVICES</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-400">© 2026 CELESTRIX IT SERVICES. All rights reserved.</p>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">
          <LockKeyhole className="h-3.5 w-3.5" />
          NDA & Confidentiality Assured
        </div>
      </div>
    </footer>
  );
}

export default Footer;