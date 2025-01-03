import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const Breadcrumb = ({
  pageName,
  pageDescription,
}: {
  pageName: string;
  pageDescription?: string;
}) => {
  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0b2e] via-[#1c1231] to-gray-900"></div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 right-0 w-[600px] h-[600px] animate-gradient-spin">
          <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-600/30 via-fuchsia-500/30 to-pink-500/30 blur-[120px] animate-pulse-strong"></div>
        </div>

        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px]">
          <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-600/20 to-fuchsia-500/20 blur-[100px] animate-pulse-strong"></div>
        </div>

        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full animate-floating-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `rgba(139, 92, 246, ${Math.random() * 0.4})`,
              animationDelay: `${i * 2}s`,
            }}
          />
        ))}

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent animate-glow"></div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent animate-glow"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-purple-900/30 text-purple-300 font-semibold text-sm mb-8 animate-fadeIn">
            WELCOME TO
          </div>

          <h1 className="relative mb-8">
            <span className="cyrillic-heading text-5xl lg:text-7xl xl:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-600 animate-fadeIn">
              {pageName}
            </span>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-purple-500/0 blur-sm"></div>
          </h1>

          {pageDescription && (
            <p className="text-gray-300 text-lg lg:text-xl leading-relaxed mb-12 max-w-3xl mx-auto animate-fadeIn">
              {pageDescription}
            </p>
          )}

          <nav className="inline-flex items-center bg-purple-900/20 rounded-full px-6 py-3 backdrop-blur-sm border border-purple-500/10">
            <Link
              href="/"
              className="text-gray-300 hover:text-purple-400 transition-all duration-300 text-lg font-medium"
            >
              Home
            </Link>
            <ChevronRight className="mx-3 w-5 h-5 text-purple-500/70" />
            <span className="text-purple-400 text-lg font-medium">
              {pageName}
            </span>
          </nav>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </section>
  );
};

export default Breadcrumb;
