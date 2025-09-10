"use client";

import Link from "next/link";
import {
  ServicesByCategory,
  SERVICE_CATEGORIES,
  ServiceCategory,
} from "@/types/service";
import { ArrowRight, Users } from "lucide-react";
import Image from "next/image";

interface ServiceCategoriesNavProps {
  servicesByCategory: ServicesByCategory;
}

export default function ServiceCategoriesNav({
  servicesByCategory,
}: ServiceCategoriesNavProps) {
  const categories: ServiceCategory[] = [
    "tattoo",
    "permanent-makeup",
    "temporary-tattoo",
    "inkless-tattoo",
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Категории услуги
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Разгледайте нашите специализирани услуги по категории
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            const categoryInfo = SERVICE_CATEGORIES[category];
            const servicesCount = servicesByCategory[category]?.length || 0;

            return (
              <Link
                key={category}
                href={`/services/${categoryInfo.slug}`}
                className="group relative h-full rounded-xl bg-gradient-to-b from-gray-800/95 to-gray-900 overflow-hidden transition-all duration-500 ease-out hover:-translate-y-1 cursor-pointer shadow-lg"
              >
                <div className="relative h-full rounded-xl bg-gradient-to-b from-gray-800 to-gray-900">
                  <div className="relative w-full aspect-[8/5] overflow-hidden rounded-t-xl">
                    <Image
                      src={`/images/services/${categoryInfo.slug}-hero.jpg`}
                      alt={categoryInfo.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 transition-opacity duration-500 ease-out group-hover:opacity-40" />
                  </div>

                  <div className="relative p-6">
                    <h3 className="text-xl font-bold text-white mb-2 transition-all duration-300 ease-out group-hover:text-purple-300">
                      {categoryInfo.name}
                    </h3>

                    <p className="text-gray-300 text-sm mb-4 line-clamp-2 transition-all duration-300 ease-out group-hover:text-gray-100">
                      {categoryInfo.shortDescription}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-purple-400">
                        <Users className="w-4 h-4" />
                        <span className="text-sm">
                          {servicesCount}{" "}
                          {servicesCount === 1 ? "услуга" : "услуги"}
                        </span>
                      </div>

                      <div className="flex items-center gap-1 text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                        <span className="text-sm">Разгледай</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1 rounded-b-xl bg-gradient-to-r from-purple-500/0 via-purple-500 to-purple-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
