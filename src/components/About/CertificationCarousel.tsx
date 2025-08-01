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

    const interval = setInterval(goToNext, 4000);
    return () => clearInterval(interval);
  }, [goToNext, certifications.length, autoScrollEnabled]);

  const handleCertClick = (cert: Certification) => {
    conversions.buttonClick(`certification_${cert.slug.current}`);
    setSelectedCert(cert);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "award":
        return <FaTrophy className="w-6 h-6 text-yellow-400" />;
      case "certification":
        return <FaCertificate className="w-6 h-6 text-blue-400" />;
      case "training":
        return <FaGraduationCap className="w-6 h-6 text-green-400" />;
      case "recognition":
        return <FaStar className="w-6 h-6 text-purple-400" />;
      default:
        return <FaAward className="w-6 h-6 text-gray-400" />;
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
      <div className="text-center mb-14">
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
          Сертификати & Награди
        </h3>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
          Професионалните ни постижения и сертификати, които гарантират
          качеството на нашите услуги
        </p>
      </div>

      <div className="relative">
        {certifications.length > 1 && (
          <>
            <button
              onClick={handlePrevClick}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-gray-800/90 hover:bg-gray-700/90 text-gray-300 hover:text-white transition-all duration-300 shadow-lg backdrop-blur-sm"
              aria-label="Previous certification"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={handleNextClick}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-gray-800/90 hover:bg-gray-700/90 text-gray-300 hover:text-white transition-all duration-300 shadow-lg backdrop-blur-sm"
              aria-label="Next certification"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}

        <div className="overflow-hidden px-12">
          <div
            className="relative flex items-center justify-center min-h-[450px] md:min-h-[500px] lg:min-h-[550px]"
            style={{
              perspective: "1200px",
              perspectiveOrigin: "center center",
            }}
          >
            {certifications.map((cert, index) => {
              const angleStep = (2 * Math.PI) / certifications.length;
              const currentAngle = (index - currentIndex) * angleStep;

              const radius =
                screenWidth < 768 ? 180 : screenWidth < 1024 ? 220 : 280;
              const translateX = Math.sin(currentAngle) * radius;
              const translateZ = Math.cos(currentAngle) * radius - radius;
              const rotateY = (currentAngle * 180) / Math.PI;

              const normalizedZ = (translateZ + radius) / (2 * radius);
              const scale = 0.7 + normalizedZ * 0.3;
              const opacity = 0.4 + normalizedZ * 0.6;

              const zIndex = Math.round(normalizedZ * 20) + 1;

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
                  <div className="relative w-[320px] md:w-[360px] lg:w-[400px] h-[400px] md:h-[440px] lg:h-[480px] group">
                    <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm border border-purple-900/30 rounded-2xl shadow-2xl transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-purple-500/20 group-hover:border-purple-500/50">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(cert.category)} opacity-10 rounded-2xl`}
                      />
                    </div>

                    {/* Category Badge */}
                    <div className="absolute -top-3 -right-3 z-10">
                      <div
                        className={`w-12 h-12 rounded-full bg-gradient-to-br ${getCategoryColor(cert.category)} flex items-center justify-center shadow-lg ring-2 ring-purple-500/30 transition-all duration-300 group-hover:ring-purple-500/50`}
                      >
                        {getCategoryIcon(cert.category)}
                      </div>
                    </div>

                    {/* Certificate Image - Smart Aspect Ratio */}
                    <div className="relative w-full h-56 md:h-60 lg:h-72 overflow-hidden rounded-t-2xl bg-gray-800/30">
                      {cert.image?.asset?.url ? (
                        <Image
                          src={urlFor(cert.image, { preset: "certification" })}
                          alt={cert.image.alt || cert.title}
                          fill
                          sizes={getSizes("certification")}
                          className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                          priority={isCenter}
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-700/50 flex items-center justify-center">
                          <FaAward className="w-12 h-12 text-gray-400" />
                        </div>
                      )}

                      {/* Subtle overlay only at bottom for text readability */}
                      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-gray-900/80 to-transparent pointer-events-none" />
                    </div>

                    {/* Card Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h4 className="text-white font-bold text-lg md:text-xl mb-2 line-clamp-2 transition-all duration-300 group-hover:text-purple-300">
                        {cert.title}
                      </h4>

                      <div className="flex items-center gap-2 mb-1">
                        <Building className="w-3 h-3 text-gray-400" />
                        <span className="text-gray-300 text-xs line-clamp-1">
                          {cert.issuingOrganization}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 mb-3">
                        <Calendar className="w-3 h-3 text-gray-400" />
                        <span className="text-gray-300 text-xs">
                          {new Date(cert.dateIssued).getFullYear()}
                        </span>
                      </div>

                      {/* Click Indicator for Center Card */}
                      {isCenter && (
                        <div className="text-center">
                          <span className="text-xs text-purple-400 bg-purple-500/20 px-2 py-1 rounded-full border border-purple-500/30">
                            Кликнете за детайли
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${getCategoryColor(cert.category)} opacity-20 blur-xl`}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dot Navigation - Following your testimonials style */}
        {certifications.length > 1 && (
          <div className="flex justify-center mt-8 gap-2">
            {certifications.map((_, index) => (
              <button
                key={index}
                onClick={() => goToIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-purple-500 w-8"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Go to certification ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Certification Modal */}
      <CertificationModal
        certification={selectedCert}
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </div>
  );
}
