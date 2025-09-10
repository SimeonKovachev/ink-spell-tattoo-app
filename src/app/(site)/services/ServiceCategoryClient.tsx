// src/app/(site)/services/ServiceCategoryClient.tsx - БУТОНИ ИЗВЪН GRID-А
"use client";

import { Service, ServiceCategory, SERVICE_CATEGORIES } from "@/types/service";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Star,
  MapPin,
  Phone,
  Users,
  Award,
} from "lucide-react";
import SectionTitle from "@/components/Common/SectionTitle";
import SingleService from "@/components/Services/SingleService";
import Button from "@/components/Common/Button";

interface ServiceCategoryClientProps {
  category: ServiceCategory;
  services: Service[];
}

const getCategorySpecificContent = (category: ServiceCategory) => {
  switch (category) {
    case "tattoo":
      return {
        ctaTitle: "Готови за вашата мечтана татуировка?",
        ctaDescription:
          "Свържете се с нас за безплатна консултация и започнете пътуването към създаването на вашата уникална татуировка.",
        servicesTitle: "Всички татуировки",
        servicesDescription:
          "Разгледайте всички наши татуировки услуги с професионално качество и артистичен подход.",
      };
    case "permanent-makeup":
      return {
        ctaTitle: "Готови за вашия нов перманентен грим?",
        ctaDescription:
          "Свържете се с нас за безплатна консултация и открийте как перманентният грим може да подобри естествената ви красота.",
        servicesTitle: "Всички услуги за перманентен грим",
        servicesDescription:
          "Разгледайте всички наши услуги за перманентен грим с дълготрайни резултати и естествен вид.",
      };
    case "temporary-tattoo":
      return {
        ctaTitle: "Готови за вашите временни татуировки?",
        ctaDescription:
          "Свържете се с нас за безплатна консултация и разберете как временните татуировки могат да бъдат перфектни за вашето събитие.",
        servicesTitle: "Всички услуги за временни татуировки",
        servicesDescription:
          "Разгледайте всички наши услуги за временни татуировки - идеални за събития и тестване на дизайни.",
      };
    case "inkless-tattoo":
      return {
        ctaTitle: "Готови за безмастилните ни татуировки?",
        ctaDescription:
          "Свържете се с нас за безплатна консултация и разберете как безмастилните татуировки могат да подобрят външния вид на кожата ви.",
        servicesTitle: "Всички безмастилни татуировки",
        servicesDescription:
          "Разгледайте всички наши безмастилни татуировки за корекция на стрии, белези и кожни несъвършенства.",
      };
    default:
      return {
        ctaTitle: "Готови за новата услуга?",
        ctaDescription: "Свържете се с нас за безплатна консултация.",
        servicesTitle: "Всички услуги",
        servicesDescription: "Разгледайте всички наши услуги.",
      };
  }
};

export default function ServiceCategoryClient({
  category,
  services,
}: ServiceCategoryClientProps) {
  const [showAllServices, setShowAllServices] = useState(false);
  const categoryInfo = SERVICE_CATEGORIES[category];
  const displayedServices = showAllServices ? services : services.slice(0, 6);
  const content = getCategorySpecificContent(category);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-gray-900 to-black" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative">
          {/* Content Grid - БЕЗ БУТОНИ */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="space-y-10">
              <div className="space-y-6">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600/20 to-purple-800/20 backdrop-blur-sm rounded-full border border-purple-500/30">
                  <Award
                    className="w-4 h-4 text-purple-400"
                    fill="currentColor"
                  />
                  <span className="text-purple-300 text-sm font-medium">
                    Професионални услуги в Плевен
                  </span>
                </div>

                <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                  {categoryInfo.h1 ||
                    `Открийте нашите ${categoryInfo.name.toLowerCase()}`}
                </h1>

                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                  {categoryInfo.description}
                </p>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-gray-300 bg-gray-800/40 rounded-lg p-4 backdrop-blur-sm border border-gray-700/30">
                  <MapPin className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span className="text-sm">
                    ул. Петко Р. Славейков 39, Плевен
                  </span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 bg-gray-800/40 rounded-lg p-4 backdrop-blur-sm border border-gray-700/30">
                  <Phone className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span className="text-sm">+359 894 300 545</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 bg-gray-800/40 rounded-lg p-4 backdrop-blur-sm border border-gray-700/30 sm:col-span-2">
                  <Clock className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span className="text-sm">
                    Понеделник - Събота: 10:00 - 19:00 часа
                  </span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="aspect-[8/5] relative rounded-2xl overflow-hidden shadow-2xl border border-purple-500/20">
                <Image
                  src={`/images/services/${categoryInfo.slug}-hero.jpg`}
                  alt={`${categoryInfo.name} - Ink Spell Tattoo Studio в Плевен`}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Floating Stats */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-gradient-to-r from-purple-600/90 to-purple-800/90 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5" />
                        <span className="font-semibold">{services.length}</span>
                      </div>
                      <span className="text-sm opacity-90">
                        {services.length === 1
                          ? "налична услуга"
                          : "налични услуги"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-purple-800/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-purple-800/20 to-purple-500/20 rounded-full blur-xl" />
            </div>
          </div>

          {/* CTA Buttons - ИЗНЕСЕНИ ИЗВЪН GRID-А */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
              <div className="w-full sm:flex-1">
                <Link href="/contact" className="block">
                  <Button
                    text="Запази консултация"
                    type="filled"
                    responsiveSize={{ sm: "md", md: "lg", lg: "lg" }}
                    icon={<ArrowRight className="ml-2 w-5 h-5" />}
                    className="w-full justify-center"
                  />
                </Link>
              </div>
              <div className="w-full sm:flex-1">
                <Link href="/gallery" className="block">
                  <Button
                    text="Разгледай галерия"
                    type="outlined"
                    responsiveSize={{ sm: "md", md: "lg", lg: "lg" }}
                    className="w-full justify-center"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <SectionTitle
              subtitle="Нашите услуги"
              title={content.servicesTitle}
              paragraph={content.servicesDescription}
              width="800px"
              center
            />
          </div>

          {services.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedServices.map((service) => (
                <div key={service._id} className="h-full">
                  <SingleService service={service} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-12 border border-gray-700/30 max-w-md mx-auto">
                <Star className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <div className="text-gray-300 text-xl mb-6">
                  Скоро ще добавим услуги в тази категория
                </div>
                <Link href="/contact" className="inline-block">
                  <Button
                    text="Свържете се с нас"
                    type="outlined"
                    responsiveSize={{ sm: "md", md: "lg", lg: "lg" }}
                  />
                </Link>
              </div>
            </div>
          )}

          {services.length > 6 && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAllServices(!showAllServices)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600/20 to-purple-800/20 hover:from-purple-600/30 hover:to-purple-800/30 border border-purple-500/30 rounded-lg text-purple-300 hover:text-white transition-all font-medium"
              >
                {showAllServices
                  ? "Покажи по-малко"
                  : `Покажи всички (${services.length})`}
                <ArrowRight
                  className={`w-4 h-4 transition-transform ${showAllServices ? "rotate-180" : ""}`}
                />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-gray-900 to-purple-900/30" />
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-5xl font-bold text-white">
                {content.ctaTitle}
              </h2>

              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                {content.ctaDescription}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 max-w-2xl mx-auto">
              <div className="w-full sm:flex-1">
                <Link href="/contact" className="block">
                  <Button
                    text="Безплатна консултация"
                    type="filled"
                    responsiveSize={{ sm: "md", md: "lg", lg: "lg" }}
                    icon={<ArrowRight className="ml-2 w-5 h-5" />}
                    className="w-full justify-center"
                  />
                </Link>
              </div>
              <div className="w-full sm:flex-1">
                <Link href="/services" className="block">
                  <Button
                    text="Всички услуги"
                    type="outlined"
                    responsiveSize={{ sm: "md", md: "lg", lg: "lg" }}
                    className="w-full justify-center"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
