"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "../Common/Button";

const slides = [
  {
    image: "/images/header/home-background1.jpg",
    heading: "Ink Your Story",
    subheading: "Cast Your Spell",
    description: "Turn your story into an unforgettable piece of art!",
  },
  {
    image: "/images/header/home-background2.jpg",
    heading: "Precision & Artistry",
    subheading: "Your Story, Our Craft",
    description: "Experience the finest tattoos with our skilled artists.",
  },
  {
    image: "/images/header/home-background3.jpg",
    heading: "Custom Tattoos",
    subheading: "Tailored Just for You",
    description: "Get unique designs that express your individuality.",
  },
];

export default function Header() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setInitialRender(false);
    }, 50);

    const interval = setInterval(() => {
      switchToNextSlide();
    }, 5000);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
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
    <header className="relative h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Background Slides */}
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

      {/* Vignette Effect */}
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

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div
        className={`relative z-10 px-6 md:px-12 lg:px-20 text-center max-w-4xl transition-opacity duration-500 ${
          isFading ? "opacity-0" : "opacity-100"
        }`}
      >
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
          style={{
            color: "var(--text-color)",
          }}
        >
          {slides[currentSlide].heading}
          <br />
          <span className="mt-2">{slides[currentSlide].subheading}</span>
        </h1>
        <p
          className="mt-4 mb-8 text-lg md:text-xl text-gray-300"
          style={{
            fontFamily: "var(--font-body)",
          }}
        >
          {slides[currentSlide].description}
        </p>
        <div className="flex justify-center gap-4">
          <Button text="Book Now" navigateTo="/contact" />
          <Button text="View Gallery" type="outlined" navigateTo="/gallery" />
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 flex flex-col gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full border-2 ${
              currentSlide === index
                ? "bg-accent-purple border-accent-purple"
                : "border-gray-500"
            }`}
            onClick={() => switchToSlide(index)}
          ></button>
        ))}
      </div>
    </header>
  );
}
