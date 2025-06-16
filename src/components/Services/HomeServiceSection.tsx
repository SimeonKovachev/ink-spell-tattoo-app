"use client";

import { useEffect, useState } from "react";
import { Service, ServiceCategory, SERVICE_CATEGORIES } from "@/types/service";
import SectionTitle from "../Common/SectionTitle";
import SingleService from "./SingleService";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ServicesClientProps {
  servicesByCategory: {
    [K in ServiceCategory]: Service[];
  };
}

interface ServiceSectionProps {
  category: ServiceCategory;
  services: Service[];
}

function ServiceSection({ category, services }: ServiceSectionProps) {
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
  const maxIndex = Math.max(0, services.length - itemsPerView);

  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [screenWidth, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  if (services.length === 0) return null;

  const categoryInfo = SERVICE_CATEGORIES[category];

  return (
    <section className="relative text-white py-12 md:py-16">
      <div className="container mx-auto">
        <div className="mb-8 md:mb-12">
          <SectionTitle
            subtitle={categoryInfo.name}
            title={
              categoryInfo.h1 ??
              `Открийте нашите ${categoryInfo.name.toLowerCase()}`
            }
            paragraph={categoryInfo.description}
            width="840px"
            center
          />
        </div>

        <div className="relative px-8">
          {maxIndex > 0 && currentIndex > 0 && (
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-gray-400 hover:text-white transition-colors p-2 rounded-full bg-gray-800/90 hover:bg-gray-700/90 shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              aria-label={`Предишни ${categoryInfo.name.toLowerCase()}`}
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {maxIndex > 0 && currentIndex < maxIndex && (
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-gray-400 hover:text-white transition-colors p-2 rounded-full bg-gray-800/90 hover:bg-gray-700/90 shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              aria-label={`Следващи ${categoryInfo.name.toLowerCase()}`}
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
              {services.map((service) => (
                <div
                  key={service._id}
                  className="px-4"
                  style={{ width: `${itemWidth}%`, flexShrink: 0 }}
                >
                  <SingleService service={service} />
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
      </div>
    </section>
  );
}

export default function HomeServiceSection({
  servicesByCategory,
}: ServicesClientProps) {
  return (
    <section className="relative bg-gradient-to-b from-gray-900 via-gray-900/95 to-black overflow-hidden">
      {servicesByCategory.tattoo.length > 0 && (
        <ServiceSection
          category="tattoo"
          services={servicesByCategory.tattoo}
        />
      )}

      {servicesByCategory["permanent-makeup"].length > 0 && (
        <>
          <div className="border-t border-gray-700/50 mx-auto max-w-4xl" />
          <ServiceSection
            category="permanent-makeup"
            services={servicesByCategory["permanent-makeup"]}
          />
        </>
      )}

      {servicesByCategory.piercing.length > 0 && (
        <>
          <div className="border-t border-gray-700/50 mx-auto max-w-4xl" />
          <ServiceSection
            category="piercing"
            services={servicesByCategory.piercing}
          />
        </>
      )}

      {Object.values(servicesByCategory).every(
        (services) => services.length === 0
      ) && (
        <div className="flex items-center justify-center min-h-[300px] py-16">
          <div className="animate-pulse flex flex-col items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gray-700" />
            <div className="h-4 w-48 bg-gray-700 rounded" />
          </div>
        </div>
      )}
    </section>
  );
}
