"use client";

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

  const [randomText, setRandomText] = useState<string>("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * loadingTexts.length);
    setRandomText(loadingTexts[randomIndex]);
  }, [loadingTexts]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-primary-bg text-text-color">
      <div className={styles.pencil}>
        <div className={styles.pencil__ball_point}></div>
        <div className={styles.pencil__cap}></div>
        <div className={styles.pencil__cap_base}></div>
        <div className={styles.pencil__middle}></div>
        <div className={styles.pencil__eraser}></div>
      </div>
      <div className={styles.line}></div>
      <h2 className="mt-16 text-xl text-center font-subheading">
        {randomText}
      </h2>
    </div>
  );
};

export default PreLoader;
