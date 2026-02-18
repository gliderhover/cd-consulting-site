"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";
import Container from "@/components/Container";

const navItems = [
  { label: "Solution", href: "#solution", scroll: true },
  { label: "Decision Accelerator", href: "#decision-accelerator", scroll: true },
  { label: "Diagram", href: "#diagram", scroll: true },
  { label: "Technical", href: "/technical", scroll: false },
  { label: "Outcomes", href: "#outcomes", scroll: true },
  { label: "About us", href: "/about-us", scroll: false },
  { label: "Contact", href: "#contact", scroll: true },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";

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
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-slate-900" />
          <div className="leading-tight">
            <div className="text-sm font-semibold">C&amp;D Consulting</div>
            <div className="text-xs text-slate-600">CRE Data + Strategy Intelligence</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
          {navItems.map((item) => {
            if (item.scroll && item.href.startsWith("#")) {
              if (isHome) {
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={handleNavClick}
                    className="hover:text-slate-900"
                  >
                    {item.label}
                  </a>
                );
              }

              return (
                <Link key={item.href} href={`/${item.href}`} className="hover:text-slate-900">
                  {item.label}
                </Link>
              );
            }

            return (
              <Link key={item.href} href={item.href} className="hover:text-slate-900">
                {item.label}
              </Link>
            );
          })}
        </nav>

        {isHome ? (
          <a
            href="#contact"
            onClick={handleNavClick}
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
          >
            Talk to us
          </a>
        ) : (
          <Link
            href="/#contact"
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
          >
            Talk to us
          </Link>
        )}
      </Container>
    </header>
  );
}
