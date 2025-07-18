"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Mail, Phone, ExternalLink } from "lucide-react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import {
  footerLinks,
  socialLinks,
  studioInfo,
} from "@/config/footerData.config";
import { useConversions } from "@/lib/gtag";

export default function Footer() {
  const conversions = useConversions();

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "Instagram":
        return FaInstagram;
      case "Facebook":
        return FaFacebook;
      case "TikTok":
        return FaTiktok;
      default:
        return null;
    }
  };

  // Contact handlers
  const handlePhoneClick = () => {
    conversions.phoneClick();
  };

  const handleEmailClick = () => {
    conversions.emailClick();
  };

  const handleMapClick = () => {
    conversions.buttonClick("footer_map_location");
  };

  const handleSocialClick = (platform: string) => {
    conversions.buttonClick(`social_${platform.toLowerCase()}`);
  };

  const handleFooterLinkClick = (linkName: string) => {
    conversions.buttonClick(
      `footer_link_${linkName.toLowerCase().replace(/\s+/g, "_")}`
    );
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-900 to-black text-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-6 lg:col-span-1">
            <Link href="/" className="inline-block group">
              <h2 className="heading text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 transition-all duration-300 group-hover:from-purple-500 group-hover:to-purple-700">
                Ink Spell
              </h2>
            </Link>
            <div className="space-y-4">
              <a
                href={`https://maps.google.com/?q=${studioInfo.address}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleMapClick}
                className="flex items-center gap-3 group hover:text-purple-400 transition-all duration-300"
              >
                <MapPin className="w-5 h-5 text-purple-500 group-hover:text-purple-400" />
                <p className="text-sm leading-relaxed">
                  {studioInfo.address}
                  <br />
                  {studioInfo.city}
                </p>
              </a>
              <a
                href={`mailto:${studioInfo.email}`}
                onClick={handleEmailClick}
                className="flex items-center gap-3 group hover:text-purple-400 transition-all duration-300"
              >
                <Mail className="w-5 h-5 text-purple-500 group-hover:text-purple-400" />
                <span className="text-sm">{studioInfo.email}</span>
              </a>
              <a
                href={`tel:${studioInfo.phone}`}
                onClick={handlePhoneClick}
                className="flex items-center gap-3 group hover:text-purple-400 transition-all duration-300"
              >
                <Phone className="w-5 h-5 text-purple-500 group-hover:text-purple-400" />
                <span className="text-sm">{studioInfo.phone}</span>
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([key, links]) => (
            <div key={key} className="space-y-6">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      onClick={() => handleFooterLinkClick(link.name)}
                      className="text-sm group flex items-center gap-2 hover:text-purple-400 transition-all duration-300"
                    >
                      <span>{link.name}</span>
                      <ExternalLink className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="space-y-6 lg:col-span-1">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider">
              Свържете се с нас
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const IconComponent = getIconComponent(social.icon);
                return IconComponent ? (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleSocialClick(social.name)}
                    className="p-3 rounded-full bg-gray-800 text-gray-400 hover:bg-purple-600 hover:text-white transform hover:-translate-y-1 transition-all duration-300"
                    aria-label={`Последвайте ни в ${social.name}`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                ) : null;
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800/50">
          <div className="flex justify-center items-center">
            <p className="text-sm text-center text-gray-400">
              © {new Date().getFullYear()} {studioInfo.name}. Всички права
              запазени.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-purple-900/5 to-transparent" />
      </div>
    </footer>
  );
}
