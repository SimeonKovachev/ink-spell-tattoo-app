"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, Calendar, Building } from "lucide-react";
import {
  FaTrophy,
  FaCertificate,
  FaGraduationCap,
  FaStar,
  FaAward,
} from "react-icons/fa";
import { Certification } from "@/types/certification";
import { urlFor, getSizes } from "@/lib/image";
import Button from "../Common/Button";

interface CertificationModalProps {
  certification: Certification | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function CertificationModal({
  certification,
  isOpen,
  onClose,
}: CertificationModalProps) {
  // Handle ESC key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !certification) return null;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "award":
        return <FaTrophy className="w-8 h-8 text-yellow-400" />;
      case "certification":
        return <FaCertificate className="w-8 h-8 text-blue-400" />;
      case "training":
        return <FaGraduationCap className="w-8 h-8 text-green-400" />;
      case "recognition":
        return <FaStar className="w-8 h-8 text-purple-400" />;
      default:
        return <FaAward className="w-8 h-8 text-gray-400" />;
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

  const getCategoryName = (category: string) => {
    switch (category) {
      case "award":
        return "Награда";
      case "certification":
        return "Сертификат";
      case "training":
        return "Обучение";
      case "recognition":
        return "Признание";
      default:
        return "Сертификат";
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("bg-BG", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop - Following your design */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content - Following your glass morphism style */}
      <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-gray-900/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-purple-500/20">
        {/* Background Gradient Effects */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
          <div className="absolute -top-20 -right-20 w-[400px] h-[400px] animate-gradient-spin">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-500/30 via-fuchsia-500/20 to-pink-500/30 blur-[80px] animate-pulse-strong"></div>
          </div>
          <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] animate-gradient-spin-reverse">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/30 to-indigo-500/20 blur-[70px] animate-pulse-strong"></div>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 p-3 rounded-full bg-gray-800/90 hover:bg-gray-700/90 text-gray-300 hover:text-white transition-all duration-300 shadow-lg backdrop-blur-sm"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12">
          {/* Image Section */}
          <div className="relative">
            {/* Category Badge */}
            <div className="absolute -top-4 -left-4 z-10">
              <div
                className={`w-20 h-20 rounded-full bg-gradient-to-br ${getCategoryColor(certification.category)} flex items-center justify-center shadow-2xl ring-4 ring-purple-500/30`}
              >
                {getCategoryIcon(certification.category)}
              </div>
            </div>

            {/* Certificate Image - Full Document Display */}
            <div className="relative w-full bg-gray-800/50 backdrop-blur-sm border border-purple-900/30 rounded-2xl overflow-hidden">
              {certification.image?.asset?.url ? (
                <div
                  className="relative w-full"
                  style={{ aspectRatio: "auto" }}
                >
                  <Image
                    src={urlFor(certification.image, {
                      preset: "certificationModal",
                    })}
                    alt={certification.image.alt || certification.title}
                    width={1200}
                    height={1200}
                    sizes={getSizes("certificationModal")}
                    className="w-full h-auto object-contain p-4"
                    priority
                    style={{
                      maxHeight: "70vh",
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </div>
              ) : (
                <div className="w-full h-96 flex items-center justify-center">
                  <FaAward className="w-24 h-24 text-gray-400" />
                </div>
              )}
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Category and Title */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span
                  className={`px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r ${getCategoryColor(certification.category)} text-white shadow-lg`}
                >
                  {getCategoryName(certification.category)}
                </span>
                {certification.isActive && (
                  <span className="px-4 py-2 rounded-full text-sm font-bold bg-green-500/20 text-green-400 border border-green-500/30 backdrop-blur-sm">
                    Активен
                  </span>
                )}
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {certification.title}
              </h2>

              <p className="text-gray-300 text-xl leading-relaxed">
                {certification.description}
              </p>
            </div>

            {/* Details Cards */}
            <div className="space-y-6">
              {/* Issuing Organization */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-purple-500/20">
                <div className="p-3 rounded-lg bg-purple-500/20">
                  <Building className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Издадено от</div>
                  <div className="text-white font-bold text-lg">
                    {certification.issuingOrganization}
                  </div>
                </div>
              </div>

              {/* Date Issued */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-purple-500/20">
                <div className="p-3 rounded-lg bg-purple-500/20">
                  <Calendar className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">
                    Дата на издаване
                  </div>
                  <div className="text-white font-bold text-lg">
                    {formatDate(certification.dateIssued)}
                  </div>
                </div>
              </div>
            </div>

            {/* Action Button - Using your custom Button component */}
            <div className="pt-6">
              <Button
                text="Затвори"
                type="filled"
                onClick={onClose}
                responsiveSize={{ sm: "md", md: "lg", lg: "lg" }}
                icon={<X size={20} />}
                className="transform hover:scale-105 shadow-xl hover:shadow-purple-500/25"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
