"use client";

import { useEffect, useState } from "react";
import { ArrowLeftSquare, ArrowRightSquare } from "lucide-react";
import Link from "next/link";
import { SERVICES_QUERY } from "@/lib/queries/servicesQuery";
import { Service } from "@/types/service";
import Image from "next/image";
import { client } from "@/lib/client";
import { urlFor } from "@/lib/image";
import Button from "../Button";
import SectionTitle from "../Common/SectionTitle";

export default function Services() {
  const [services, setServices] = useState<Service[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await client.fetch(SERVICES_QUERY);
        setServices(data);
      } catch (error) {
        console.error("Error fetching services:", error);
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

  if (services.length === 0) {
    return <p className="text-center py-12">Loading Services...</p>;
  }

  const currentService = services[currentIndex];
  const serviceImageUrl = currentService.image
    ? urlFor(currentService.image).url()
    : "/images/placeholder.png";

  return (
    <section className="bg-dark text-white py-16 lg:py-[120px]">
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="mb-12">
          <SectionTitle
            subtitle="Our Services"
            title="Explore Our Offerings"
            paragraph="Discover a range of services designed to meet your needs with precision and care."
            width="640px"
            center
          />
        </div>

        {/* Service Thumbnails */}
        <div className="flex justify-center gap-4 mb-8 overflow-x-auto no-scrollbar max-h-[150px] py-2">
          {services.map((service, index) => (
            <div
              key={service._id}
              className={`cursor-pointer rounded-md transition-all duration-300 ${
                index === currentIndex
                  ? "scale-110 border-2 border-yellow-500"
                  : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              {service.image?.asset?.url && (
                <Image
                  src={urlFor(service.image)
                    .width(100)
                    .height(100)
                    .quality(80)
                    .url()}
                  alt={service.name}
                  width={100}
                  height={100}
                  className="rounded-md object-cover"
                />
              )}
              <p
                className={`text-center text-sm mt-2 ${
                  index === currentIndex ? "text-yellow-500" : "text-gray-400"
                }`}
              >
                {service.name}
              </p>
            </div>
          ))}
        </div>

        {/* Main Service Details */}
        <div className="relative flex items-center justify-center max-w-4xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 z-10 p-2 text-gray-300 hover:text-yellow-500"
          >
            <ArrowLeftSquare size={36} />
          </button>

          <div className="flex flex-col items-center">
            {serviceImageUrl && (
              <Image
                src={serviceImageUrl}
                alt={currentService.name}
                width={800}
                height={600}
                className="w-full max-h-[500px] object-cover mb-6 rounded-lg shadow-lg"
              />
            )}
            <h3 className="text-2xl font-semibold mb-2">
              {currentService.name}
            </h3>
            <p className="text-sm text-gray-300 mb-4">
              {currentService.description}
            </p>
            <div className="flex gap-4">
              <Link href={`/services/${currentService.slug.current}`}>
                <Button
                  text="Know More"
                  type="outlined"
                  onClick={() => console.log("Know More clicked")}
                />
              </Link>
              <Button
                text="Book Now"
                type="filled"
                onClick={() => console.log("Book Now clicked")}
              />
            </div>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-0 z-10 p-2 text-gray-300 hover:text-yellow-500"
          >
            <ArrowRightSquare size={36} />
          </button>
        </div>
      </div>
    </section>
  );
}
