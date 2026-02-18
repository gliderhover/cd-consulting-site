"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/components/Container";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Technical", href: "/technical" },
  { label: "About us", href: "/about-us" },
];

export default function SiteHeader() {
  const pathname = usePathname();

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
            const isActive =
              (item.href === "/" && pathname === "/") ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`hover:text-slate-900 ${isActive ? "text-slate-900" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/#contact"
          className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
        >
          Talk to us
        </Link>
      </Container>
    </header>
  );
}
