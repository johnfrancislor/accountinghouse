"use client";

import { useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "#services", label: "Services" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#team", label: "Our team" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" aria-label="The Accounting House, home">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted transition hover:text-navy">
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:+19024680667"
          className="hidden rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-brand-600 md:inline-flex"
        >
          Call 902-468-0667
        </a>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Toggle menu"
          className="rounded-lg p-2 text-navy md:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" className="border-t border-slate-200 bg-white px-4 pb-4 md:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 font-medium text-navy">
              {l.label}
            </a>
          ))}
          <a href="tel:+19024680667" className="mt-2 block rounded-full bg-brand px-5 py-3 text-center font-medium text-white">
            Call 902-468-0667
          </a>
        </nav>
      )}
    </header>
  );
}
