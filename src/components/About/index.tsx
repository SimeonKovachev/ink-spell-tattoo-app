"use client";

import Image from "next/image";
import { PaperclipIcon, Heart } from "lucide-react";
import SectionTitle from "../Common/SectionTitle";
import { useEffect, useState } from "react";
import { ParticlePosition } from "@/types/particlePosition";
import { localImageUrl } from "@/lib/utils/localImage";
import CertificationCarousel from "./CertificationCarousel";
import { Certification } from "@/types/certification";

interface AboutSectionProps {
  certifications: Certification[];
}

export default function AboutSection({ certifications }: AboutSectionProps) {
  const [particlePositions, setParticlePositions] = useState<
    ParticlePosition[]
  >([]);

  useEffect(() => {
    const positions = Array(6)
      .fill(null)
      .map((_, i) => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${i * 2}s`,
      }));
    setParticlePositions(positions);
  }, []);

  const mainImage = localImageUrl("/images/about/portrait.jpg", {
    width: 800,
    height: 600,
    quality: 90,
  });

  const tattooSample1 = localImageUrl("/images/about/tattoo-sample1.jpg", {
    width: 250,
    height: 250,
  });

  const tattooSample2 = localImageUrl("/images/about/tattoo-sample2.jpg", {
    width: 300,
    height: 300,
  });

  return (
    <section
      id="about"
      className="relative z-10 py-16 pb-20 lg:py-24 lg:pb-28 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0b2e] via-[#1c1231] to-gray-900"></div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 right-0 w-[600px] h-[600px] animate-gradient-spin">
          <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-600/30 via-fuchsia-500/30 to-pink-500/30 blur-[120px] animate-pulse-strong"></div>
        </div>

        <div className="absolute inset-0">
          {particlePositions.map((position, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-yellow-400/20 rounded-full blur-sm animate-floating-particle particle-${i + 1}`}
              style={position}
            >
              <div className="absolute inset-0 animate-particle-trail" />
            </div>
          ))}
        </div>

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent animate-glow"></div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent animate-glow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* About Content */}
        <div className="flex flex-wrap justify-between items-center mb-20">
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
              <div className="relative w-full h-[400px] lg:h-[500px] mask-torn-edge">
                <Image
                  src={mainImage.src}
                  alt="Ива Лазарова - професионален татуист и концептуален художник в Ink Spell Tattoo Studio Плевен"
                  width={mainImage.width}
                  height={mainImage.height}
                  sizes={mainImage.sizes}
                  className="object-contain w-auto h-full"
                />
              </div>

              <div className="relative mt-8">
                <div className="relative z-10 transform rotate-6 translate-x-[0px] md:rotate-9 md:translate-x-[-35px] lg:rotate-12 lg:translate-x-[-50px]">
                  <div className="w-[200px] md:w-[250px] lg:w-[300px]">
                    <Image
                      src={tattooSample2.src}
                      alt="Художествена татуировка с фини линии и минималистичен дизайн от Ink Spell Tattoo Studio"
                      width={tattooSample2.width}
                      height={tattooSample2.height}
                      className="rounded-lg shadow-lg mask-torn-edge"
                    />
                    <Image
                      src="/images/about/tape.png"
                      alt="Декоративна лента"
                      width={80}
                      height={80}
                      className="absolute -top-3 -left-3 transform -rotate-45 w-[60px] md:w-[70px] lg:w-[80px]"
                    />
                  </div>
                </div>

                <div className="absolute z-0 transform top-12 right-4 -rotate-6 md:top-10 md:-right-6 md:-rotate-6 lg:top-12 lg:-right-8 lg:-rotate-12">
                  <div className="w-[160px] md:w-[200px] lg:w-[250px]">
                    <Image
                      src={tattooSample1.src}
                      alt="Персонализирана геометрична татуировка създадена в тату студио Ink Spell Плевен"
                      width={tattooSample1.width}
                      height={tattooSample1.height}
                      className="rounded-lg shadow-lg mask-torn-edge"
                    />
                    <Image
                      src="/images/about/tape.png"
                      alt="Декоративна лента"
                      width={80}
                      height={80}
                      className="absolute -top-5 -right-5 transform rotate-45 w-[60px] md:w-[70px] lg:w-[80px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certification Carousel Section */}
        {certifications && certifications.length > 0 && (
          <div className="relative">
            {/* Separator Line */}
            <div className="flex items-center justify-center mb-16">
              <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent w-full max-w-md"></div>
              <div className="mx-6 w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
              <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent w-full max-w-md"></div>
            </div>

            {/* Certification Carousel */}
            <CertificationCarousel certifications={certifications} />
          </div>
        )}
      </div>
    </section>
  );
}
