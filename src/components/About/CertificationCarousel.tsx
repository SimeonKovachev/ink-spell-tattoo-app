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
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
          Сертификати & Награди
        </h3>
        <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
          Професионалните ни постижения и сертификати, които гарантират
          качеството на нашите услуги
        </p>
      </div>

      <div className="relative">
        {certifications.length > 1 && (
          <>
            <button
              onClick={handlePrevClick}
              className="absolute left-2 md:left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 p-3 md:p-4 rounded-full bg-purple-600/90 hover:bg-purple-500 text-white transition-all duration-300 shadow-xl backdrop-blur-sm hover:scale-110"
              aria-label="Previous certification"
            >
              <ChevronLeft size={28} />
            </button>

            <button
              onClick={handleNextClick}
              className="absolute right-2 md:right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 p-3 md:p-4 rounded-full bg-purple-600/90 hover:bg-purple-500 text-white transition-all duration-300 shadow-xl backdrop-blur-sm hover:scale-110"
              aria-label="Next certification"
            >
              <ChevronRight size={28} />
            </button>
          </>
        )}

        <div className="overflow-hidden px-4 md:px-12 lg:px-20">
          <div
            className="relative flex items-center justify-center min-h-[500px] md:min-h-[580px] lg:min-h-[620px]"
            style={{
              perspective: "1600px",
              perspectiveOrigin: "center center",
            }}
          >
            {certifications.map((cert, index) => {
              const angleStep = (2 * Math.PI) / certifications.length;
              const currentAngle = (index - currentIndex) * angleStep;

              const radius =
                screenWidth < 768 ? 220 : screenWidth < 1024 ? 300 : 380;
              const translateX = Math.sin(currentAngle) * radius;
              const translateZ = Math.cos(currentAngle) * radius - radius;
              const rotateY = (currentAngle * 180) / Math.PI;

              const normalizedZ = (translateZ + radius) / (2 * radius);
              const scale = 0.72 + normalizedZ * 0.33;
              const opacity = 0.35 + normalizedZ * 0.65;

              const zIndex = Math.round(normalizedZ * 25) + 1;

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
                  <div className="relative w-[340px] md:w-[420px] lg:w-[480px] h-[480px] md:h-[560px] lg:h-[600px] group">
                    {/* CARD BACKGROUND */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 backdrop-blur-md border-2 border-purple-500/30 rounded-2xl shadow-2xl transition-all duration-500 group-hover:shadow-purple-500/30 group-hover:border-purple-400/50 group-hover:scale-[1.02]">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(cert.category)} opacity-10 rounded-2xl`}
                      />
                    </div>

                    {/* CATEGORY BADGE */}
                    <div className="absolute -top-3 -right-3 z-10">
                      <div
                        className={`w-14 h-14 rounded-full bg-gradient-to-br ${getCategoryColor(cert.category)} flex items-center justify-center shadow-xl ring-4 ring-purple-500/30 transition-all duration-300 group-hover:ring-purple-400/50 group-hover:scale-105`}
                      >
                        {getCategoryIcon(cert.category)}
                      </div>
                    </div>

                    {/* CERTIFICATE IMAGE*/}
                    <div className="relative w-full h-[300px] md:h-[360px] lg:h-[400px] overflow-hidden rounded-t-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50">
                      {cert.image?.asset?.url ? (
                        <Image
                          src={urlFor(cert.image, { preset: "certification" })}
                          alt={cert.image.alt || cert.title}
                          fill
                          sizes={getSizes("certification")}
                          className="object-contain p-4 md:p-5 transition-transform duration-700 group-hover:scale-105"
                          priority={isCenter}
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-700/50 flex items-center justify-center">
                          <FaAward className="w-16 h-16 text-gray-400" />
                        </div>
                      )}

                      {/* GRADIENT OVERLAY */}
                      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent pointer-events-none" />
                    </div>

                    {/* CARD CONTENT */}
                    <div className="relative h-[180px] md:h-[200px] lg:h-[200px] p-5 md:p-6 z-10 flex flex-col">
                      <div className="flex-1 min-h-0 flex flex-col justify-between">
                        <div className="space-y-2.5">
                          <h4 className="text-white font-bold text-base md:text-lg lg:text-xl line-clamp-2 transition-all duration-300 group-hover:text-purple-300 leading-tight">
                            {cert.title}
                          </h4>

                          <div className="flex items-center gap-2">
                            <Building className="w-4 h-4 text-purple-400 flex-shrink-0" />
                            <span className="text-gray-200 text-xs md:text-sm line-clamp-1 font-medium">
                              {cert.issuingOrganization}
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-purple-400 flex-shrink-0" />
                            <span className="text-gray-200 text-xs md:text-sm font-medium">
                              {new Date(cert.dateIssued).getFullYear()}
                            </span>
                          </div>
                        </div>

                        {/* CLICK INDICATOR - Always at bottom */}
                        {isCenter && (
                          <div className="text-center pt-3">
                            <span className="text-xs text-purple-300 bg-purple-600/30 px-2.5 py-1 rounded-full border-2 border-purple-400/50 font-semibold inline-block backdrop-blur-sm animate-pulse">
                              🔍 Кликнете за детайли
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* HOVER GLOW */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${getCategoryColor(cert.category)} opacity-10 blur-xl`}
                      />
                    </div>

                    {/* SHINE EFFECT */}
                    <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
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
          <div className="flex justify-center mt-10 gap-2.5">
            {certifications.map((_, index) => (
              <button
                key={index}
                onClick={() => goToIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-purple-500 w-10 shadow-lg shadow-purple-500/40"
                    : "bg-gray-600 w-2.5 hover:bg-gray-500 hover:w-5"
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
