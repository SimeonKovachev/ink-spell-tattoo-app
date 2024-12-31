"use client"

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
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getItemsPerView = () => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    return 3;
  };

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await getAllServices();
        if (data.length === 0) {
          toast("No services found!", { icon: "🛑" });
        }
        setServices(data);
      } catch (error) {
        console.error("Error fetching services:", error);
        toast.error("Failed to load services.");
      }
    };

    fetchServices();
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      const itemsPerView = getItemsPerView();
      const newIndex = prev - itemsPerView;
      return newIndex < 0
        ? Math.max(services.length - itemsPerView, 0)
        : newIndex;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const itemsPerView = getItemsPerView();
      const newIndex = prev + itemsPerView;
      return newIndex >= services.length ? 0 : newIndex;
    });
  };

  return (
    <section className="relative bg-gradient-to-b from-gray-900 via-gray-900/95 to-black text-white py-12 md:py-24 px-4 overflow-hidden">
      <div className="container mx-auto">
        <div className="mb-8 md:mb-12">
          <SectionTitle
            subtitle="Our Services"
            title="Explore Our Offerings"
            paragraph="Discover a range of services tailored to meet your needs."
            width="640px"
            center
          />
        </div>

        {services.length > 0 ? (
          <div className="relative">
            <div className="absolute inset-y-0 left-0 md:-left-4 flex items-center">
              <button
                onClick={handlePrev}
                className="transform -translate-x-1/2 text-gray-400 hover:text-white transition-colors p-2 rounded-full bg-gray-800/90 hover:bg-gray-700/90 shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                aria-label="Previous services"
              >
                <ChevronLeft size={24} />
              </button>
            </div>

            <div className="absolute inset-y-0 right-0 md:-right-4 flex items-center">
              <button
                onClick={handleNext}
                className="transform translate-x-1/2 text-gray-400 hover:text-white transition-colors p-2 rounded-full bg-gray-800/90 hover:bg-gray-700/90 shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                aria-label="Next services"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            <div className="overflow-hidden px-4 md:px-8">
              <div
                className="flex transition-transform duration-500 ease-out gap-4 md:gap-6"
                style={{
                  transform: `translateX(-${currentIndex * (100 / getItemsPerView())}%)`,
                }}
              >
                {services.map((service, index) => (
                  <div
                    key={`${service._id}-${index}`}
                    className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0"
                  >
                    <SingleService service={service} />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-6 gap-2">
              {Array.from({
                length: Math.ceil(services.length / getItemsPerView()),
              }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index * getItemsPerView())}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    Math.floor(currentIndex / getItemsPerView()) === index
                      ? "bg-purple-500 w-4"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
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
