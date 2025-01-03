"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "../Common/Button";
import { Calendar } from "lucide-react";
import { slides } from "@/config/homeHeroSlides.config";

export default function Header() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [initialRender, setInitialRender] = useState(true);
  
  useEffect(() => {
    // Set correct viewport height
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVH(); // Set initial value
    window.addEventListener('resize', setVH);

    const timeout = setTimeout(() => {
      setInitialRender(false);
    }, 50);

    const interval = setInterval(() => {
      switchToNextSlide();
    }, 7000);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
      window.removeEventListener('resize', setVH);
    };
  }, [currentSlide]);

  const switchToNextSlide = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setIsFading(false);
    }, 500);
  };

  const switchToSlide = (index: number) => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsFading(false);
    }, 500);
  };

  return (
    <header className="relative flex items-center justify-center bg-black text-white overflow-hidden" style={{ height: 'calc(var(--vh, 1vh) * 100)' }}>
      {/* Rest of your header content remains exactly the same */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.heading}
            fill
            style={{
              objectFit: "cover",
              transform:
                currentSlide === index && !initialRender
                  ? "scale(1.2)"
                  : "scale(1.1)",
            }}
            className={`transition-transform ${
              currentSlide === index && !initialRender
                ? "duration-[5000ms]"
                : "duration-[1000ms]"
            } ease-out`}
          />
        </div>
      ))}

      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-black opacity-90"
          style={{
            maskImage:
              "radial-gradient(circle, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0.9) 100%)",
            WebkitMaskImage:
              "radial-gradient(circle, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0.9) 100%)",
          }}
        ></div>
      </div>

      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div
        className={`relative z-10 px-8 md:px-16 lg:px-20 text-center max-w-4xl mx-auto transition-opacity duration-500 ${
          isFading ? "opacity-0" : "opacity-100"
        }`}
      >
        <h2
          className="text-sm sm:text-base md:text-lg uppercase font-semibold tracking-wide text-accent-purple mb-2"
          style={{
            fontFamily: "var(--font-body)",
          }}
        >
          {slides[currentSlide].subheading}
        </h2>
        <h1
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 sm:mb-6"
          style={{
            color: "var(--text-color)",
          }}
        >
          {slides[currentSlide].heading}
        </h1>
        <p
          className="mb-6 sm:mb-8 text-sm sm:text-base md:text-lg text-gray-300"
          style={{
            fontFamily: "var(--font-body)",
          }}
        >
          {slides[currentSlide].description}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <Button
            text="Запишете Час"
            type="filled"
            icon={<Calendar size={20} />}
            size="md"
            navigateTo="/contact"
          />
          <Button
            text="Разгледайте Галерията"
            type="outlined"
            size="md"
            navigateTo="/gallery"
          />
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 sm:hidden z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
              currentSlide === index
                ? "bg-accent-purple border-accent-purple scale-110"
                : "border-gray-500 hover:border-accent-purple"
            }`}
            onClick={() => switchToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>

      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 hidden sm:flex flex-col gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
              currentSlide === index
                ? "bg-accent-purple border-accent-purple scale-110"
                : "border-gray-500 hover:border-accent-purple"
            }`}
            onClick={() => switchToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </header>
  );
}