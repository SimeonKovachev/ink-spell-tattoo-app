import { Service } from "@/types/service";
import Image from "next/image";
import Button from "../Common/Button";
import { ArrowRight } from "lucide-react";
import { getSizes, urlFor } from "@/lib/image";
import { useRouter } from "next/navigation";
import { useConversions } from "@/lib/gtag";

const SingleService = ({ service }: { service: Service }) => {
  const router = useRouter();
  const conversions = useConversions();

  const handleCardClick = () => {
    conversions.serviceCardClick(service.slug.current);

    router.push(`/services/${service.slug.current}`);
  };

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    conversions.buttonClick(`service_${service.slug.current}`);

    router.push(`/services/${service.slug.current}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="group relative h-full rounded-xl bg-gradient-to-b from-gray-800/95 to-gray-900 overflow-hidden transition-all duration-500 ease-out hover:-translate-y-1 cursor-pointer"
    >
      <div className="relative h-full rounded-xl bg-gradient-to-b from-gray-800 to-gray-900 shadow-lg">
        <div className="relative w-full aspect-[51/40] overflow-hidden rounded-t-xl">
          <Image
            src={urlFor(service.image, { preset: "serviceCard" })}
            alt={service.name}
            fill
            sizes={getSizes("card")}
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 transition-opacity duration-500 ease-out group-hover:opacity-40" />
        </div>

        <div className="relative p-6">
          <h3 className="text-xl md:text-2xl font-bold text-white transition-all duration-300 ease-out group-hover:text-purple-300">
            {service.name}
          </h3>

          <p className="mt-3 text-gray-300 text-sm md:text-base line-clamp-3 transition-all duration-300 ease-out group-hover:text-gray-100">
            {service.description}
          </p>

          {service.price && (
            <p className="mt-3 inline-block rounded-full bg-purple-600/20 px-3 py-1 text-sm font-semibold text-purple-300 backdrop-blur-sm">
              Цена&nbsp;от&nbsp;{service.price}&nbsp;лв.
            </p>
          )}

          <div className="relative mt-6">
            <div onClick={handleButtonClick}>
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
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 rounded-b-xl bg-gradient-to-r from-purple-500/0 via-purple-500 to-purple-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </div>
  );
};

export default SingleService;
