"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "../Button";

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative h-screen flex items-center justify-center text-white bg-black">
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
            style={{ objectFit: "cover", transform: "scale(1.1)" }}
            className="transition-transform duration-[10000ms] ease-out"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12 lg:px-20 text-center">
        <h1 className="text-heading font-bold">
          {slides[currentSlide].heading}
          <br />
          <span className="text-accent-purple">
            {slides[currentSlide].subheading}
          </span>
        </h1>
        <p className="text-lg md:text-xl mt-4 mb-8 text-gray-300 max-w-lg mx-auto">
          {slides[currentSlide].description}
        </p>
        <div className="flex justify-center gap-6">
          <Button text="Book Now" />
          <Button text="View Gallery" type="outlined" />
        </div>
      </div>
    </header>
  );
}
