"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import DiagramGate from "@/components/DiagramGate";

const STORAGE_KEY = "diagram_unlocked";
const COOKIE_NAME = "diagram_unlocked";

export default function DiagramViewerPage() {
  const [hasAccess, setHasAccess] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const viewportRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(STORAGE_KEY) === "1";
    const cookieHit = document.cookie.includes(`${COOKIE_NAME}=1`);
    if (stored || cookieHit) {
      setHasAccess(true);
    }
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const handleFullscreenChange = () => {
      const doc = document as Document & {
        webkitFullscreenElement?: Element | null;
      };
      setIsFullscreen(Boolean(doc.fullscreenElement || doc.webkitFullscreenElement));
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange);
    };
  }, []);

  const toggleFullscreen = () => {
    if (!viewportRef.current) return;
    const doc = document as Document & {
      webkitExitFullscreen?: () => Promise<void> | void;
      webkitFullscreenElement?: Element | null;
    };
    const element = viewportRef.current as HTMLDivElement & {
      webkitRequestFullscreen?: () => Promise<void> | void;
    };

    if (doc.fullscreenElement || doc.webkitFullscreenElement) {
      if (doc.exitFullscreen) {
        void doc.exitFullscreen();
      } else if (doc.webkitExitFullscreen) {
        doc.webkitExitFullscreen();
      }
      return;
    }

    if (element.requestFullscreen) {
      void element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    }
  };

  if (!isReady) {
    return (
      <main className="min-h-screen bg-white">
        <DiagramGate mode="page" />
      </main>
    );
  }

  if (!hasAccess) {
    return (
      <main className="min-h-screen bg-white">
        <DiagramGate mode="page" />
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col bg-slate-950 text-white">
      <header className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <Link
          href="/#diagram"
          className="rounded-full border border-white/20 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-white/80 hover:bg-white/10"
        >
          Back to Home
        </Link>
        <button
          type="button"
          onClick={toggleFullscreen}
          className="rounded-full border border-white/20 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-white/80 hover:bg-white/10"
        >
          {isFullscreen ? "Exit Full Screen" : "Full Screen"}
        </button>
      </header>
      <div ref={viewportRef} className="diagram-fs flex-1 min-h-[80svh]">
        <iframe
          title="Interactive diagram"
          src="/Diagram/diagram_complete_v2.html"
          className="h-full w-full"
          loading="lazy"
          allowFullScreen
          scrolling="yes"
        />
      </div>
    </main>
  );
}
