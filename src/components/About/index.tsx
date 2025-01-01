"use client";

import Image from "next/image";
import { PaperclipIcon, Heart } from "lucide-react";
import SectionTitle from "../Common/SectionTitle";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0b2e] via-[#1c1231] to-gray-900"></div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 right-0 w-[600px] h-[600px] animate-gradient-spin">
          <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-600/30 via-fuchsia-500/30 to-pink-500/30 blur-[120px] animate-pulse-strong"></div>
        </div>

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

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent animate-glow"></div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent animate-glow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full lg:w-[45%]">
            <div className="max-w-[570px] mx-auto lg:mx-0">
              <div className="mb-14">
                <SectionTitle
                  subtitle="Въведение в света на татуировките"
                  title="Изкуство, което оставя следа завинаги"
                  paragraph="Здравейте, аз съм Ива - артист с душа и въображение, превърнала
                  страстта си към изкуството в професия. Започнах като концептуален
                  художник, вдъхновена от магията на дигиталното изкуство, а днес
                  създавам уникални татуировки, които разказват вашите истории.
                  Всяка линия, която рисувам, е отражение на вашата индивидуалност
                  и моята артистична визия."
                />
              </div>
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <Heart className="w-6 h-6 text-rose-400" />
                  <span className="text-gray-300">
                    Татуист с творческа душа
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <PaperclipIcon className="w-6 h-6 text-yellow-400" />
                  <span className="text-gray-300">
                    Концептуален художник с богато въображение
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-300">
                    Над 10 години опит в изкуството
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[45%]">
            <div className="relative group">
              <div
                className="relative w-full h-[400px] lg:h-[500px] mask-torn-edge"
              >
                <Image
                  src="/images/about/portrait.jpg"
                  alt="Портрет на Ива"
                  layout="fill"
                  objectFit="contain"
                  quality={85}
                  priority={true}
                />
              </div>

              <div className="relative mt-8">
                <div
                  className="relative z-10 transform rotate-12"
                  style={{ left: "-50px" }}
                >
                  <Image
                    src="/images/about/tattoo-sample2.jpg"
                    alt="Пример за татуировка 1"
                    width={300}
                    height={300}
                    className="rounded-lg shadow-lg mask-torn-edge"
                  />
                  <Image
                    src="/images/about/tape.png"
                    alt="Декоративна лента"
                    width={80}
                    height={80}
                    className="absolute -top-3 -left-3 transform -rotate-45"
                  />
                </div>
                <div className="absolute top-12 -right-8 z-0 transform -rotate-12">
                  <Image
                    src="/images/about/tattoo-sample1.jpg"
                    alt="Пример за татуировка 2"
                    width={250}
                    height={250}
                    className="rounded-lg shadow-lg mask-torn-edge"
                  />
                  <Image
                    src="/images/about/tape.png"
                    alt="Декоративна лента"
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
