"use client";

import type { ReactNode } from "react";

type LayoutVariant =
  | "current"
  | "micro-grid"
  | "tabs-compact"
  | "tabs-compact-side-lower"
  | "tabs-compact-side-final";

type StyleVariant = "light" | "dark";

export default function HeroSection({
  layoutVariant,
  setLayoutVariant,
  styleVariant,
  setStyleVariant,
  children,
}: {
  layoutVariant: LayoutVariant;
  setLayoutVariant: (variant: LayoutVariant) => void;
  styleVariant: StyleVariant;
  setStyleVariant: (variant: StyleVariant) => void;
  children: ReactNode;
}) {
  const showVariantSwitch = process.env.NODE_ENV !== "production";

  return (
    <>
      {showVariantSwitch ? (
        <div className="flex flex-wrap justify-center gap-4 bg-slate-100 px-6 py-4">
          <div className="flex flex-wrap justify-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-slate-500">
            {(
              [
                { id: "current", label: "Current" },
                { id: "micro-grid", label: "Micro Grid" },
                { id: "tabs-compact", label: "Tabs 2-Line" },
                { id: "tabs-compact-side-lower", label: "Tabs 2-Line Split Lower" },
                { id: "tabs-compact-side-final", label: "Tabs 2-Line Split Final" },
              ] as { id: LayoutVariant; label: string }[]
            ).map((option) => (
              <button
                key={option.id}
                onClick={() => setLayoutVariant(option.id)}
                className={`rounded-full border px-3 py-1 transition ${
                  layoutVariant === option.id
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-200 bg-white text-slate-500 hover:text-slate-800"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
          <div className="h-6 w-px bg-slate-300" />
          <div className="flex flex-wrap justify-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-slate-500">
            {(
              [
                { id: "light", label: "Light Background" },
                { id: "dark", label: "Dark Background" },
              ] as { id: StyleVariant; label: string }[]
            ).map((option) => (
              <button
                key={option.id}
                onClick={() => setStyleVariant(option.id)}
                className={`rounded-full border px-3 py-1 transition ${
                  styleVariant === option.id
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-200 bg-white text-slate-500 hover:text-slate-800"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      ) : null}
      <section className="bg-gradient-to-br from-[#051c2c] via-[#0f344d] to-[#051c2c] py-16 sm:py-20">
        {children}
      </section>
    </>
  );
}
