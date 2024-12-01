"use client";

import { useEffect, useState } from "react";
import { Service } from "@/types/service";
import { getAllServices } from "@/lib/fetchServices";
import toast from "react-hot-toast";
import SectionTitle from "../Common/SectionTitle";
import SingleService from "./SingleService";

export default function HomeServiceSection() {
  const [services, setServices] = useState<Service[]>([]);
  //const [currentIndex, setCurrentIndex] = useState(0);

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

//   const handlePrev = () => {
//     setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
//   };

//   if (services.length === 0) {
//     return <p className="text-center py-12">Loading Services...</p>;
//   }

//   const currentService = services[currentIndex];
//   const serviceImageUrl = currentService.image
//     ? urlFor(currentService.image).url()
//     : "/images/placeholder.png";

  return (
    <section className="pb-10 pt-20 bg-dark lg:pb-20 lg:pt-[120px]">
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="Our Services"
            title="Explore Our Offerings"
            paragraph="Discover a range of services tailored to meet your needs."
            width="640px"
            center
          />
        </div>

        {/* <div className="relative flex items-center justify-center mb-12 max-w-5xl mx-auto">
          <button
            onClick={handlePrev}
            className="absolute left-0 z-10 p-2 text-gray-300 hover:text-yellow-500"
          >
            <ArrowLeftSquare size={36} />
          </button>

          <div className="flex flex-col items-center">
            <Image
              src={serviceImageUrl}
              alt={currentService.name}
              width={1200}
              height={600}
              className="w-full max-h-[500px] object-cover mb-6 rounded-lg shadow-lg"
            />
            <h3 className="text-2xl font-semibold text-white mb-2">
              {currentService.name}
            </h3>
            <p className="text-sm text-gray-300 mb-4">
              {currentService.description}
            </p>
            <div className="flex gap-4">
              <Link href={`/services/${currentService.slug.current}`}>
                <button className="px-6 py-2 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-dark transition rounded">
                  View More
                </button>
              </Link>
              <button className="px-6 py-2 bg-yellow-500 text-dark hover:bg-yellow-400 transition rounded">
                Book Now
              </button>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-0 z-10 p-2 text-gray-300 hover:text-yellow-500"
          >
            <ArrowRightSquare size={36} />
          </button>
        </div> */}

        {/* Services Grid */}
        <div className="-mx-4 flex flex-wrap">
          {services.slice(0, 3).map((service) => (
            <div key={service._id} className="w-full px-4 md:w-1/2 lg:w-1/3">
              <SingleService service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
