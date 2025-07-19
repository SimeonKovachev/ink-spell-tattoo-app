"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionTitle from "../Common/SectionTitle";
import { FlashPromo } from "@/types/flashPromo";
import FlashCard from "./FLashCard";

export default function FlashPromosClient({
  promos,
}: {
  promos: FlashPromo[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const itemsPerView = screenWidth < 768 ? 1 : screenWidth < 1024 ? 2 : 3;
  const itemWidth = 100 / itemsPerView;
  const maxIndex = Math.max(0, promos.length - itemsPerView);

  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [screenWidth, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  if (!promos?.length) {
    return (
      <section className="min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-black via-gray-900/95 to-gray-900 text-white px-4">
        <p className="text-center text-lg text-gray-400">
          Няма активни Flash промоции в момента – следете ни за нови оферти!
        </p>
      </section>
    );
  }

  return (
    <section className="relative bg-gradient-to-b from-black via-gray-900/95 to-gray-900 text-white py-20 lg:py-28 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-0 w-[600px] h-[600px] animate-gradient-spin">
          <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-600/20 via-fuchsia-500/20 to-pink-500/20 blur-[120px] animate-pulse-strong"></div>
        </div>
        <div className="absolute -bottom-40 right-0 w-[500px] h-[500px] animate-gradient-spin-reverse">
          <div className="w-full h-full rounded-full bg-gradient-to-l from-blue-500/15 via-purple-500/20 to-indigo-500/15 blur-[100px] animate-pulse-strong"></div>
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="mb-8 md:mb-12">
          <SectionTitle
            subtitle="FLASH ПРОМОЦИИ"
            title="Готови авторски дизайни"
            paragraph="Уникални татуировки за жени и мъже – само в Ink Spell Studio, Плевен."
            width="840px"
            center
          />
        </div>

        <div className="relative px-8">
          {maxIndex > 0 && currentIndex > 0 && (
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-gray-400 hover:text-white transition-colors p-2 rounded-full bg-gray-800/90 hover:bg-gray-700/90 shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              aria-label="Предишни Flash промоции"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {maxIndex > 0 && currentIndex < maxIndex && (
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-gray-400 hover:text-white transition-colors p-2 rounded-full bg-gray-800/90 hover:bg-gray-700/90 shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              aria-label="Следващи Flash промоции"
            >
              <ChevronRight size={24} />
            </button>
          )}

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {promos.map((promo) => (
                <div
                  key={promo._id}
                  className="px-4"
                  style={{ width: `${itemWidth}%`, flexShrink: 0 }}
                >
                  <FlashCard promo={promo} />
                </div>
              ))}
            </div>
          </div>

          {maxIndex > 0 && (
            <div className="flex justify-center mt-6 gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? "bg-purple-500 w-4"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                  aria-label={`Преглед ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        <p className="mt-12 max-w-3xl mx-auto text-center text-sm text-gray-400">
          Открийте вашата следваща татуировка сред нашите Flash промоции в Ink
          Spell – Плевен. Уникални женски и мъжки дизайни, лесен избор без
          лутане, гарантирано качество и стил. Подходящи за първа татуировка или
          бърз tattoo с характер. Запишете час още днес!
        </p>
      </div>
    </section>
  );
}
