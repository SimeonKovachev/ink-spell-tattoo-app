"use client";

import { useEffect, useState } from "react";
import { Service } from "@/types/service";
import { getAllServices } from "@/lib/fetchServices";
import toast from "react-hot-toast";
import SectionTitle from "../Common/SectionTitle";
import SingleService from "./SingleService";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HomeServiceSection() {
  const [services, setServices] = useState<Service[]>([]);
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
  const maxIndex = services.length - itemsPerView;

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await getAllServices();
        if (data.length === 0) {
          toast("Не са намерени услуги!", { icon: "🛑" });
        }
        setServices(data);
      } catch (error) {
        console.error("Error fetching services:", error);
        toast.error("Възникна проблем при зареждането на услугите.");
      }
    };
    fetchServices();
  }, []);

  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, Math.max(0, maxIndex)));
  }, [screenWidth, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section className="relative bg-gradient-to-b from-gray-900 via-gray-900/95 to-black text-white py-12 md:py-24 overflow-hidden">
      <div className="container mx-auto">
        <div className="mb-8 md:mb-12">
          <SectionTitle
            subtitle="Нашите Услуги"
            title="Открийте Стиловете Татуировки"
            paragraph="Разгледайте нашите художествени стилове татуировки - от минималистични до сложни геометрични дизайни. Предлагаме безплатна консултация за вашата идея."
            width="640px"
            center
          />
        </div>

        {services.length > 0 ? (
          <div className="relative px-8">
            {currentIndex > 0 && (
              <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-gray-400 hover:text-white transition-colors p-2 rounded-full bg-gray-800/90 hover:bg-gray-700/90 shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                aria-label="Предишни стилове татуировки"
              >
                <ChevronLeft size={24} />
              </button>
            )}

            {currentIndex < maxIndex && (
              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-gray-400 hover:text-white transition-colors p-2 rounded-full bg-gray-800/90 hover:bg-gray-700/90 shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                aria-label="Следващи стилове татуировки"
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
                  aria-label={`Преглед на стил ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center min-h-[300px]">
            <div className="animate-pulse flex flex-col items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-700" />
              <div className="h-4 w-48 bg-gray-700 rounded" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
