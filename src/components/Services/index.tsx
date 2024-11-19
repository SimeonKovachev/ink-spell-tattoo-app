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
    <section className="bg-yellow-400 text-secondary py-12 px-4">
      <h2 className="text-4xl font-bold text-center mb-8">Our Services</h2>

      {/* Thumbnails for all services */}
      <div className="flex justify-center gap-4 mb-8 overflow-x-auto">
        {services.map((service, index) => (
          <div
            key={service._id}
            className={`cursor-pointer ${
              index === currentIndex ? "border-b-4 border-secondary" : ""
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
            <p className="text-center text-sm mt-2">{service.name}</p>
          </div>
        ))}
      </div>

      {/* Main service details */}
      <div className="max-w-4xl mx-auto relative flex items-center">
        {/* Navigation Arrows */}

        <div className="flex flex-col items-center text-secondary p-4 text-center w-full">
          <div className="flex items-center text-secondary p-20 text-center w-full relative">
            <button onClick={handlePrev} className="absolute left-0 z-10 p-2">
              <ArrowLeftSquare
                size={36}
                className="text-secondary hover:text-gray-700"
              />
            </button>

            {serviceImageUrl && (
              <Image
                src={serviceImageUrl}
                alt={currentService.name}
                width={800}
                height={600}
                className="w-full h-80 object-cover mb-6 rounded-lg"
              />
            )}

            <button onClick={handleNext} className="absolute right-0 z-10 p-2">
              <ArrowRightSquare
                size={36}
                className="text-secondary hover:text-gray-700"
              />
            </button>
          </div>

          <h3 className="text-2xl font-semibold mb-2">{currentService.name}</h3>
          <p className="text-sm mb-4">{currentService.description}</p>
          <div className="flex items-center gap-4 text-center">
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
      </div>
    </section>
  );
}
