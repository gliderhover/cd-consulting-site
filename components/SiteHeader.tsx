import Link from "next/link";

const nav = [
  { label: "TEST", href: "/test", variant: "button" as const },
  { label: "Solution", href: "/solution" },
  { label: "Decision Accelerator", href: "/decision-accelerator" },
  { label: "Outcomes", href: "/outcomes" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
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
          {nav.map((item) =>
            item.variant === "button" ? (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full border border-slate-300 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-slate-700 hover:border-slate-400 hover:text-slate-900"
              >
                {item.label}
              </Link>
            ) : (
              <Link key={item.href} href={item.href} className="hover:text-slate-900">
                {item.label}
              </Link>
            )
          )}
        </nav>

        <Link
          href="/contact"
          className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
        >
          Talk to us
        </Link>
      </div>
    </header>
  );
}
