import React, { useEffect, useState, useMemo } from "react";
import styles from "../../styles/Preloader.module.css";

const PreLoader = () => {
  const loadingTexts = useMemo(
    () => [
      "Inking your page...",
      "Sketching perfection...",
      "Ink in progress...",
      "Art loading...",
      "Drawing magic...",
    ],
    []
  );

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % loadingTexts.length);
        setFadeIn(true);
      }, 500);
    }, 3000);

    return () => clearInterval(textInterval);
  }, [loadingTexts]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-gray-900 to-black">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.1),rgba(0,0,0,0))]" />
        <div className="absolute -inset-[10px] opacity-50">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent blur-xl animate-pulse-strong"
              style={{
                transform: `translateY(${i * 33.33}%)`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative flex flex-col items-center">
        <div className={styles.pencil}>
          <div className={styles.pencil__ball_point} />
          <div className={styles.pencil__cap} />
          <div className={styles.pencil__cap_base} />
          <div className={styles.pencil__middle} />
          <div className={styles.pencil__eraser} />
        </div>
        <div className={styles.line} />

        <div className="mt-16 text-center">
          <h2
            className={`text-xl md:text-2xl font-subheading text-white transition-opacity duration-500 ease-in-out ${
              fadeIn ? "opacity-100" : "opacity-0"
            }`}
          >
            {loadingTexts[currentTextIndex]}
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"
                style={{
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: "1s",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default PreLoader;
