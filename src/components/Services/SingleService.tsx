import { Service } from "@/types/service";
import Image from "next/image";
import Button from "../Common/Button";
import { ArrowRight } from "lucide-react";

const SingleService = ({ service }: { service: Service }) => {
  return (
    <div className="group relative h-full rounded-xl bg-gradient-to-b from-gray-800/95 to-gray-900 overflow-hidden transition-all duration-500 ease-out hover:-translate-y-1">
      <div className="relative h-full rounded-xl bg-gradient-to-b from-gray-800 to-gray-900 shadow-lg">
        <div className="relative w-full h-48 md:h-56 overflow-hidden rounded-t-xl">
          <Image
            src={service.image?.asset?.url || "/images/placeholder.jpg"}
            alt={service.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-all duration-700 ease-out scale-105 group-hover:scale-110"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 transition-opacity duration-500 ease-out group-hover:opacity-40" />
        </div>

        <div className="relative p-6">
          <h3 className="text-xl md:text-2xl font-bold text-white transition-all duration-300 ease-out group-hover:text-purple-300">
            {service.name}
          </h3>

          <p className="mt-3 mb-6 text-gray-300 text-sm md:text-base line-clamp-3 transition-all duration-300 ease-out group-hover:text-gray-100">
            {service.description}
          </p>

          <div className="relative">
            <Button
              text="Разгледай услугата"
              type="filled"
              responsiveSize={{
                sm: "sm",
                md: "md",
                lg: "md",
              }}
              icon={
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 ease-out" />
              }
              navigateTo={`/services/${service.slug.current}`}
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 rounded-b-xl bg-gradient-to-r from-purple-500/0 via-purple-500 to-purple-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </div>
  );
};

export default SingleService;
