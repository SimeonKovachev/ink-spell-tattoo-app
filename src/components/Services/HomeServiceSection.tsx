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
    setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative bg-gradient-to-b from-gray-900 via-gray-900/95 to-black text-white py-24 px-4 md:px-8 overflow-hidden">
      <div className="container mx-auto">
        <div className="mb-[60px] text-center">
          <SectionTitle
            subtitle="Our Services"
            title="Explore Our Offerings"
            paragraph="Discover a range of services tailored to meet your needs."
            width="640px"
            center
          />
        </div>

        {/* Services Carousel */}
        {services.length > 0 ? (
          <div className="relative flex items-center gap-6">
            <button
              onClick={handlePrev}
              className="text-gray-500 hover:text-gray-300 transition-colors p-2 rounded-full bg-gray-800/70 hover:bg-gray-800/50"
            >
              <ChevronLeft size={36} />
            </button>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mx-auto">
              {services
                .slice(currentIndex, currentIndex + 3)
                .map((service, index) => (
                  <SingleService
                    key={`${service._id}-${index}`}
                    service={service}
                  />
                ))}
            </div>

            <button
              onClick={handleNext}
              className="text-gray-500 hover:text-gray-300 transition-colors p-2 rounded-full bg-gray-800/70 hover:bg-gray-800/50"
            >
              <ChevronRight size={36} />
            </button>
          </div>
        ) : (
          <p className="text-center py-12">Loading Services...</p>
        )}
      </div>
    </section>
  );
}
