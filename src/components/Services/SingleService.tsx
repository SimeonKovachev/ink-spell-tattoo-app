import { Service } from "@/types/service";
import Image from "next/image";
import Link from "next/link";
import Button from "../Common/Button";

const SingleService = ({ service }: { service: Service }) => {
  return (
    <div className="group relative rounded-lg bg-gray-800 shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Service Image */}
      <div className="relative w-full h-[200px] overflow-hidden">
        <Image
          src={service.image?.asset?.url || "/images/placeholder.jpg"}
          alt={service.name}
          fill
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Service Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-white mb-2">
          {service.name}
        </h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-3">
          {service.description}
        </p>
        <Link href={`/services/${service.slug.current}`}>
          <Button text="View More" type="filled" />
        </Link>
      </div>
    </div>
  );
};

export default SingleService;
