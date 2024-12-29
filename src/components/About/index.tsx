"use client";

import Image from "next/image";
import styles from "../../styles/AboutMe.module.css";
import { PaperclipIcon, Heart } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0b2e] via-[#1c1231] to-gray-900"></div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating glowing circles */}
        <div className="absolute -top-40 right-0 w-[600px] h-[600px] animate-gradient-spin">
          <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-600/30 via-fuchsia-500/30 to-pink-500/30 blur-[120px] animate-pulse-strong"></div>
        </div>

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-yellow-400/20 rounded-full blur-sm animate-floating-particle`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
            }}
          ></div>
        ))}

        {/* Glowing lines */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent animate-glow"></div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent animate-glow"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-wrap justify-between items-center">
          {/* Left Column - Bio */}
          <div className="w-full lg:w-[45%]">
            <div className="max-w-[570px] mx-auto lg:mx-0">
              <div className="mb-14">
                <span className="inline-block px-4 py-2 rounded-full bg-purple-900/30 text-purple-300 font-semibold text-sm mb-6">
                  INTRODUCTION
                </span>
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
                  Perfection That is Forever
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  I’m Iva, a concept artist turned tattoo artist with over a
                  decade of experience. I blend storytelling and artistic
                  precision to create custom tattoos that reflect your journey
                  and vision.
                </p>
              </div>
              <div className="space-y-8">
                {/* Info Cards */}
                <div className="flex items-center space-x-4">
                  <Heart className="w-6 h-6 text-rose-400" />
                  <span className="text-gray-300">Tattoo Artist</span>
                </div>
                <div className="flex items-center space-x-4">
                  <PaperclipIcon className="w-6 h-6 text-yellow-400" />
                  <span className="text-gray-300">Concept Artist</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-300">10+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="w-full lg:w-[45%]">
            <div className="relative group">
              <div
                className={`relative w-full h-[400px] lg:h-[500px] ${styles["mask-torn-edge"]}`}
              >
                <Image
                  src="/images/about/portrait.jpg"
                  alt="Portrait of Iva"
                  layout="fill"
                  objectFit="contain"
                  className="animate-fade-in"
                />
              </div>

              {/* Portfolio Samples */}
              <div className="relative mt-8">
                <div className="relative z-10 transform rotate-12">
                  <Image
                    src="/images/about/tattoo-sample2.jpg"
                    alt="Tattoo Sample 1"
                    width={300}
                    height={300}
                    className={`rounded-lg shadow-lg ${styles["mask-torn-edge"]}`}
                  />
                  <Image
                    src="/images/about/tape.png"
                    alt="Tape"
                    width={80}
                    height={80}
                    className="absolute -top-3 -left-3 transform -rotate-45"
                  />
                </div>
                <div className="absolute top-12 -right-4 z-0 transform -rotate-3">
                  <Image
                    src="/images/about/tattoo-sample1.jpg"
                    alt="Tattoo Sample 2"
                    width={250}
                    height={250}
                    className={`rounded-lg shadow-lg ${styles["mask-torn-edge"]}`}
                  />
                  <Image
                    src="/images/about/tape.png"
                    alt="Tape"
                    width={80}
                    height={80}
                    className="absolute -top-5 -right-5 transform rotate-45"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
