"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Service, ServiceCategory, SERVICE_CATEGORIES } from "@/types/service";
import SectionTitle from "../Common/SectionTitle";
import SingleService from "./SingleService";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const SECTION_PADDING = "px-8";
const BUTTON_BASE_STYLES =
  "inline-flex items-center gap-2 px-6 py-3 bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/30 rounded-lg text-purple-300 hover:text-white transition-all group whitespace-nowrap";
const CAROUSEL_BUTTON_STYLES =
  "absolute top-1/2 -translate-y-1/2 z-20 text-gray-400 hover:text-white transition-colors p-2 rounded-full bg-gray-800/90 hover:bg-gray-700/90 shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500";

interface ServicesClientProps {
  servicesByCategory: {
    [K in ServiceCategory]: Service[];
  };
}

interface ServiceSectionProps {
  category: ServiceCategory;
  services: Service[];
}

function useResponsiveItemsPerView() {
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
  return { itemsPerView, screenWidth };
}

function useCarouselNavigation(services: Service[], itemsPerView: number) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = Math.max(0, services.length - itemsPerView);

  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return {
    currentIndex,
    maxIndex,
    handlePrev,
    handleNext,
    setCurrentIndex,
  };
}

function ServiceSection({ category, services }: ServiceSectionProps) {
  const { itemsPerView } = useResponsiveItemsPerView();
  const { currentIndex, maxIndex, handlePrev, handleNext, setCurrentIndex } =
    useCarouselNavigation(services, itemsPerView);

  if (services.length === 0) return null;

  const categoryInfo = SERVICE_CATEGORIES[category];
  const itemWidth = 100 / itemsPerView;
  const showNavigation = maxIndex > 0;

  return (
    <section className="relative text-white py-12 md:py-16">
      <div className="container mx-auto">
        <div
          className={`mb-8 md:mb-12 flex items-center justify-between ${SECTION_PADDING}`}
        >
          <div className="flex-1 pr-8">
            <SectionTitle
              subtitle={categoryInfo.name}
              title={
                categoryInfo.h1 ??
                `Открийте нашите ${categoryInfo.name.toLowerCase()}`
              }
              paragraph={categoryInfo.description}
              width="840px"
              center={false}
            />
          </div>

          <div className="hidden lg:flex flex-shrink-0 relative z-10">
            <Link
              href={`/services/${categoryInfo.slug}`}
              className={BUTTON_BASE_STYLES}
              aria-label={`Виж всички ${categoryInfo.name.toLowerCase()}`}
            >
              <span className="whitespace-nowrap">Виж всички</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Service carousel section */}
        <div className={`relative ${SECTION_PADDING}`}>
          {/* Navigation buttons */}
          {showNavigation && currentIndex > 0 && (
            <button
              onClick={handlePrev}
              className={`${CAROUSEL_BUTTON_STYLES} left-0`}
              aria-label={`Предишни ${categoryInfo.name.toLowerCase()}`}
              type="button"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {showNavigation && currentIndex < maxIndex && (
            <button
              onClick={handleNext}
              className={`${CAROUSEL_BUTTON_STYLES} right-0`}
              aria-label={`Следващи ${categoryInfo.name.toLowerCase()}`}
              type="button"
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

          <div className="mt-8 text-center lg:hidden">
            <Link
              href={`/services/${categoryInfo.slug}`}
              className={BUTTON_BASE_STYLES}
              aria-label={`Виж всички ${categoryInfo.name.toLowerCase()}`}
            >
              <span>Виж всички {categoryInfo.name.toLowerCase()}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Pagination dots */}
          {showNavigation && (
            <div className="flex justify-center mt-6 gap-2" role="tablist">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? "bg-purple-500 w-4"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                  aria-label={`Преглед страница ${index + 1}`}
                  role="tab"
                  type="button"
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
  const hasAnyServices = Object.values(servicesByCategory).some(
    (services) => services.length > 0
  );

  if (!hasAnyServices) {
    return (
      <section className="relative bg-gradient-to-b from-gray-900 via-gray-900/95 to-black overflow-hidden">
        <div className="flex items-center justify-center min-h-[300px] py-16">
          <div className="animate-pulse flex flex-col items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gray-700" />
            <div className="h-4 w-48 bg-gray-700 rounded" />
          </div>
        </div>
      </section>
    );
  }

  const categoryOrder: ServiceCategory[] = [
    "tattoo",
    "permanent-makeup",
    "temporary-tattoo",
    "inkless-tattoo",
  ];

  return (
    <section className="relative bg-gradient-to-b from-gray-900 via-gray-900/95 to-black overflow-hidden">
      {categoryOrder.map((category, index) => {
        const services = servicesByCategory[category];
        if (services.length === 0) return null;

        return (
          <div key={category}>
            {index > 0 && (
              <div className="border-t border-gray-700/50 mx-auto max-w-4xl" />
            )}
            <ServiceSection category={category} services={services} />
          </div>
        );
      })}
    </section>
  );
}
