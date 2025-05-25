"use client";

import { useState } from "react";
import { X } from "lucide-react";
import clsx from "clsx";
import type { SiteAlert } from "@/types/siteAlert";

export default function SiteAlertModal({ message, variant }: SiteAlert) {
  const [open, setOpen] = useState(true);
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[1100] flex items-start sm:items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fadeIn"
        onClick={() => setOpen(false)}
      />

      {/* card */}
      <div
        className={clsx(
          "relative w-full max-w-lg rounded-xl shadow-2xl border overflow-hidden",
          variant === "purple" && "bg-dark border-accent-purple text-white",
          variant === "yellow" && "bg-dark border-yellow-300 text-gray-900",
          variant === "red" && "bg-dark    border-red-400    text-white"
        )}
      >
        <button
          onClick={() => setOpen(false)}
          aria-label="Затвори"
          className="absolute right-3 top-3 text-white/80 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        <div
          className="p-6 text-sm sm:text-base leading-relaxed space-y-2"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      </div>
    </div>
  );
}
