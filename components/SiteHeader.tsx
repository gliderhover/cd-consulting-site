"use client";

import type { MouseEvent } from "react";
import Link from "next/link";

const nav = [
  { label: "Solution", href: "#solution" },
  { label: "Decision Accelerator", href: "#decision-accelerator" },
  { label: "Outcomes", href: "#outcomes" },
  { label: "Diagram", href: "#diagram" },
  { label: "About us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function SiteHeader() {
  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const href = event.currentTarget.getAttribute("href");
    if (!href || !href.startsWith("#")) {
      return;
    }

    const targetId = href.slice(1);
    const target = document.getElementById(targetId);
    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    if (window.history?.pushState) {
      window.history.pushState(null, "", href);
    } else {
      window.location.hash = href;
    }
  };

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-slate-900" />
          <div className="leading-tight">
            <div className="text-sm font-semibold">C&amp;D Consulting</div>
            <div className="text-xs text-slate-600">CRE Data + Strategy Intelligence</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleNavClick}
              className="hover:text-slate-900"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          onClick={handleNavClick}
          className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
        >
          Talk to us
        </a>
      </div>
    </header>
  );
}
