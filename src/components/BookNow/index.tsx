"use client";

import { useEffect, useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import BookingForm from "./BookingForm";
import { MapPin, Phone, Mail } from "lucide-react";
import { ParticlePosition } from "@/types/particlePosition";

export default function Contact() {
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

  return (
    <section
      id="contact"
      className="relative pt-32 py-12 md:py-24 md:pt-44 lg:py-28 lg:pt-48 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0b2e] via-[#1c1231] to-gray-900"></div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 right-0 w-[600px] h-[600px] animate-gradient-spin">
          <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-600/30 via-fuchsia-500/30 to-pink-500/30 blur-[120px] animate-pulse-strong"></div>
        </div>

        <div className="absolute inset-0">
          {particlePositions.map((position, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-purple-400/60 rounded-full blur-sm
                animate-floating-particle particle-${i + 1}`}
              style={position}
            >
              <div className="absolute inset-0 animate-particle-trail" />
            </div>
          ))}
        </div>

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent animate-glow"></div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent animate-glow"></div>

        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-fuchsia-900/20 animate-ambient"></div>
      </div>

      <div id="booknow" className="container mx-auto px-4 relative z-10">
        <div className="flex flex-wrap justify-between gap-10">
          <div className="w-full lg:w-[45%] flex flex-col">
            <div className="max-w-[570px] mx-auto lg:mx-0">
              <div className="mb-14">
                <SectionTitle
                  subtitle="Свържете се с нас"
                  title="Запишете час за вашата мечтана татуировка"
                  paragraph="Запишете се за безплатна 30-минутна консултация, за да обсъдим вашите идеи за татуировка и да отговорим на всички ваши въпроси."
                />
              </div>

              {/* Контактна информация */}
              <div className="space-y-10">
                <div className="flex items-start group">
                  <div className="p-3 bg-purple-900/20 rounded-lg group-hover:bg-purple-900/30 transition-colors">
                    <MapPin className="w-6 h-6 text-purple-300" />
                  </div>
                  <div className="ml-5">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Нашето студио
                    </h3>
                    <a
                      href="https://maps.app.goo.gl/1g2w9ofvfqekiYKb8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-purple-300 transition-colors"
                    >
                      Плевен Център,
                      <br />
                      ул. &quot;Петко Р. Славейков&quot; 39 
                    </a>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="p-3 bg-purple-900/20 rounded-lg group-hover:bg-purple-900/30 transition-colors">
                    <Mail className="w-6 h-6 text-purple-300" />
                  </div>
                  <div className="ml-5">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Пишете ни
                    </h3>
                    <div className="space-y-1">
                      <a
                        href="mailto:support@ink-spell.com"
                        className="block text-gray-300 hover:text-purple-300 transition-colors"
                      >
                        support@ink-spell.com
                      </a>
                      <a
                        href="mailto:iva.lazarova.draws@gmail.com"
                        className="block text-gray-300 hover:text-purple-300 transition-colors"
                      >
                        iva.lazarova.draws@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="p-3 bg-purple-900/20 rounded-lg group-hover:bg-purple-900/30 transition-colors">
                    <Phone className="w-6 h-6 text-purple-300" />
                  </div>
                  <div className="ml-5">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Обадете ни се
                    </h3>
                    <a
                      href="tel:+359894300545"
                      className="text-gray-300 hover:text-purple-300 transition-colors"
                    >
                      +359 89 430 0545
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[45%]">
            <div className="bg-gray-900/50 rounded-2xl p-6 md:p-10 shadow-xl border border-accent-purple">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
                Запишете своята безплатна консултация
              </h3>
              <BookingForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
