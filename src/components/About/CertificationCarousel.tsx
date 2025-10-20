"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Calendar, Building } from "lucide-react";
import {
  FaTrophy,
  FaCertificate,
  FaGraduationCap,
  FaStar,
  FaAward,
} from "react-icons/fa";
import { Certification } from "@/types/certification";
import { urlFor, getSizes } from "@/lib/image";
import { useConversions } from "@/lib/gtag";
import CertificationModal from "./CertificationModal";

interface CertificationCarouselProps {
  certifications: Certification[];
}

export default function CertificationCarousel({
  certifications,
}: CertificationCarouselProps) {
  const conversions = useConversions();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [screenWidth, setScreenWidth] = useState(0);
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    updateScreenWidth();
    window.addEventListener("resize", updateScreenWidth);
    return () => window.removeEventListener("resize", updateScreenWidth);
  }, []);

  const maxIndex = Math.max(0, certifications.length - 1);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const goToIndex = (index: number) => {
    setCurrentIndex(index);
    setAutoScrollEnabled(false);
    setTimeout(() => setAutoScrollEnabled(true), 100);
  };

  const handlePrevClick = () => {
    goToPrev();
    setAutoScrollEnabled(false);
    setTimeout(() => setAutoScrollEnabled(true), 100);
  };

  const handleNextClick = () => {
    goToNext();
    setAutoScrollEnabled(false);
    setTimeout(() => setAutoScrollEnabled(true), 100);
  };

  useEffect(() => {
    if (certifications.length <= 1 || !autoScrollEnabled) return;

    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [goToNext, certifications.length, autoScrollEnabled]);

  const handleCertClick = (cert: Certification) => {
    conversions.buttonClick(`certification_${cert.slug.current}`);
    setSelectedCert(cert);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "award":
        return <FaTrophy className="w-7 h-7 text-yellow-400" />;
      case "certification":
        return <FaCertificate className="w-7 h-7 text-blue-400" />;
      case "training":
        return <FaGraduationCap className="w-7 h-7 text-green-400" />;
      case "recognition":
        return <FaStar className="w-7 h-7 text-purple-400" />;
      default:
        return <FaAward className="w-7 h-7 text-gray-400" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "award":
        return "from-yellow-500 to-orange-500";
      case "certification":
        return "from-blue-500 to-indigo-500";
      case "training":
        return "from-green-500 to-emerald-500";
      case "recognition":
        return "from-purple-500 to-fuchsia-500";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  if (!certifications.length) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-500/10 rounded-full mb-4">
          <FaCertificate className="w-8 h-8 text-gray-400" />
        </div>
        <p className="text-gray-400 text-lg">
          Няма налични сертификати в момента
        </p>
      </div>
    );
  }

  return (
    <div className="relative w-full">
      <div className="text-center mb-16">
        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
          Сертификати & Награди
        </h3>
        <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
          Професионалните ни постижения и сертификати, които гарантират
          качеството на нашите услуги
        </p>
      </div>

      <div className="relative">
        {certifications.length > 1 && (
          <>
            <button
              onClick={handlePrevClick}
              className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-purple-600/90 hover:bg-purple-500 text-white transition-all duration-300 shadow-2xl backdrop-blur-sm hover:scale-110"
              aria-label="Previous certification"
            >
              <ChevronLeft size={32} />
            </button>

            <button
              onClick={handleNextClick}
              className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-purple-600/90 hover:bg-purple-500 text-white transition-all duration-300 shadow-2xl backdrop-blur-sm hover:scale-110"
              aria-label="Next certification"
            >
              <ChevronRight size={32} />
            </button>
          </>
        )}

        <div className="overflow-hidden px-4 md:px-16 lg:px-24">
          <div
            className="relative flex items-center justify-center min-h-[550px] md:min-h-[650px] lg:min-h-[750px]"
            style={{
              perspective: "2000px",
              perspectiveOrigin: "center center",
            }}
          >
            {certifications.map((cert, index) => {
              const angleStep = (2 * Math.PI) / certifications.length;
              const currentAngle = (index - currentIndex) * angleStep;

              // ПО-ГОЛЯМ РАДИУС ЗА ПО-БЛИЗКИ КАРТИ
              const radius =
                screenWidth < 768 ? 240 : screenWidth < 1024 ? 350 : 450;
              const translateX = Math.sin(currentAngle) * radius;
              const translateZ = Math.cos(currentAngle) * radius - radius;
              const rotateY = (currentAngle * 180) / Math.PI;

              const normalizedZ = (translateZ + radius) / (2 * radius);
              // ПО-ГОЛЯМ SCALE ЗА ЦЕНТРАЛНАТА КАРТА
              const scale = 0.75 + normalizedZ * 0.35;
              const opacity = 0.3 + normalizedZ * 0.7;

              const zIndex = Math.round(normalizedZ * 30) + 1;

              const isCenter = Math.abs(currentAngle) < angleStep / 2;

              return (
                <div
                  key={cert._id}
                  className="absolute transition-all duration-700 ease-out cursor-pointer"
                  style={{
                    transform: `translate3d(${translateX}px, 0, ${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                    opacity,
                    zIndex,
                  }}
                  onClick={() =>
                    isCenter ? handleCertClick(cert) : goToIndex(index)
                  }
                >
                  <div className="relative w-[380px] md:w-[480px] lg:w-[550px] h-[500px] md:h-[600px] lg:h-[680px] group">
                    {/* CARD BACKGROUND */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 backdrop-blur-md border-2 border-purple-500/30 rounded-3xl shadow-2xl transition-all duration-500 group-hover:shadow-purple-500/40 group-hover:border-purple-400/60 group-hover:scale-[1.02]">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(cert.category)} opacity-10 rounded-3xl`}
                      />
                    </div>

                    {/* CATEGORY BADGE */}
                    <div className="absolute -top-4 -right-4 z-10">
                      <div
                        className={`w-16 h-16 rounded-full bg-gradient-to-br ${getCategoryColor(cert.category)} flex items-center justify-center shadow-2xl ring-4 ring-purple-500/40 transition-all duration-300 group-hover:ring-purple-400/60 group-hover:scale-110`}
                      >
                        {getCategoryIcon(cert.category)}
                      </div>
                    </div>

                    {/* CERTIFICATE IMAGE */}
                    <div className="relative w-full h-[340px] md:h-[400px] lg:h-[460px] overflow-hidden rounded-t-3xl bg-gradient-to-br from-gray-800/50 to-gray-900/50">
                      {cert.image?.asset?.url ? (
                        <Image
                          src={urlFor(cert.image, { preset: "certification" })}
                          alt={cert.image.alt || cert.title}
                          fill
                          sizes={getSizes("certification")}
                          className="object-contain p-6 transition-transform duration-700 group-hover:scale-110"
                          priority={isCenter}
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-700/50 flex items-center justify-center">
                          <FaAward className="w-20 h-20 text-gray-400" />
                        </div>
                      )}

                      {/* GRADIENT OVERLAY */}
                      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent pointer-events-none" />
                    </div>

                    {/* CARD CONTENT */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      <h4 className="text-white font-bold text-xl md:text-2xl lg:text-3xl mb-4 line-clamp-2 transition-all duration-300 group-hover:text-purple-300 leading-tight">
                        {cert.title}
                      </h4>

                      <div className="flex items-center gap-3 mb-3">
                        <Building className="w-5 h-5 text-purple-400 flex-shrink-0" />
                        <span className="text-gray-200 text-base md:text-lg line-clamp-1 font-medium">
                          {cert.issuingOrganization}
                        </span>
                      </div>

                      <div className="flex items-center gap-3 mb-5">
                        <Calendar className="w-5 h-5 text-purple-400 flex-shrink-0" />
                        <span className="text-gray-200 text-base md:text-lg font-medium">
                          {new Date(cert.dateIssued).getFullYear()}
                        </span>
                      </div>

                      {/* CLICK INDICATOR */}
                      {isCenter && (
                        <div className="text-center animate-pulse">
                          <span className="text-sm md:text-base text-purple-300 bg-purple-600/30 px-4 py-2 rounded-full border-2 border-purple-400/50 font-semibold inline-block backdrop-blur-sm">
                            🔍 Кликнете за детайли
                          </span>
                        </div>
                      )}
                    </div>

                    {/* HOVER GLOW */}
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div
                        className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${getCategoryColor(cert.category)} opacity-30 blur-2xl`}
                      />
                    </div>

                    {/* SHINE EFFECT */}
                    <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* DOT NAVIGATION */}
        {certifications.length > 1 && (
          <div className="flex justify-center mt-12 gap-3">
            {certifications.map((_, index) => (
              <button
                key={index}
                onClick={() => goToIndex(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-purple-500 w-12 shadow-lg shadow-purple-500/50"
                    : "bg-gray-600 w-3 hover:bg-gray-500 hover:w-6"
                }`}
                aria-label={`Go to certification ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* CERTIFICATION MODAL */}
      <CertificationModal
        certification={selectedCert}
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </div>
  );
}
