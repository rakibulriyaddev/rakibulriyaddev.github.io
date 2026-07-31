"use client";

import { useState } from "react";

const links = [
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-gray-200 bg-white/80 backdrop-blur dark:border-slate-700 dark:bg-slate-900/80">
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-6 py-4">
        <span className="shrink-0 font-semibold whitespace-nowrap">
          Rakibul Islam
        </span>

        <div className="hidden gap-6 text-sm whitespace-nowrap sm:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-emerald-500">
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-gray-300 sm:hidden dark:border-slate-700"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 z-30 sm:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
          />
          <div className="absolute top-0 right-0 flex h-full w-64 flex-col gap-1 bg-white p-6 shadow-xl dark:bg-slate-900">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-semibold">Menu</span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-300 dark:border-slate-700"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-slate-800"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
